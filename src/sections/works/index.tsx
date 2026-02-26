import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img16 from '../../../public/works/16.jpg';
import img27 from '../../../public/works/27.jpg';
import img30 from '../../../public/works/30.jpg';
import img25 from '../../../public/works/25.jpg';
import img1 from '../../../public/works/1.jpg';
import img2 from '../../../public/works/2.jpg';
import img3 from '../../../public/works/3.jpg';
import img4 from '../../../public/works/4.jpg';
import img5 from '../../../public/works/5.jpg';
import img6 from '../../../public/works/6.jpg';
import img7 from '../../../public/works/7.jpg';
import img8 from '../../../public/works/8.jpg';
import img9 from '../../../public/works/9.jpg';
import img10 from '../../../public/works/10.jpg';
import img11 from '../../../public/works/11.jpg';
import img12 from '../../../public/works/12.jpg';
import img13 from '../../../public/works/13.jpg';
import img14 from '../../../public/works/14.jpg';
import img15 from '../../../public/works/15.jpg';
import img17 from '../../../public/works/17.jpg';
import img18 from '../../../public/works/18.jpg';
import img19 from '../../../public/works/19.jpg';
import img20 from '../../../public/works/20.jpg';
import img21 from '../../../public/works/21.jpg';
import img22 from '../../../public/works/22.jpg';
import img23 from '../../../public/works/23.jpg';
import img24 from '../../../public/works/24.jpg';
import img26 from '../../../public/works/26.jpg';
import img28 from '../../../public/works/28.jpg';
import img29 from '../../../public/works/29.jpg';
import img31 from '../../../public/works/31.jpg';
import img32 from '../../../public/works/32.jpg';
import img33 from '../../../public/works/33.jpg';
import img34 from '../../../public/works/34.jpg';
import img35 from '../../../public/works/35.jpg';
import img36 from '../../../public/works/36.jpg';

const tattoos = [
  { id: 16, src: img16 },
  { id: 27, src: img27 },
  { id: 30, src: img30 },
  { id: 25, src: img25 },
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
  { id: 12, src: img12 },
  { id: 13, src: img13 },
  { id: 14, src: img14 },
  { id: 15, src: img15 },
  { id: 17, src: img17 },
  { id: 18, src: img18 },
  { id: 19, src: img19 },
  { id: 20, src: img20 },
  { id: 21, src: img21 },
  { id: 22, src: img22 },
  { id: 23, src: img23 },
  { id: 24, src: img24 },
  { id: 26, src: img26 },
  { id: 28, src: img28 },
  { id: 29, src: img29 },
  { id: 31, src: img31 },
  { id: 32, src: img32 },
  { id: 33, src: img33 },
  { id: 34, src: img34 },
  { id: 35, src: img35 },
  { id: 36, src: img36 },
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
          <h2 className="text-4xl md:text-5xl font-light font-oswald">
            Избранные работы
          </h2>
        </div>

        {/* Галерея */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence>
            {visibleTattoos.map((tattoo) => (
              <motion.div
                key={tattoo.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden "
              >
                <img
                  src={tattoo.src}
                  alt="tattoo work"
                  className="w-full sm:h-150 cursor-pointer hover:scale-105 transition duration-700"
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