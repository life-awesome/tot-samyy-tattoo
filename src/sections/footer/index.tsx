export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-black text-white border-t border-zinc-900 px-6 pt-15 pb-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Верхняя часть */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Бренд */}
          <div>
            <h3 className="text-2xl font-light tracking-widest mb-6">TATTOO</h3>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Индивидуальные татуировки с характером. Работаю по предварительной
              записи.
            </p>
          </div>

          {/* Контакты */}
          <div className="space-y-6 text-zinc-400 text-sm">
            <div>
              <p className="text-white mb-2 tracking-wide">Контакты</p>
              <p>+7 (999) 123-45-67</p>
              <p>instagram.com/yourname</p>
              <p>telegram.me/yourname</p>
            </div>

            <div>
              <p className="text-white mb-2 tracking-wide">Локация</p>
              <p>Москва</p>
              <p>Студия по предварительной записи</p>
            </div>
          </div>
        </div>

        {/* Низ */}
        <div className="pt-8 border-t border-zinc-900 text-zinc-500 text-sm flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} TATTOO. Все права защищены.</p>
          <p className="hover:text-white transition cursor-pointer">
            Политика конфиденциальности
          </p>
        </div>
      </div>
    </footer>
  );
};
