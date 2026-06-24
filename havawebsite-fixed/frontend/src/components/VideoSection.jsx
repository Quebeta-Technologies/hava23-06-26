import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { videoData } from '../data/mock';

export const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-charcoal">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={videoData.posterUrl}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoData.videoUrl} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/40 to-charcoal/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-trust-blue/30 via-transparent to-hava-red/25" />

      {/* Content - just ISO badge */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative"
          data-testid="video-iso-badge"
        >
          <div className="relative w-36 h-36 lg:w-44 lg:h-44">
            {/* Rotating outer ring with text */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <path id="circle-text-v" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
                </defs>
                <text fill="white" fontSize="14" fontWeight="700" letterSpacing="4">
                  <textPath href="#circle-text-v" startOffset="0%">
                    CERTIFIED MANUFACTURER • ISO 9001:2015 •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Static inner content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs font-bold text-white/80 tracking-widest mb-1">ISO</div>
                <div className="text-3xl lg:text-4xl font-black text-white leading-none">9001</div>
                <div className="text-xs font-bold text-white/80 tracking-widest mt-1">: 2015</div>
                <div className="mt-2 h-0.5 w-12 mx-auto bg-accent-orange rounded-full" />
              </div>
            </div>

            {/* Decorative dashed circle */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border-2 border-dashed border-white/40 rounded-full"
            />
          </div>
        </motion.div>

        {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-8 right-8 w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          data-testid="video-play-pause-btn"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </motion.button>
      </div>
    </section>
  );
};
