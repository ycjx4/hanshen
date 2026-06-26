import { motion } from 'framer-motion';
import { profileItems } from '../data/profile';
import { SectionTitle } from './SectionTitle';

export function ProfileSection() {
  return (
    <motion.section
      className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <SectionTitle eyebrow="Profile" title="奶油纸片资料卡" />
      <div className="relative rounded-[2rem] border-2 border-white/90 bg-white/72 p-5 shadow-sticker backdrop-blur-md sm:p-8">
        <div className="absolute -top-4 left-8 rotate-[-4deg] rounded-xl bg-pudding px-5 py-2 text-sm font-black text-cocoa shadow-soft">
          个人档案
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {profileItems.map((item) => (
            <motion.div
              key={item.label}
              className="rounded-3xl border-2 border-white bg-cream/85 px-5 py-4 shadow-soft"
              whileHover={{ y: -6, scale: 1.03, boxShadow: '0 18px 32px rgba(255, 134, 166, 0.22)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <div className="text-sm font-black text-berry">{item.label}</div>
              <div className="mt-1 text-lg font-black text-cocoa">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
