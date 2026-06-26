import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EndingSection } from './components/EndingSection';
import { GallerySection } from './components/GallerySection';
import { HeroSection } from './components/HeroSection';
import { LikesSection } from './components/LikesSection';
import { LoadingScreen } from './components/LoadingScreen';
import { MessageSection } from './components/MessageSection';
import { ProfileSection } from './components/ProfileSection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading ? <LoadingScreen /> : null}</AnimatePresence>
      <motion.main
        className="min-h-screen overflow-x-hidden"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.96 : 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <HeroSection />
        <ProfileSection />
        <LikesSection />
        <GallerySection />
        <MessageSection />
        <EndingSection />
      </motion.main>
    </>
  );
}
