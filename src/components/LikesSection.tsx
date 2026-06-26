import { motion } from 'framer-motion';
import { Heart, ShieldAlert } from 'lucide-react';
import { likes } from '../data/profile';
import { SectionTitle } from './SectionTitle';

const cards = [
  { key: 'happy', icon: Heart, data: likes.happy, color: 'bg-[#ffe6ee]', accent: 'text-berry' },
  { key: 'avoid', icon: ShieldAlert, data: likes.avoid, color: 'bg-[#e9fbf6]', accent: 'text-[#39a891]' }
] as const;

export function LikesSection() {
  return (
    <motion.section
      className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <SectionTitle eyebrow="Likes" title="喜点和雷点便签" />
      <div className="grid gap-5 md:grid-cols-2">
        {cards.map(({ key, icon: Icon, data, color, accent }) => (
          <motion.article
            key={key}
            className={`${color} relative rounded-[2rem] border-2 border-white p-7 shadow-sticker`}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            <div className="absolute -top-3 right-8 h-8 w-20 rotate-3 rounded-md bg-white/75 shadow-soft" />
            <div className={`mb-5 inline-flex rounded-2xl bg-white/85 p-3 ${accent}`}>
              <Icon fill="currentColor" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-black text-cocoa">{data.title}</h3>
            <ul className="mt-5 space-y-3">
              {data.items.map((item) => (
                <li key={item} className="rounded-2xl border border-white/80 bg-white/65 px-4 py-3 font-bold text-cocoa">
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
