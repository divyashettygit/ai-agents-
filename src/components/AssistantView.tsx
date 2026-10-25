import React, { useState, useRef, useEffect } from 'react';
import { FarmerProfile, Language, ChatMessage } from '../types';
import { SPECIALIST_AGENTS } from '../data/mockData';
import { I18N } from '../data/translations';
import {
  Send,
  Mic,
  MicOff,
  Volume2,
  Trash2,
  Sparkles,
  Bot,
  User,
  AlertCircle,
  Radio,
  HelpCircle,
} from 'lucide-react';

interface AssistantViewProps {
  farmer: FarmerProfile;
  language: Language;
  onRewardCoins: (amount: number, reason: string) => void;
}

export const AssistantView: React.FC<AssistantViewProps> = ({
  farmer,
  language,
  onRewardCoins,
}) => {
  const t = I18N[language];
  const [selectedAgentId, setSelectedAgentId] = useState('coordinator');

  const getInitialGreeting = () => {
    if (language === 'te') {
      return `నమస్కారం ${farmer.name} గారు! 🌱 నేను మీ అగ్రిసాథి మల్టీ-ఏజెంట్ వ్యవసాయ సహాయకుడిని.
మీ ${farmer.crop} పంట కోసం పంట సంరక్షణ, ఎరువుల మోతాదు, వాతావరణం, మార్కెట్ ధరలు మరియు పీఎం ఫసల్ బీమా పథకాలలో మీకు సహాయం చేయడానికి సిద్ధంగా ఉన్నాను.

మీ ప్రశ్నను మాట్లాడండి లేదా కింద టైప్ చేయండి!`;
    }
    if (language === 'hi') {
      return `नमस्ते ${farmer.name} जी! 🌱 मैं आपका एग्रीसाथी मल्टी-एजेंट सहायक हूँ।
आपकी ${farmer.crop} की फसल के लिए रोग निदान, खाद की खुराक, मौसम परामर्श और मंडी भाव में मदद कर सकता हूँ।

आप बोलकर या लिखकर अपना प्रश्न पूछ सकते हैं!`;
    }
    return `Namaste ${farmer.name}! 🌱 I am your AgriSathi Multi-Agent Assistant.
I orchestrate specialist agents for Crop Health, Soil Nutrients, Weather Advisory, Mandi Prices, and PMFBY Schemes for your ${farmer.crop} farm in ${farmer.location}.

How can I assist your field operations today? You can type or click the microphone to speak!`;
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'bot',
      agentId: 'coordinator',
      text: getInitialGreeting(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  // Update initial message if language changes and only 1 message
  useEffect(() => {
    if (messages.length === 1 && messages[0].sender === 'bot') {
      setMessages([
        {
          id: 'init-lang-update',
          sender: 'bot',
          agentId: 'coordinator',
          text: getInitialGreeting(),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [language]);

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const [showVoiceHelp, setShowVoiceHelp] = useState(false);
  const [agentLogs, setAgentLogs] = useState<
    Array<{ agentName: string; icon: string; query: string; time: string }>
  >([
    {
      agentName: language === 'te' ? 'అగ్రిసాథి కోఆర్డినేటర్' : 'AgriSathi Coordinator',
      icon: '✦',
      query: language === 'te' ? 'రైతు ప్రశ్నల కోసం ఏజెంట్లు సిద్ధంగా ఉన్నాయి' : 'System initialized and standing by for farmer queries',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Clean up recognition on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }
    };
  }, []);

  const toggleVoiceInput = async () => {
    setVoiceError(null);

    // If currently listening, stop gracefully
    if (isListening) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          console.warn('Error stopping recognition:', e);
        }
      }
      setIsListening(false);
      return;
    }

    const SpeechRecognitionClass =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      setVoiceError(
        language === 'te'
          ? 'మీ బ్రౌజర్‌లో లైవ్ స్పీచ్ రికగ్నిషన్ లభ్యం కాలేదు. దయచేసి Google Chrome లేదా Edge ఉపయోగించండి, లేదా కింద ఉన్న ప్రశ్నను ఎంచుకోండి.'
          : 'Speech recognition is not supported in this browser. Please use Chrome/Edge or tap a query chip below.'
      );
      setShowVoiceHelp(true);
      return;
    }

    // Attempt to prompt for microphone hardware permissions
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // Immediately stop tracks so SpeechRecognition has dedicated microphone control
        stream.getTracks().forEach((track) => track.stop());
      } catch (mediaErr: any) {
        console.warn('getUserMedia check notification (proceeding to SpeechRecognition):', mediaErr);
      }
    }

    try {
      // Abort any previous running instance
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {}
      }

      const recognition = new SpeechRecognitionClass();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      const langCodes: Record<Language, string> = {
        en: 'en-IN',
        hi: 'hi-IN',
        te: 'te-IN',
        kn: 'kn-IN',
      };
      recognition.lang = langCodes[language] || 'en-IN';

      recognition.onstart = () => {
        setIsListening(true);
        setVoiceError(null);
      };

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = 0; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        if (transcript) {
          setInputText(transcript);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('SpeechRecognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setVoiceError(
            language === 'te'
              ? 'మైక్రోఫోన్ అనుమతి నిరోధించబడింది. బ్రౌజర్ అడ్రస్ బార్‌లో (🔒) మైక్రోఫోన్ అనుమతించండి.'
              : 'Microphone blocked. Please grant microphone permission in your browser address bar.'
          );
          setShowVoiceHelp(true);
        } else if (event.error === 'no-speech') {
          setVoiceError(
            language === 'te'
              ? 'ధ్వని వినపడలేదు. దయచేసి మైక్ నొక్కి దగ్గరగా మాట్లాడండి.'
              : 'No speech detected. Please tap the mic and speak clearly.'
          );
        } else if (event.error === 'network') {
          setVoiceError(
            language === 'te'
              ? 'వాయిస్ నెట్‌వర్క్ లోపం. ఇంటర్నెట్ కనెక్షన్ తనిఖీ చేయండి లేదా ప్రశ్నను టైప్ చేయండి.'
              : 'Voice network service error. Please check your connection or type your query.'
          );
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
      recognitionRef.current = recognition;
    } catch (err: any) {
      console.error('Failed to start speech recognition:', err);
      setIsListening(false);
      setVoiceError(
        language === 'te'
          ? 'వాయిస్ రికగ్నిషన్ ప్రారంభించలేకపోయాము. దయచేసి మళ్లీ ప్రయత్నించండి.'
          : 'Could not start speech recognition. Please try again.'
      );
    }
  };

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const voiceLangs: Record<Language, string> = {
        en: 'en-IN',
        hi: 'hi-IN',
        te: 'te-IN',
        kn: 'kn-IN',
      };
      utterance.lang = voiceLangs[language] || 'en-IN';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSend = async (textToSend?: string) => {
    const msg = (textToSend || inputText).trim();
    if (!msg || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: msg,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    let effectiveAgent = selectedAgentId;
    if (selectedAgentId === 'coordinator') {
      const lower = msg.toLowerCase();
      if (lower.includes('leaf') || lower.includes('spot') || lower.includes('disease') || lower.includes('blight') || lower.includes('pest') || lower.includes('తెగులు') || lower.includes('ఆకు') || lower.includes('రోగ')) {
        effectiveAgent = 'crop';
      } else if (lower.includes('fertilizer') || lower.includes('urea') || lower.includes('dap') || lower.includes('soil') || lower.includes('ph') || lower.includes('ఎరువు') || lower.includes('యూరియా') || lower.includes('ఖాద్')) {
        effectiveAgent = 'soil';
      } else if (lower.includes('weather') || lower.includes('rain') || lower.includes('wind') || lower.includes('spray') || lower.includes('వాతావరణం') || lower.includes('వర్షం') || lower.includes('మౌసం')) {
        effectiveAgent = 'weather';
      } else if (lower.includes('price') || lower.includes('mandi') || lower.includes('market') || lower.includes('rate') || lower.includes('ధర') || lower.includes('మార్కెట్') || lower.includes('భావ')) {
        effectiveAgent = 'market';
      } else if (lower.includes('insurance') || lower.includes('bima') || lower.includes('scheme') || lower.includes('subsidy') || lower.includes('బీమా') || lower.includes('పథకం') || lower.includes('యోజన')) {
        effectiveAgent = 'policy';
      }
    }

    const currentAgentObj =
      SPECIALIST_AGENTS.find((a) => a.id === effectiveAgent) || SPECIALIST_AGENTS[0];

    setAgentLogs((prev) => [
      {
        agentName: currentAgentObj.name,
        icon: currentAgentObj.icon,
        query: msg.length > 50 ? `${msg.slice(0, 50)}...` : msg,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
      ...prev.slice(0, 7),
    ]);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: msg,
          agentId: effectiveAgent,
          farmerProfile: farmer,
          language,
        }),
      });

      const data = await res.json();
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        agentId: effectiveAgent,
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
      onRewardCoins(20, language === 'te' ? 'AI ఏజెంట్‌ను సంప్రదించారు' : 'Consulted Multi-Agent Farming Assistant');
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        agentId: effectiveAgent,
        text:
          language === 'te'
            ? `${farmer.crop} పంట సలహా: ఆకులను నిరంతరం తనిఖీ చేయండి, సరైన నేల తేమను నిర్వహించండి మరియు పంట కోతకు ముందు మార్కెట్ ధరలను తనిఖీ చేయండి.`
            : `Specialist Advice for ${farmer.crop}: Ensure regular field inspection, maintain optimal soil moisture, and check local mandi rates before harvesting.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    window.speechSynthesis?.cancel();
    setMessages([
      {
        id: 'init-cleared',
        sender: 'bot',
        agentId: 'coordinator',
        text: getInitialGreeting(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const activeAgentData =
    SPECIALIST_AGENTS.find((a) => a.id === selectedAgentId) || SPECIALIST_AGENTS[0];

  const suggestions =
    language === 'te'
      ? [
          'వరి ఆకులపై గోధుమ రంగు మచ్చలు ఉన్నాయి',
          '2 ఎకరాల వరికి యూరియా, డీఏపీ మోతాదు ఎంత?',
          'ఈరోజు మందుల పిచికారీకి అనుకూలమా?',
          'పీఎం ఫసల్ బీమా క్లెయిమ్ ఎలా చేయాలి?',
        ]
      : [
          'My paddy leaves have brown spots',
          'Calculate Urea & DAP doses for 2 acres',
          'Is today safe for pesticide spraying?',
          'How to claim PM Fasal Bima insurance?',
        ];

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            <span>✦</span> {t.aiAgents}
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            {t.agentTitle}
          </h1>
        </div>

        <button
          onClick={handleClearChat}
          className="text-xs font-bold px-3.5 py-2 bg-white border border-slate-200 text-slate-600 hover:text-rose-600 hover:border-rose-200 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
        >
          <Trash2 className="w-3.5 h-3.5" />
          {t.clearChat}
        </button>
      </div>

      {/* Specialist Agent Selection Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {SPECIALIST_AGENTS.map((agent) => (
          <button
            key={agent.id}
            onClick={() => setSelectedAgentId(agent.id)}
            className={`text-left p-3 rounded-2xl border transition-all flex flex-col justify-between ${
              selectedAgentId === agent.id
                ? 'bg-emerald-50/80 border-emerald-500 ring-2 ring-emerald-500/20 shadow-sm'
                : 'bg-white border-slate-200/90 hover:bg-slate-50'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl">{agent.icon}</span>
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                  {agent.badge}
                </span>
              </div>
              <b className="text-xs font-bold text-slate-900 block leading-tight">
                {language === 'te'
                  ? agent.id === 'coordinator'
                    ? 'కోఆర్డినేటర్'
                    : agent.id === 'crop'
                    ? 'క్రాప్ డాక్టర్'
                    : agent.id === 'soil'
                    ? 'ఎరువుల సలహాదారు'
                    : agent.id === 'weather'
                    ? 'వాతావరణ నిపుణుడు'
                    : agent.id === 'market'
                    ? 'మార్కెట్ విశ్లేషకుడు'
                    : 'ప్రభుత్వ పథకాలు'
                  : agent.name.split(' (')[0]}
              </b>
            </div>
            <span className="text-[10px] text-slate-500 mt-2 block line-clamp-1">
              {agent.role}
            </span>
          </button>
        ))}
      </div>

      {/* Chat Layout: Left Chat Interface & Right Agent Activity Log */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chat Window (8 Cols) */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs flex flex-col h-[580px]">
          {/* Active Agent Banner */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base shadow-2xs">
                {activeAgentData.icon}
              </div>
              <div>
                <b className="text-xs font-bold text-slate-900 block">
                  {language === 'te'
                    ? activeAgentData.id === 'coordinator'
                      ? 'అగ్రిసాథి మాస్టర్ కోఆర్డినేటర్'
                      : activeAgentData.id === 'crop'
                      ? 'క్రాప్ హెల్త్ & పాథాలజీ ఏజెంట్'
                      : activeAgentData.id === 'soil'
                      ? 'మట్టి & ఎరువుల సలహాదారు'
                      : activeAgentData.id === 'weather'
                      ? 'వాతావరణ ప్రణాళిక ఏజెంట్'
                      : activeAgentData.id === 'market'
                      ? 'మండీ మార్కెట్ నిపుణుడు'
                      : 'ప్రభుత్వ పథకాలు & బీమా ఏజెంట్'
                    : activeAgentData.name}
                </b>
                <span className="text-[10px] text-slate-500">{activeAgentData.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{language === 'te' ? 'AI ఏజెంట్ యాక్టివ్' : 'Multi-Agent Mesh Active'}</span>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-gradient-to-b from-slate-50/50 to-white">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-xl bg-emerald-700 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-2xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed whitespace-pre-wrap ${
                    m.sender === 'user'
                      ? 'bg-[#1b6243] text-white rounded-br-xs shadow-xs'
                      : 'bg-white border border-slate-200/90 text-slate-800 rounded-bl-xs shadow-2xs'
                  }`}
                >
                  <p>{m.text}</p>
                  <div
                    className={`flex items-center justify-between gap-4 mt-2 pt-1 border-t ${
                      m.sender === 'user'
                        ? 'border-white/20 text-emerald-100'
                        : 'border-slate-100 text-slate-400'
                    } text-[10px]`}
                  >
                    <span>{m.timestamp}</span>
                    {m.sender === 'bot' && (
                      <button
                        onClick={() => speakMessage(m.text)}
                        className="hover:text-emerald-700 flex items-center gap-1 font-bold transition-colors cursor-pointer"
                        title="Read this answer aloud"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{t.listenVoice}</span>
                      </button>
                    )}
                  </div>
                </div>

                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded-xl bg-slate-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-2xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs text-slate-500 pl-9">
                <div className="w-4 h-4 border-2 border-emerald-600/30 border-t-emerald-600 rounded-full animate-spin" />
                <span>
                  {language === 'te'
                    ? 'AI & వ్యవసాయ నిపుణుల సలహాను సిద్ధం చేస్తున్నాము...'
                    : 'Consulting AI & Agronomy knowledge base...'}
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-4 py-2 bg-slate-50/80 border-t border-slate-100 flex items-center gap-2 overflow-x-auto">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
              {t.suggestionsLabel}
            </span>
            {suggestions.map((chip) => (
              <button
                key={chip}
                onClick={() => handleSend(chip)}
                className="text-[11px] whitespace-nowrap bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50 text-slate-700 px-3 py-1 rounded-full transition-colors shrink-0 shadow-2xs"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Active Listening Indicator */}
          {isListening && (
            <div className="bg-emerald-50 border-t border-emerald-200 px-4 py-2.5 flex items-center justify-between text-xs text-emerald-950 animate-fadeIn">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-600"></span>
                </span>
                <span className="font-bold text-slate-800 text-[11px] sm:text-xs">
                  {language === 'te'
                    ? '🎙️ వింటున్నాము... మీ ప్రశ్నను స్పష్టంగా మాట్లాడండి'
                    : '🎙️ Listening to microphone... Speak your question now'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="w-1 h-3 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-5 bg-emerald-700 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-3.5 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <button
                  type="button"
                  onClick={toggleVoiceInput}
                  className="ml-2 text-[10px] font-bold text-rose-700 hover:text-rose-900 bg-rose-100 hover:bg-rose-200 px-2 py-0.5 rounded-md transition-colors"
                >
                  {language === 'te' ? 'ఆపండి (Stop)' : 'Stop'}
                </button>
              </div>
            </div>
          )}

          {/* Voice Error Notification Banner */}
          {voiceError && (
            <div className="bg-amber-50 border-t border-amber-200 px-4 py-2.5 flex items-start justify-between text-xs text-amber-950">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-medium leading-relaxed block">{voiceError}</span>
                  <div className="mt-1 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setVoiceError(null);
                        toggleVoiceInput();
                      }}
                      className="text-[10px] font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-2 py-0.5 rounded transition-colors"
                    >
                      {language === 'te' ? 'మళ్లీ ప్రయత్నించండి' : 'Retry Mic'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowVoiceHelp(true)}
                      className="text-[10px] font-bold text-slate-700 hover:text-slate-900 underline"
                    >
                      {language === 'te' ? 'సహాయం & నమూనా ప్రశ్నలు' : 'Mic Help & Sample Queries'}
                    </button>
                    <a
                      href={window.location.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] font-bold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-50 px-2 py-0.5 rounded transition-colors inline-flex items-center gap-1"
                      title="Open full page to bypass iframe permissions"
                    >
                      <span>⛶</span> {language === 'te' ? 'పూర్తి ట్యాబ్‌లో తెరవండి' : 'Open in Full Tab'}
                    </a>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setVoiceError(null)}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                ✕
              </button>
            </div>
          )}

          {/* Voice Help & Sample Spoken Queries Tray */}
          {showVoiceHelp && (
            <div className="bg-slate-50 border-t border-slate-200 p-3 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <b className="font-bold text-slate-800 flex items-center gap-1.5 text-xs">
                  <Radio className="w-3.5 h-3.5 text-emerald-600" />
                  {language === 'te' ? 'రైతు వాయిస్ ప్రశ్నల గైడ్' : 'Farmer Voice Questions Guide'}
                </b>
                <button
                  type="button"
                  onClick={() => setShowVoiceHelp(false)}
                  className="text-[11px] text-slate-500 hover:text-slate-800 font-bold"
                >
                  ✕
                </button>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {language === 'te'
                  ? '1. బ్రౌజర్ అడ్రస్ బార్‌లోని 🔒 లేదా 🎙️ ఐకాన్‌పై క్లిక్ చేసి మైక్రోఫోన్‌ను "Allow" చేయండి.\n2. లేదా కింద ఉన్న నమూనా ప్రశ్నను ఒక్క క్లిక్‌తో అడగండి:'
                  : '1. Click the 🔒 lock or 🎙️ mic icon in your browser URL bar and allow microphone permissions.\n2. Or click any spoken farming question below to ask instantly:'}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      handleSend(s);
                      setShowVoiceHelp(false);
                    }}
                    className="text-[11px] bg-white border border-emerald-300 hover:bg-emerald-50 text-emerald-900 px-2.5 py-1 rounded-lg transition-colors font-medium shadow-2xs"
                  >
                    🗣️ "{s}"
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form with Voice Mic */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={isListening ? t.listening : t.chatPlaceholder}
              className="flex-1 text-xs rounded-xl border border-slate-200 px-3.5 py-2.5 bg-slate-50/70 focus:bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            {/* Mic button for farmers */}
            <button
              type="button"
              onClick={toggleVoiceInput}
              className={`p-2.5 rounded-xl border transition-all flex items-center justify-center shrink-0 ${
                isListening
                  ? 'bg-rose-500 text-white border-rose-600 ring-4 ring-rose-200 animate-pulse shadow-sm'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400'
              }`}
              title={
                language === 'te'
                  ? isListening
                    ? 'వాయిస్ రికార్డింగ్ ఆపండి'
                    : 'వాయిస్ ద్వారా మాట్లాడటానికి క్లిక్ చేయండి'
                  : isListening
                  ? 'Stop recording'
                  : 'Click to speak via microphone'
              }
            >
              {isListening ? (
                <MicOff className="w-4 h-4 text-white" />
              ) : (
                <Mic className="w-4 h-4 text-emerald-700" />
              )}
            </button>

            {/* Send button */}
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="bg-[#1b6243] hover:bg-[#144b33] disabled:opacity-50 text-white font-bold p-2.5 rounded-xl transition-all shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Agent Orchestration & Activity Log (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-xs">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              {t.orchestrationLog}
            </h3>
            <p className="text-[11px] text-slate-500 mb-3">{t.orchestrationSub}</p>

            <div className="space-y-2 text-xs">
              {agentLogs.map((log, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/70 rounded-2xl p-2.5 flex items-start gap-2.5"
                >
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    {log.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <b className="text-slate-800 text-[11px] font-bold">{log.agentName}</b>
                      <span>{log.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 truncate mt-0.5">{log.query}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
