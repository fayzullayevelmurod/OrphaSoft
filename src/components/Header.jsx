import { useState } from "react";
import assets from "../assets";

export const Header = () => {
  const [activeLanguage, setActiveLanguage] = useState("ru");

  const switchLanguage = (lang) => {
    setActiveLanguage(lang);
  };

  return (
    <div className="flex items-center justify-between">
      <a href="/">
        <img src={assets.logo} alt="company logo" width="180" height="22" />
      </a>
      <div className="flex items-center gap-[36px]">
        <ul className="flex gap-[30px]">
          <li>
            <a className="text-white" href="#!">
              Новости
            </a>
          </li>
          <li>
            <a className="text-white" href="/treatment">
              Лечение
            </a>
          </li>
          <li>
            <a className="text-white" href="/clinics">
              Клиники
            </a>
          </li>
          <li>
            <a className="text-white" href="#!">
              Врачи
            </a>
          </li>
          <li>
            <a className="text-white" href="#!">
              Форумы
            </a>
          </li>
          <li>
            <a className="text-white" href="#!">
              Чаты
            </a>
          </li>
        </ul>
        <div className="w-[1px] h-[20px] bg-white"></div>
        <div className="flex gap-[30px]">
          <button>
            <img src={assets.search} alt="search icon" width="24" height="24" />
          </button>
          <button>
            <img src={assets.user} alt="search icon" width="24" height="24" />
          </button>
        </div>
        <div className="w-[1px] h-[20px] bg-white"></div>
        <div className="flex gap-[14px]">
          <button
            aria-label="Ru language btn"
            className={`text-white relative before:content-[''] before:bg-black before:rounded-full before:w-full before:h-[1px] before:absolute before:bottom-0 before:left-0 before:opacity-0 ${
              activeLanguage === "ru"
                ? "opacity-100 before:opacity-100"
                : "opacity-45"
            }`}
            onClick={() => switchLanguage("ru")}
          >
            Ru
          </button>
          <button
            aria-label="En language btn"
            className={`text-white relative before:content-[''] before:bg-black before:rounded-full before:w-full before:h-[1px] before:absolute before:bottom-0 before:left-0 before:opacity-0 ${
              activeLanguage === "en"
                ? "opacity-100 before:opacity-100"
                : "opacity-45"
            }`}
            onClick={() => switchLanguage("en")}
          >
            En
          </button>
        </div>
      </div>
    </div>
  );
};
