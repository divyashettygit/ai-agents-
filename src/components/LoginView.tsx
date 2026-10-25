import React, { useState } from 'react';
import { FarmerProfile, Language } from '../types';
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Globe,
  Eye,
  EyeOff,
  CheckCircle2,
  Sparkles,
  Download,
} from 'lucide-react';

interface LoginViewProps {
  onLogin: (profile: FarmerProfile) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const I18N_AUTH = {
  en: {
    signInTitle: 'Welcome back',
    signInSubtitle: 'Please enter your details to sign in',
    signUpTitle: 'Create an account',
    signUpSubtitle: 'Join AgriSathi to get started today',
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your name',
    emailPhoneLabel: 'Email or Mobile Number',
    emailPhonePlaceholder: 'name@example.com or mobile',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your password',
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordPlaceholder: 'Re-enter your password',
    rememberMe: 'Remember me for 30 days',
    forgotPassword: 'Forgot password?',
    signInBtn: 'Sign In',
    signUpBtn: 'Create Account',
    noAccount: "Don't have an account?",
    signUpLink: 'Sign up',
    hasAccount: 'Already have an account?',
    signInLink: 'Sign in',
    orContinueWith: 'Or continue as guest',
    quickGuestBtn: 'Quick Explore as Guest',
    passwordMismatch: 'Passwords do not match',
    terms: 'By continuing, you agree to AgriSathi Terms of Service and Privacy Policy.',
  },
  te: {
    signInTitle: 'తిరిగి స్వాగతం',
    signInSubtitle: 'లాగిన్ చేయడానికి మీ వివరాలను నమోదు చేయండి',
    signUpTitle: 'కొత్త ఖాతాను సృష్టించండి',
    signUpSubtitle: 'అగ్రిసార్థిలో చేరడానికి ఇప్పుడే ప్రారంభించండి',
    nameLabel: 'పూర్తి పేరు',
    namePlaceholder: 'మీ పేరు నమోదు చేయండి',
    emailPhoneLabel: 'ఈమెయిల్ లేదా మొబైల్ నంబర్',
    emailPhonePlaceholder: 'ఈమెయిల్ లేదా మొబైల్',
    passwordLabel: 'పాస్‌వర్డ్',
    passwordPlaceholder: 'మీ పాస్‌వర్డ్ నమోదు చేయండి',
    confirmPasswordLabel: 'పాస్‌వర్డ్‌ను నిర్ధారించండి',
    confirmPasswordPlaceholder: 'పాస్‌వర్డ్ మళ్లీ నమోదు చేయండి',
    rememberMe: 'నన్ను గుర్తుంచుకోండి',
    forgotPassword: 'పాస్‌వర్డ్ మర్చిపోయారా?',
    signInBtn: 'లాగిన్ అవ్వండి (Sign In)',
    signUpBtn: 'ఖాతాను సృష్టించండి (Sign Up)',
    noAccount: 'ఖాతా లేదా?',
    signUpLink: 'నమోదు చేసుకోండి (Sign up)',
    hasAccount: 'ఇప్పటికే ఖాతా ఉందా?',
    signInLink: 'లాగిన్ అవ్వండి (Sign in)',
    orContinueWith: 'లేదా గెస్ట్‌గా కొనసాగండి',
    quickGuestBtn: 'అతిథిగా వేగంగా చూడండి (Guest)',
    passwordMismatch: 'పాస్‌వర్డ్‌లు సరిపోలడం లేదు',
    terms: 'కొనసాగడం ద్వారా, మీరు సేవా నిబంధనలను అంగీకరిస్తున్నారు.',
  },
  hi: {
    signInTitle: 'वापसी पर स्वागत है',
    signInSubtitle: 'कृपया साइन इन करने के लिए अपना विवरण दर्ज करें',
    signUpTitle: 'नया खाता बनाएं',
    signUpSubtitle: 'शुरुआत करने के लिए एग्रीसाथी से जुड़ें',
    nameLabel: 'पूरा नाम',
    namePlaceholder: 'अपना नाम दर्ज करें',
    emailPhoneLabel: 'ईमेल या मोबाइल नंबर',
    emailPhonePlaceholder: 'ईमेल या मोबाइल नंबर',
    passwordLabel: 'पासवर्ड',
    passwordPlaceholder: 'अपना पासवर्ड दर्ज करें',
    confirmPasswordLabel: 'पासवर्ड की पुष्टि करें',
    confirmPasswordPlaceholder: 'पासवर्ड पुनः दर्ज करें',
    rememberMe: 'मुझे याद रखें',
    forgotPassword: 'पासवर्ड भूल गए?',
    signInBtn: 'साइन इन करें',
    signUpBtn: 'खाता बनाएं',
    noAccount: 'क्या आपके पास खाता नहीं है?',
    signUpLink: 'साइन अप करें',
    hasAccount: 'पहले से एक खाता है?',
    signInLink: 'साइन इन करें',
    orContinueWith: 'या अतिथि के रूप में जारी रखें',
    quickGuestBtn: 'अतिथि के रूप में एक्सप्लोर करें',
    passwordMismatch: 'पासवर्ड मेल नहीं खाते',
    terms: 'जारी रखकर, आप नियमों और गोपनीयता नीति से सहमत होते हैं।',
  },
  kn: {
    signInTitle: 'ಮರಳಿ ಸ್ವಾಗತ',
    signInSubtitle: 'ಸೈನ್ ಇನ್ ಮಾಡಲು ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ',
    signUpTitle: 'ಹೊಸ ಖಾತೆಯನ್ನು ರಚಿಸಿ',
    signUpSubtitle: 'ಪ್ರಾರಂಭಿಸಲು ಅಗ್ರಿಸಾಥಿಗೆ ಸೇರಿ',
    nameLabel: 'ಪೂರ್ಣ ಹೆಸರು',
    namePlaceholder: 'ನಿಮ್ಮ ಹೆಸರು ನಮೂದಿಸಿ',
    emailPhoneLabel: 'ಇಮೇಲ್ ಅಥವಾ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
    emailPhonePlaceholder: 'ಇಮೇಲ್ ಅಥವಾ ಮೊಬೈಲ್',
    passwordLabel: 'ಪಾಸ್‌ವರ್ಡ್',
    passwordPlaceholder: 'ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ',
    confirmPasswordLabel: 'ಪಾಸ್‌ವರ್ಡ್ ಖಚಿತಪಡಿಸಿ',
    confirmPasswordPlaceholder: 'ಪಾಸ್‌ವರ್ಡ್ ಪುನಃ ನಮೂದಿಸಿ',
    rememberMe: 'ನನ್ನನ್ನು ನೆನಪಿಡಿ',
    forgotPassword: 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರುವಿರಾ?',
    signInBtn: 'ಸೈನ್ ಇನ್',
    signUpBtn: 'ಖಾತೆ ರಚಿಸಿ',
    noAccount: 'ಖಾತೆ ಇಲ್ಲವೇ?',
    signUpLink: 'ಸೈನ್ ಅಪ್ ಮಾಡಿ',
    hasAccount: 'ಈಗಾಗಲೇ ಖಾತೆ ಹೊಂದಿದ್ದೀರಾ?',
    signInLink: 'ಸೈನ್ ಇನ್ ಮಾಡಿ',
    orContinueWith: 'ಅಥವಾ ಅತಿಥಿಯಾಗಿ ಮುಂದುವರಿಯಿರಿ',
    quickGuestBtn: 'ಅತಿಥಿಯಾಗಿ ವೀಕ್ಷಿಸಿ',
    passwordMismatch: 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ',
    terms: 'ಮುಂದುವರಿಯುವ ಮೂಲಕ, ನೀವು ನಿಯಮಗಳನ್ನು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೀರಿ.',
  },
};

export const LoginView: React.FC<LoginViewProps> = ({
  onLogin,
  language,
  onLanguageChange,
}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('user@agrisathi.com');
  const [password, setPassword] = useState('password123');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [infoMsg, setInfoMsg] = useState<string | null>(null);

  const t = I18N_AUTH[language] || I18N_AUTH.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (isSignUp) {
      if (password !== confirmPassword) {
        setErrorMsg(t.passwordMismatch);
        return;
      }
      const newProfile: FarmerProfile = {
        name: name.trim() || 'New User',
        location: 'Hyderabad, Telangana',
        crop: 'Paddy',
        area: 2,
        phone: emailOrPhone.trim(),
        language,
        agriCoins: 2000,
      };
      onLogin(newProfile);
    } else {
      // Sign In
      const existingProfile: FarmerProfile = {
        name: name.trim() || 'Ramesh Reddy',
        location: 'Hyderabad, Telangana',
        crop: 'Paddy',
        area: 2,
        phone: emailOrPhone.trim() || '+91 98480 12345',
        language,
        agriCoins: 2000,
      };
      onLogin(existingProfile);
    }
  };

  const handleGuestLogin = () => {
    onLogin({
      name: 'Guest Farmer',
      location: 'Hyderabad, Telangana',
      crop: 'Paddy',
      area: 2,
      phone: '+91 98480 12345',
      language,
      agriCoins: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 relative">
      {/* Top Bar with Language Selector and Download ZIP */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 flex items-center gap-2">
        <a
          href="/agrisathi-project.zip"
          download="AgriSathi_Full_Source_Code.zip"
          className="flex items-center gap-1.5 bg-white border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 text-slate-700 rounded-xl px-3 py-1.5 shadow-xs text-xs font-bold transition-colors"
          title="Download complete project ZIP to run on your local PC"
        >
          <Download className="w-3.5 h-3.5 text-emerald-600" />
          <span className="hidden sm:inline">Download ZIP for PC</span>
          <span className="sm:hidden">ZIP</span>
        </a>

        <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-xl px-3 py-1.5 shadow-xs">
          <Globe className="w-4 h-4 text-slate-500" />
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value as Language)}
            className="bg-transparent text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer pr-1"
          >
            <option value="en">English</option>
            <option value="te">తెలుగు (Telugu)</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="kn">ಕನ್ನಡ (Kannada)</option>
          </select>
        </div>
      </div>

      {/* Main Authentication Card */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* App Logo */}
        <div className="flex justify-center items-center gap-2.5 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-[#1b6243] text-white flex items-center justify-center font-bold text-xl shadow-md">
            ✿
          </div>
          <span className="font-extrabold text-2xl tracking-tight text-[#14422e]">
            AgriSathi
          </span>
        </div>

        <h2 className="text-center text-2xl font-extrabold text-slate-900 tracking-tight">
          {isSignUp ? t.signUpTitle : t.signInTitle}
        </h2>
        <p className="mt-1 text-center text-xs text-slate-500">
          {isSignUp ? t.signUpSubtitle : t.signInSubtitle}
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 sm:px-8 shadow-xl shadow-slate-200/60 rounded-3xl border border-slate-200/80">
          {infoMsg && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              {infoMsg}
            </div>
          )}

          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* If Sign Up: Name field */}
            {isSignUp && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.nameLabel}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.namePlaceholder}
                    className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1b6243] focus:border-transparent transition-all"
                  />
                </div>
              </div>
            )}

            {/* Email or Phone field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.emailPhoneLabel}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder={t.emailPhonePlaceholder}
                  className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1b6243] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.passwordLabel}
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="w-full pl-9 pr-10 py-2.5 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1b6243] focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* If Sign Up: Confirm Password */}
            {isSignUp && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.confirmPasswordLabel}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder={t.confirmPasswordPlaceholder}
                    className="w-full pl-9 pr-10 py-2.5 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1b6243] focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Remember me & Forgot Password (Sign in mode) */}
            {!isSignUp && (
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 text-[#1b6243] focus:ring-[#1b6243]"
                  />
                  <span className="text-slate-600 font-medium">
                    {t.rememberMe}
                  </span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setErrorMsg(null);
                    setInfoMsg(
                      language === 'te'
                        ? 'పాస్‌వర్డ్ రీసెట్ లింక్ మీ ఈమెయిల్/మొబైల్‌కి పంపబడింది.'
                        : 'Password reset link sent to your email/phone.'
                    );
                  }}
                  className="text-xs font-bold text-[#1b6243] hover:underline focus:outline-none"
                >
                  {t.forgotPassword}
                </button>
              </div>
            )}

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#1b6243] hover:bg-[#144b33] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-950/10 active:scale-[0.99]"
              >
                <span>{isSignUp ? t.signUpBtn : t.signInBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-slate-400">
                {t.orContinueWith}
              </span>
            </div>
          </div>

          {/* 1-Click Guest Explore */}
          <button
            type="button"
            onClick={handleGuestLogin}
            className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 py-2.5 px-4 rounded-xl text-xs font-bold transition-colors border border-slate-200"
          >
            <span>{t.quickGuestBtn}</span>
          </button>

          {/* Toggle between Sign In & Sign Up */}
          <div className="mt-6 text-center text-xs text-slate-600">
            {isSignUp ? (
              <p>
                {t.hasAccount}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsSignUp(false);
                    setErrorMsg(null);
                  }}
                  className="font-bold text-[#1b6243] hover:underline ml-1 focus:outline-none"
                >
                  {t.signInLink}
                </button>
              </p>
            ) : (
              <p>
                {t.noAccount}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsSignUp(true);
                    setErrorMsg(null);
                  }}
                  className="font-bold text-[#1b6243] hover:underline ml-1 focus:outline-none"
                >
                  {t.signUpLink}
                </button>
              </p>
            )}
          </div>
        </div>

        {/* Small terms footer */}
        <p className="mt-4 text-center text-[11px] text-slate-400 max-w-xs mx-auto">
          {t.terms}
        </p>
      </div>
    </div>
  );
};
