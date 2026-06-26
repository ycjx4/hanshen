import { motion } from 'framer-motion';
import { messages } from '../data/profile';
import { SectionTitle } from './SectionTitle';

export function MessageSection() {
  return (
    <motion.section
      className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <SectionTitle eyebrow="Notes" title="被贴住的小纸条" />
      <div className="grid gap-5 sm:grid-cols-2">
        {messages.map((message, index) => (
          <motion.div
            key={message}
            className="relative rounded-[1.6rem] border-2 border-white bg-[#fff5c7]/85 px-6 py-7 text-lg font-black text-cocoa shadow-sticker"
            initial={{ opacity: 0, y: 34, rotate: index % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.12 }}
          >
            <span className="absolute -top-3 left-8 h-7 w-16 rounded-md bg-berry/35 shadow-soft" aria-hidden="true" />
            “{message}”
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
