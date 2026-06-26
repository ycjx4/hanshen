import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { galleryItems, type GalleryItem } from '../data/gallery';
import { ImageModal } from './ImageModal';
import { SectionTitle } from './SectionTitle';

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <SectionTitle eyebrow="Gallery" title="贴在墙上的照片墙" />
      <div className="relative grid min-h-[780px] gap-6 sm:min-h-[620px] md:block">
        {galleryItems.map((item, index) => {
          const desktopPositions = [
            'md:left-[2%] md:top-[4%] md:w-[34%]',
            'md:left-[39%] md:top-[0%] md:w-[23%]',
            'md:right-[3%] md:top-[8%] md:w-[31%]',
            'md:left-[10%] md:top-[55%] md:w-[27%]',
            'md:left-[40%] md:top-[50%] md:w-[23%]',
            'md:right-[8%] md:top-[55%] md:w-[24%]'
          ];
          return (
            <motion.button
              type="button"
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative w-full rounded-[1.7rem] border-[9px] border-white bg-white p-2 text-left shadow-sticker md:absolute ${item.kind === 'deposit' ? 'opacity-90' : ''} ${desktopPositions[index]}`}
              style={{ rotate: item.rotation }}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ scale: 1.04, rotate: 0, y: -6 }}
              transition={{ type: 'spring', stiffness: 230, damping: 20, delay: index * 0.05 }}
            >
              <span
                className="absolute -top-5 left-1/2 h-8 w-24 -translate-x-1/2 rotate-[-3deg] rounded-md opacity-80 shadow-soft"
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              />
              <img src={item.src} alt={item.title} className="aspect-[4/3] w-full rounded-[1rem] object-cover" />
              <span className="pointer-events-none absolute inset-2 flex items-center justify-center rounded-[1rem] bg-cocoa/0 font-black text-white opacity-0 transition group-hover:bg-cocoa/28 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-cocoa shadow-soft">
                  <Search size={16} aria-hidden="true" />
                  点击查看
                </span>
              </span>
              <span className="block px-2 pb-1 pt-3 text-sm font-black text-cocoa">{item.title}</span>
              {item.kind === 'deposit' ? (
                <span className="ml-2 inline-flex rounded-full bg-[#fff1bd] px-3 py-1 text-xs font-black text-cocoa/70">
                  预存板卡 · {item.depositAmount}
                </span>
              ) : null}
            </motion.button>
          );
        })}
      </div>
      <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </motion.section>
  );
}
