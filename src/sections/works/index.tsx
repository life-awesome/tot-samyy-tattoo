import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tattoos = [
  { id: 16, src: '/works/16.jpg' },
  { id: 27, src: '/works/27.jpg' },
  { id: 30, src: '/works/30.jpg' },
  { id: 25, src: '/works/25.jpg' },
  { id: 1, src: '/works/1.jpg' },
  { id: 2, src: '/works/2.jpg' },
  { id: 3, src: '/works/3.jpg' },
  { id: 4, src: '/works/4.jpg' },
  { id: 5, src: '/works/5.jpg' },
  { id: 6, src: '/works/6.jpg' },
  { id: 7, src: '/works/7.jpg' },
  { id: 8, src: '/works/8.jpg' },
  { id: 9, src: '/works/9.jpg' },
  { id: 10, src: '/works/10.jpg' },
  { id: 11, src: '/works/11.jpg' },
  { id: 12, src: '/works/12.jpg' },
  { id: 13, src: '/works/13.jpg' },
  { id: 14, src: '/works/14.jpg' },
  { id: 15, src: '/works/15.jpg' },
  { id: 17, src: '/works/17.jpg' },
  { id: 18, src: '/works/18.jpg' },
  { id: 19, src: '/works/19.jpg' },
  { id: 20, src: '/works/20.jpg' },
  { id: 21, src: '/works/21.jpg' },
  { id: 22, src: '/works/22.jpg' },
  { id: 23, src: '/works/23.jpg' },
  { id: 24, src: '/works/24.jpg' },
  { id: 26, src: '/works/26.jpg' },
  { id: 28, src: '/works/28.jpg' },
  { id: 29, src: '/works/29.jpg' },
  { id: 31, src: '/works/31.jpg' },
  { id: 32, src: '/works/32.jpg' },
  { id: 33, src: '/works/33.jpg' },
  { id: 34, src: '/works/34.jpg' },
  { id: 35, src: '/works/35.jpg' },
  { id: 36, src: '/works/36.jpg' },
];

export const Works = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleTattoos = showAll ? tattoos : tattoos.slice(0, 4);

  return (
    <section id="works" className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <div className="mb-16">
          <p className="text-sm text-zinc-500 tracking-widest mb-4">
            PORTFOLIO
          </p>
          <h2 className="text-4xl md:text-5xl font-light font-oswald">Избранные работы</h2>
        </div>

        {/* Галерея */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {visibleTattoos.map((tattoo) => (
              <motion.div
                key={tattoo.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <img
                  src={tattoo.src}
                  alt="tattoo work"
                  className="w-full h-[500px] cursor-pointer object-inherit hover:scale-105 transition duration-700"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Кнопка */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-white px-8 cursor-pointer py-3 text-sm rounded-3xl transition-all tracking-wide hover:bg-white hover:text-black "
          >
            {showAll ? 'Скрыть' : 'Показать все'}
          </button>
        </div>
      </div>
    </section>
  );
};