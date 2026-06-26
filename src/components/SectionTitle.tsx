import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
};

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <motion.div
      className="mx-auto mb-8 max-w-2xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-bold text-berry shadow-soft">
        <Sparkles size={16} aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black text-cocoa sm:text-4xl">{title}</h2>
    </motion.div>
  );
}
