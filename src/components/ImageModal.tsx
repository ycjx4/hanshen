import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { MouseEvent } from 'react';
import type { GalleryItem } from '../data/gallery';

type ImageModalProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

export function ImageModal({ item, onClose }: ImageModalProps) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-cocoa/35 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[88vh] w-full max-w-3xl rounded-[2rem] border-[10px] border-white bg-white p-3 shadow-sticker"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="关闭预览"
              onClick={onClose}
              className="absolute -right-4 -top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-berry text-white shadow-soft transition hover:-translate-y-1 hover:scale-105"
            >
              <X size={22} aria-hidden="true" />
            </button>
            <img src={item.src} alt={item.title} className="max-h-[72vh] w-full rounded-[1.35rem] object-contain" />
            <div className="px-2 pb-1 pt-4 text-center">
              <h3 className="text-xl font-black text-cocoa">{item.title}</h3>
              <p className="mt-1 text-sm font-bold text-[#8d6b5b]">{item.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
