import React, { useState, useEffect } from 'react';
import {
  X,
  Heart,
  Award,
  ChevronDown,
  ChevronUp,
  Share2,
  FileText,
  Volume2,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { VideoReel, Language } from '../types';
import { VIDEO_REELS } from '../data/mockData';
import { I18N } from '../data/translations';

interface VideoPlayerModalProps {
  video: VideoReel | null;
  onClose: () => void;
  language: Language;
  onRewardCoins: (amount: number, reason: string) => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  onClose,
  language,
  onRewardCoins,
}) => {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1280);
  const [claimedVideos, setClaimedVideos] = useState<Record<string, boolean>>({});
  const [showTakeaways, setShowTakeaways] = useState(false);
  const [useIframeFallback, setUseIframeFallback] = useState(false);

  const t = I18N[language];

  useEffect(() => {
    if (video) {
      setCurrentVideoId(video.id);
      setIsLiked(false);
      setLikeCount(Math.floor(1000 + Math.random() * 900));
      setShowTakeaways(false);
      setUseIframeFallback(false);
    }
  }, [video]);

  if (!video || !currentVideoId) return null;

  const currentIndex = VIDEO_REELS.findIndex((v) => v.id === currentVideoId);
  const currentVideo = VIDEO_REELS[currentIndex] || video;

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % VIDEO_REELS.length;
    setCurrentVideoId(VIDEO_REELS[nextIdx].id);
    setIsLiked(false);
    setShowTakeaways(false);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + VIDEO_REELS.length) % VIDEO_REELS.length;
    setCurrentVideoId(VIDEO_REELS[prevIdx].id);
    setIsLiked(false);
    setShowTakeaways(false);
  };

  const hasClaimed = !!claimedVideos[currentVideo.id];

  const handleClaim = () => {
    if (!hasClaimed) {
      onRewardCoins(50, `Watched Reel: ${currentVideo.title}`);
      setClaimedVideos((prev) => ({ ...prev, [currentVideo.id]: true }));
    }
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount((c) => c + 1);
      setIsLiked(true);
    } else {
      setLikeCount((c) => c - 1);
      setIsLiked(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: currentVideo.title,
        text: `Watch this farming video on AgriSathi: ${currentVideo.title}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${currentVideo.youtubeId}`);
      alert(language === 'te' ? 'వీడియో లింక్ కాపీ చేయబడింది!' : 'Video link copied to clipboard!');
    }
  };

  // Localized title & caption
  const title =
    language === 'te'
      ? currentVideo.titleTe
      : language === 'hi'
      ? currentVideo.titleHi
      : currentVideo.title;

  const caption =
    language === 'te'
      ? currentVideo.captionTe || currentVideo.caption
      : language === 'hi'
      ? currentVideo.captionHi || currentVideo.caption
      : currentVideo.caption;

  const category =
    language === 'te'
      ? currentVideo.categoryTe || currentVideo.category
      : currentVideo.category;

  const transcript =
    language === 'te'
      ? currentVideo.transcriptTe || currentVideo.transcript
      : language === 'hi'
      ? currentVideo.transcriptHi || currentVideo.transcript
      : currentVideo.transcript;

  const keyPoints =
    language === 'te' && currentVideo.keyPointsTe
      ? currentVideo.keyPointsTe
      : currentVideo.keyPoints;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      {/* Instagram/Meesho Style Reel Frame */}
      <div className="relative w-full max-w-[420px] h-[88vh] max-h-[820px] bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col justify-between select-none">
        {/* Top Header Bar */}
        <div className="absolute top-0 inset-x-0 z-30 p-4 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black tracking-wide text-white bg-rose-600 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span>●</span> {language === 'te' ? 'షార్ట్స్ / రీల్స్' : 'Shorts / Reels'}
            </span>
            <span className="text-[11px] text-white/80 font-medium">
              {currentIndex + 1} / {VIDEO_REELS.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black/60 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Canvas */}
        <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
          {!useIframeFallback ? (
            <iframe
              key={currentVideo.youtubeId}
              src={`https://www.youtube-nocookie.com/embed/${currentVideo.youtubeId}?autoplay=1&mute=0&controls=1&rel=0&playsinline=1&modestbranding=1`}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover"
              onError={() => setUseIframeFallback(true)}
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center text-white bg-slate-900">
              <img
                src={currentVideo.thumbnail}
                alt={currentVideo.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 space-y-3">
                <h3 className="text-sm font-bold text-white">{title}</h3>
                <a
                  href={`https://www.youtube.com/watch?v=${currentVideo.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-xl transition-colors shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  {language === 'te' ? 'యూట్యూబ్‌లో చూడండి' : 'Watch on YouTube'}
                </a>
              </div>
            </div>
          )}

          {/* Right Floating Action Rail (Instagram / Meesho Style) */}
          <div className="absolute right-3 bottom-24 z-30 flex flex-col items-center gap-4 text-white">
            {/* Like */}
            <button
              onClick={handleLike}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-transform group-hover:scale-110 ${
                  isLiked ? 'bg-rose-600 text-white' : 'bg-black/50 text-white'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </div>
              <span className="text-[10px] font-bold mt-1 tabular-nums drop-shadow">
                {likeCount}
              </span>
            </button>


            {/* Takeaways sheet */}
            <button
              onClick={() => setShowTakeaways(!showTakeaways)}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-medium mt-1 drop-shadow">
                {language === 'te' ? 'సలహా' : 'Notes'}
              </span>
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                <Share2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-medium mt-1 drop-shadow">
                {language === 'te' ? 'షేర్' : 'Share'}
              </span>
            </button>
          </div>

          {/* Bottom Gradient Overlay & Caption Info */}
          <div className="absolute bottom-0 inset-x-0 z-20 p-4 pb-14 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none">
            <div className="pr-14 space-y-1.5 text-white">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                  ✿
                </span>
                <span className="text-xs font-bold">AgriSathi Verified</span>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-medium">
                  {category}
                </span>
              </div>

              <h2 className="text-sm font-extrabold text-white leading-tight drop-shadow">
                {title}
              </h2>
              <p className="text-[11px] text-white/80 line-clamp-2 leading-relaxed">
                {caption}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Toolbar (Prev / Next Short) */}
        <div className="bg-black/90 border-t border-white/10 px-4 py-2.5 flex items-center justify-between text-white text-xs z-30">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1 font-bold text-white/80 hover:text-white transition-colors"
          >
            <ChevronUp className="w-4 h-4" />
            <span>{t.prevVideo}</span>
          </button>

          <span className="text-[11px] text-amber-400 font-bold">
            {hasClaimed ? t.claimed : t.claimReward}
          </span>

          <button
            onClick={handleNext}
            className="flex items-center gap-1 font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>{t.nextVideo}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Slide-Up Takeaways Drawer */}
        {showTakeaways && (
          <div className="absolute inset-x-0 bottom-0 z-40 bg-slate-900/95 backdrop-blur-xl border-t border-slate-700 rounded-t-3xl p-5 text-white space-y-3 animate-in slide-in-from-bottom duration-200 max-h-[65%] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                {t.takeaways}
              </h4>
              <button
                onClick={() => setShowTakeaways(false)}
                className="text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-200">
              {keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 text-[11px] text-slate-300 space-y-1">
              <b className="text-white flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                {t.transcriptTitle}:
              </b>
              <p className="leading-relaxed opacity-90">{transcript}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
