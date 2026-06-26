import { MouseEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { depositCards, heroProfile } from '../data/profile';
import { FloatingSticker } from './FloatingSticker';

export function HeroSection() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const mainCard = galleryItems.find((item) => item.id === 'deer') ?? galleryItems[0];
  const floatingCards = galleryItems.filter((item) => item.kind === 'profile' && item.id !== mainCard.id);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setOffset({
      x: (event.clientX - rect.left - rect.width / 2) / rect.width,
      y: (event.clientY - rect.top - rect.height / 2) / rect.height
    });
  };

  return (
    <section
      className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <FloatingSticker className="absolute left-5 top-24 hidden rounded-full bg-mint/80 p-4 text-cocoa shadow-sticker sm:block">
        <Sparkles aria-hidden="true" />
      </FloatingSticker>
      <FloatingSticker
        className="absolute bottom-28 right-8 hidden rounded-full bg-pudding/80 p-4 text-cocoa shadow-sticker md:block"
        delay={0.7}
      >
        <Heart fill="currentColor" aria-hidden="true" />
      </FloatingSticker>

      <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <div className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border-2 border-white/80 bg-white/75 px-4 py-2 text-sm font-black text-berry shadow-soft">
            <Star fill="currentColor" size={16} aria-hidden="true" />
            专属数字手账已开启
          </div>
          <h1 className="max-w-2xl text-5xl font-black leading-tight text-cocoa sm:text-6xl lg:text-7xl">
            {heroProfile.title}
          </h1>
          <p className="mt-5 max-w-xl text-xl font-bold text-[#8d6b5b]">{heroProfile.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {heroProfile.badges.map((badge) => (
              <motion.span
                key={badge}
                className="rounded-2xl border-2 border-white bg-white/80 px-4 py-2 text-sm font-black text-cocoa shadow-soft"
                whileHover={{ y: -6, scale: 1.03 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
          <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-2xl border border-white/80 bg-white/50 px-4 py-2 text-xs font-black text-[#9a7b6d] shadow-soft">
            <span>预存板卡</span>
            {depositCards.map((amount) => (
              <span key={amount} className="rounded-full bg-[#fff1bd] px-2 py-1 text-cocoa/75">
                {amount}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="relative min-h-[470px]">
          <motion.div
            className="absolute left-1/2 top-1/2 z-20 w-[78%] max-w-md rounded-[2rem] border-[10px] border-white bg-white p-3 shadow-sticker"
            style={{
              x: `calc(-50% + ${offset.x * -18}px)`,
              y: `calc(-50% + ${offset.y * -14}px)`,
              rotate: -2
            }}
            whileHover={{ scale: 1.03, y: -6 }}
          >
            <img
              src={mainCard.src}
              alt={mainCard.title}
              className="aspect-[4/5] w-full rounded-[1.4rem] object-cover"
            />
            <div className="absolute -bottom-5 left-8 rounded-2xl border-2 border-white bg-berry px-5 py-2 text-sm font-black text-white shadow-soft">
              @海参
            </div>
          </motion.div>

          {floatingCards.slice(0, 4).map((item, index) => {
            const positions = [
              'left-0 top-8 w-36 sm:w-44',
              'right-0 top-2 w-32 sm:w-40',
              'bottom-8 left-2 w-32 sm:w-40',
              'bottom-2 right-4 w-36 sm:w-44'
            ];
            return (
              <motion.div
                key={item.id}
                className={`absolute z-10 rounded-[1.4rem] border-[7px] border-white bg-white p-2 shadow-sticker ${positions[index]}`}
                style={{
                  x: offset.x * (index % 2 === 0 ? 14 : -14),
                  y: offset.y * (index < 2 ? 10 : -10),
                  rotate: item.rotation
                }}
                animate={{ y: [0, index % 2 === 0 ? 7 : -6, 0] }}
                transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src={item.src} alt={item.title} className="aspect-square w-full rounded-2xl object-cover" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
