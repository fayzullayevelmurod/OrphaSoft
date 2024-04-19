/* eslint-disable react/prop-types */
import { useState } from "react";
import assets from "../assets";
import { SearchPanel } from "./SearchPanel";
import { Register } from "./Register";

export const Header = ({ color, darkColor, className }) => {
  const [activeLanguage, setActiveLanguage] = useState("ru");
  const [active, setActive] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
    document.body.classList.toggle("hidden-y");
  };
  const handleOpenRegister = () => {
    setOpenRegister(!openRegister);
    document.body.classList.toggle("hidden-y");
    console.log("s");
  };

  const switchLanguage = (lang) => {
    setActiveLanguage(lang);
  };

  const handleChangeActive = () => {
    setActive(!active);
  };

  return (
    <div
      className={`flex items-center justify-between ${
        color ? "mt-[50px] " : ""
      }${className}`}
    >
      <a href="/">
        {color ? (
          <svg
            width="180"
            height="22"
            viewBox="0 0 180 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0686 18.8261C16.9667 20.9078 14.3091 21.9486 11.0956 21.9486C7.90232 21.9486 5.25474 20.9078 3.15284 18.8261C1.05095 16.7444 0 14.1373 0 11.0046C0 7.85179 1.05095 5.23453 3.15284 3.15284C5.25474 1.05095 7.90232 0 11.0956 0C14.3091 0 16.9667 1.04084 19.0686 3.12253C21.1705 5.20421 22.2215 7.82147 22.2215 10.9743C22.2215 14.1272 21.1705 16.7444 19.0686 18.8261ZM5.09305 16.9465C6.68968 18.5432 8.69053 19.3415 11.0956 19.3415C13.5208 19.3415 15.5217 18.5533 17.0981 16.9768C18.6947 15.3802 19.4931 13.3794 19.4931 10.9743C19.4931 8.56926 18.6947 6.57853 17.0981 5.0021C15.5217 3.40547 13.5208 2.60716 11.0956 2.60716C8.69053 2.60716 6.68968 3.40547 5.09305 5.0021C3.51663 6.59874 2.72842 8.58947 2.72842 10.9743C2.72842 13.3592 3.51663 15.3499 5.09305 16.9465Z"
              fill="#696F79"
            />
            <path
              d="M38.9286 21.5848L34.078 13.2783H29.2275V21.5848H26.59V0.363789H34.6237C36.6246 0.363789 38.2717 0.980209 39.5652 2.21305C40.8789 3.42568 41.5357 4.97179 41.5357 6.85137C41.5357 8.32674 41.1113 9.62021 40.2624 10.7318C39.4136 11.8232 38.2818 12.5709 36.8671 12.9752L41.9298 21.5848H38.9286ZM29.2275 2.88V10.7621H34.5024C35.7757 10.7621 36.8166 10.3983 37.625 9.67074C38.4334 8.92295 38.8376 7.97305 38.8376 6.82105C38.8376 5.66905 38.4334 4.72926 37.625 4.00168C36.8166 3.25389 35.7757 2.88 34.5024 2.88H29.2275Z"
              fill="#696F79"
            />
            <path
              d="M53.7092 0.363789C55.71 0.363789 57.3774 1.01053 58.7113 2.304C60.0654 3.59747 60.7424 5.21432 60.7424 7.15453C60.7424 9.09474 60.0654 10.7116 58.7113 12.0051C57.3774 13.2985 55.71 13.9453 53.7092 13.9453H48.7374V21.5848H46.0999V0.363789H53.7092ZM53.5576 11.3684C54.8511 11.3684 55.9121 10.9743 56.7407 10.1861C57.5896 9.37768 58.014 8.36716 58.014 7.15453C58.014 5.94189 57.5896 4.94147 56.7407 4.15326C55.9121 3.34484 54.8511 2.94063 53.5576 2.94063H48.7374V11.3684H53.5576Z"
              fill="#696F79"
            />
            <path
              d="M78.2453 0.363789H80.8828V21.5848H78.2453V11.9444H67.2407V21.5848H64.6032V0.363789H67.2407V9.3979H78.2453V0.363789Z"
              fill="#696F79"
            />
            <path
              d="M101.513 21.5848L99.391 16.4918H89.2049L87.1131 21.5848H84.2938L92.9641 0.363789H95.45L104.393 21.5848H101.513ZM94.2677 4.032L90.2053 14.0665H98.3906L94.2677 4.032Z"
              fill="#696F79"
            />
            <path
              d="M113.392 21.8577C111.048 21.8577 109.158 21.2413 107.723 20.0084C106.288 18.7756 105.571 17.1183 105.571 15.0366H108.269C108.269 16.3301 108.744 17.3608 109.694 18.1288C110.644 18.8766 111.867 19.2505 113.362 19.2505C114.251 19.2505 115.05 19.1091 115.757 18.8261C116.485 18.5229 117.061 18.0884 117.485 17.5225C117.93 16.9566 118.152 16.3099 118.152 15.5823C118.152 15.2387 118.091 14.9255 117.97 14.6425C117.869 14.3394 117.738 14.0867 117.576 13.8846C117.435 13.6825 117.212 13.4905 116.909 13.3086C116.606 13.1065 116.343 12.9549 116.121 12.8539C115.899 12.7326 115.555 12.6013 115.09 12.4598C114.645 12.3183 114.292 12.2173 114.029 12.1566C113.787 12.096 113.403 12.0051 112.877 11.8838C112.251 11.7221 111.765 11.6008 111.422 11.52C111.099 11.4392 110.654 11.3078 110.088 11.1259C109.522 10.9238 109.077 10.7419 108.754 10.5802C108.451 10.3983 108.087 10.1558 107.663 9.85263C107.259 9.54947 106.945 9.22611 106.723 8.88253C106.521 8.53895 106.339 8.12463 106.177 7.63958C106.036 7.13432 105.965 6.58863 105.965 6.00253C105.965 4.18358 106.612 2.74863 107.905 1.69768C109.219 0.626526 110.977 0.0909462 113.18 0.0909462C115.383 0.0909462 117.111 0.656841 118.364 1.78863C119.637 2.92042 120.274 4.44632 120.274 6.36632H117.637C117.637 5.21432 117.212 4.30484 116.363 3.6379C115.535 2.97095 114.464 2.63747 113.15 2.63747C111.816 2.63747 110.725 2.93053 109.876 3.51663C109.047 4.10274 108.633 4.89095 108.633 5.88126C108.633 6.20463 108.683 6.50779 108.784 6.79074C108.885 7.05347 109.007 7.28589 109.148 7.488C109.31 7.6901 109.532 7.88211 109.815 8.064C110.118 8.2459 110.381 8.39748 110.603 8.51874C110.826 8.61979 111.149 8.74105 111.573 8.88253C112.018 9.00379 112.372 9.09474 112.635 9.15537C112.897 9.216 113.281 9.31705 113.787 9.45853C114.292 9.57979 114.666 9.67074 114.908 9.73137C115.171 9.792 115.535 9.89305 116 10.0345C116.485 10.176 116.859 10.3074 117.121 10.4286C117.384 10.5297 117.707 10.6813 118.091 10.8834C118.496 11.0653 118.809 11.2573 119.031 11.4594C119.253 11.6615 119.496 11.904 119.759 12.1869C120.042 12.4699 120.244 12.7731 120.365 13.0964C120.507 13.4198 120.628 13.7937 120.729 14.2181C120.83 14.6425 120.88 15.0872 120.88 15.552C120.88 17.5124 120.173 19.0585 118.758 20.1903C117.364 21.3019 115.575 21.8577 113.392 21.8577Z"
              fill="#696F79"
            />
            <path
              d="M142.789 18.8261C140.687 20.9078 138.029 21.9486 134.816 21.9486C131.623 21.9486 128.975 20.9078 126.873 18.8261C124.771 16.7444 123.72 14.1373 123.72 11.0046C123.72 7.85179 124.771 5.23453 126.873 3.15284C128.975 1.05095 131.623 0 134.816 0C138.029 0 140.687 1.04084 142.789 3.12253C144.891 5.20421 145.942 7.82147 145.942 10.9743C145.942 14.1272 144.891 16.7444 142.789 18.8261ZM128.813 16.9465C130.41 18.5432 132.411 19.3415 134.816 19.3415C137.241 19.3415 139.242 18.5533 140.819 16.9768C142.415 15.3802 143.213 13.3794 143.213 10.9743C143.213 8.56926 142.415 6.57853 140.819 5.0021C139.242 3.40547 137.241 2.60716 134.816 2.60716C132.411 2.60716 130.41 3.40547 128.813 5.0021C127.237 6.59874 126.449 8.58947 126.449 10.9743C126.449 13.3592 127.237 15.3499 128.813 16.9465Z"
              fill="#696F79"
            />
            <path
              d="M162.225 2.88H152.948V9.88295H161.436V12.3688H152.948V21.5848H150.31V0.363789H162.225V2.88Z"
              fill="#696F79"
            />
            <path
              d="M179.487 0.363789V2.84968H173.03V21.5848H170.362V2.84968H163.905V0.363789H179.487Z"
              fill="#696F79"
            />
          </svg>
        ) : (
          <img src={assets.logo} alt="company logo" width="180" height="22" />
        )}
      </a>
      <div
        className={`flex items-center gap-[36px] menu ${
          active ? "active" : ""
        }`}
      >
        <button className="close__btn hidden" onClick={handleChangeActive}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex gap-[30px]">
          <li>
            <a
              className={`${color ? "text-[#696F79]" : "text-white"}`}
              href="#!"
            >
              Новости
            </a>
          </li>
          <li>
            <a
              className={`${color ? "text-[#696F79]" : "text-white"}`}
              href="/treatment"
            >
              Лечение
            </a>
          </li>
          <li>
            <a
              className={`${color ? "text-[#696F79]" : "text-white"}`}
              href="/clinics"
            >
              Клиники
            </a>
          </li>
          <li>
            <a
              className={`${color ? "text-[#696F79]" : "text-white"}`}
              href="/doctors"
            >
              Врачи
            </a>
          </li>
          <li>
            <a
              className={`${color ? "text-[#696F79]" : "text-white"}`}
              href="/forums"
            >
              Форумы
            </a>
          </li>
          <li>
            <a
              className={`${color ? "text-[#696F79]" : "text-white"}`}
              href="#!"
            >
              Чаты
            </a>
          </li>
        </ul>
        <div className="line w-[1px] h-[20px] bg-white"></div>
        <div className="flex gap-[30px]">
          <button onClick={handleOpenSearch}>
            {color ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 17L22 22M19.5 10.75C19.5 15.5825 15.5825 19.5 10.75 19.5C5.91751 19.5 2 15.5825 2 10.75C2 5.91751 5.91751 2 10.75 2C15.5825 2 19.5 5.91751 19.5 10.75Z"
                  stroke="#00AAA1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <img
                src={assets.search}
                alt="search icon"
                width="24"
                height="24"
              />
            )}
          </button>
          <SearchPanel
            handleOpenSearch={handleOpenSearch}
            openSearch={openSearch}
          />
          <button onClick={handleOpenRegister}>
            {color ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="#696F79"
                  strokeOpacity="0.95"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 21C20 17.134 16.866 14 13 14H11C7.13401 14 4 17.134 4 21"
                  stroke="#696F79"
                  strokeOpacity="0.95"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <img src={assets.user} alt="search icon" width="24" height="24" />
            )}
          </button>
          <Register
            openRegister={openRegister}
            handleOpenRegister={handleOpenRegister}
          />
        </div>
        <div
          className={`w-[1px] line h-[20px] ${
            color ? "bg-[#696F79]" : "bg-white"
          }`}
        ></div>
        <div className="flex gap-[14px]">
          <button
            aria-label="Ru language btn"
            className={`${
              color ? "text-[#696F79]" : "text-white"
            } relative before:content-[''] before:rounded-full before:w-full before:h-[1px] before:absolute before:bottom-0 before:left-0 before:opacity-0 ${
              activeLanguage === "ru"
                ? "opacity-100 before:opacity-100"
                : "opacity-45"
            } ${darkColor ? "before:bg-teal" : "before:bg-black"}`}
            onClick={() => switchLanguage("ru")}
          >
            Ru
          </button>
          <button
            aria-label="En language btn"
            className={`${
              color ? "text-[#696F79]" : "text-white"
            } relative before:content-[''] before:rounded-full before:w-full before:h-[1px] before:absolute before:bottom-0 before:left-0 before:opacity-0 ${
              activeLanguage === "en"
                ? "opacity-100 before:opacity-100"
                : "opacity-45"
            } ${darkColor ? "before:bg-teal" : "before:bg-black"}`}
            onClick={() => switchLanguage("en")}
          >
            En
          </button>
        </div>
      </div>
      <button className="hamburger__menu hidden" onClick={handleChangeActive}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
};
