import photo from '../../../public/master.png'

export const About = () => {
  return (
    <section id="about" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Фото */}
        <div className="relative">
          <img
            src={photo}
            alt="Tattoo master"
            className="w-full h-[500px]  object-cover  transition duration-700"
          />
        </div>

        {/* Текст */}
        <div className="max-w-xl">
          <p className="text-sm text-zinc-500 tracking-widest mb-6">
            TATTOO ARTIST
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight font-oswald">
            Создаю татуировки <br /> с характером и смыслом
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-6">
            Работаю в стиле blackwork и минимализм. Для меня татуировка — это не
            просто изображение, а история, которую человек носит на себе каждый
            день.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-10">
            Индивидуальный подход к каждому эскизу. Чистота, внимание к деталям
            и аккуратность в работе — мои основные принципы.
          </p>

          <a
            href="#contact"
            className="inline-block border rounded-3xl transition-all border-white px-8 py-3 text-sm tracking-wide hover:bg-white hover:text-black "
          >
            Записаться на сеанс
          </a>
        </div>
      </div>
    </section>
  );
};
