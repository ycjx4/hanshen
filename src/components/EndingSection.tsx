import { motion } from 'framer-motion';
import { RotateCcw, Sparkles } from 'lucide-react';
import { ending } from '../data/profile';

export function EndingSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.section
      className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="rounded-[2rem] border-2 border-white/90 bg-white/75 px-6 py-12 shadow-sticker backdrop-blur-md">
        <Sparkles className="mx-auto mb-4 text-berry" size={34} aria-hidden="true" />
        <h2 className="text-4xl font-black text-cocoa sm:text-5xl">{ending.title}</h2>
        <p className="mt-4 font-bold text-[#8d6b5b]">{ending.text}</p>
        <button
          type="button"
          onClick={scrollToTop}
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-white bg-berry px-6 py-3 font-black text-white shadow-soft transition hover:-translate-y-1 hover:scale-105"
        >
          <RotateCcw size={18} aria-hidden="true" />
          {ending.button}
        </button>
      </div>
    </motion.section>
  );
}
