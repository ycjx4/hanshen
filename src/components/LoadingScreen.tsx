import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-cream via-[#ffeaf0] to-[#fff5d8]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className="relative rounded-[2rem] border-2 border-white/80 bg-white/65 px-8 py-10 text-center shadow-sticker backdrop-blur-sm">
        <motion.div
          className="absolute -left-5 -top-5 text-berry"
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.94, 1.08, 0.94] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Heart fill="currentColor" size={28} aria-hidden="true" />
        </motion.div>
        <motion.div
          className="absolute -right-5 top-6 text-pudding"
          animate={{ opacity: [0.45, 1, 0.45], rotate: [-5, 5, -5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Star fill="currentColor" size={30} aria-hidden="true" />
        </motion.div>
        <Sparkles className="mx-auto mb-4 text-berry" size={34} aria-hidden="true" />
        <p className="text-lg font-black text-cocoa sm:text-xl">正在打开海参的专属板卡...</p>
      </div>
    </motion.div>
  );
}
