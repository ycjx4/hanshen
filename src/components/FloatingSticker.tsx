import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type FloatingStickerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  range?: number;
};

export function FloatingSticker({
  children,
  className = '',
  delay = 0,
  range = 6
}: FloatingStickerProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [-range, range, -range] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
}
