import assets from "../assets";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Register = ({ openRegister, handleOpenRegister }) => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [changeForm, setChangeForm] = useState(false);

  const handleChangeForm = () => {
    setChangeForm(!changeForm);
  };

  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <div
      className={`fixed top-1/2 flex flex-col justify-center items-center -translate-y-1/2 left-1/2 origin-center duration-300 -translate-x-1/2 z-[99] max-w-[617px] w-full ${
        openRegister ? "scale-100" : "scale-0"
      }`}
    >
      <div
        className={`bg-white py-[77px] h-screen overflow-y-scroll  sm:px-[95px] my-6 px-5 shadow-lg ${
          changeForm ? "hidden" : "block"
        }`}
      >
        <div
          className="flex justify-end w-fit ml-auto bg-teal cursor-pointer"
          onClick={handleOpenRegister}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h3 className="text-5xl pb-4 text-black mb-4">Регистрация</h3>
        <div className="flex items-center gap-[30px] pb-7 border-b border-[#F5F5F5]">
          <p className="font-light text-lg text-[#696F79]">Уже есть аккаунт?</p>
          <p
            className="text-teal cursor-pointer text-lg font-semibold"
            onClick={handleChangeForm}
          >
            Войти
          </p>
        </div>
        <div className="pt-8 space-y-7">
          <div className="space-y-[9px]">
            <label className="text-[#696F79] text-xs block">
              Придумайте логин*
            </label>
            <input
              className="form__input rounded-[6px] white w-full"
              type="text"
              placeholder="Ivanov17"
            />
          </div>
          <div className="space-y-[9px]">
            <label className="text-[#696F79] text-xs block">Фамилия</label>
            <input
              className="form__input rounded-[6px] white w-full"
              type="text"
              placeholder="Иванов"
            />
          </div>
          <div className="space-y-[9px]">
            <label className="text-[#696F79] text-xs block">Имя</label>
            <input
              className="form__input rounded-[6px] white w-full"
              type="text"
              placeholder="Иван"
            />
          </div>
          <div className="space-y-[9px]">
            <label className="text-[#696F79] text-xs block">Отчество</label>
            <input
              className="form__input rounded-[6px] white w-full"
              type="text"
              placeholder="Иванович"
            />
          </div>
          <div className="space-y-[9px]">
            <label className="text-[#696F79] text-xs block">
              Придумайте пароль*
            </label>
            <div className="relative">
              <input
                className="form__input rounded-[6px] white w-full"
                type={showPassword1 ? "text" : "password"}
                placeholder="* * * * * *"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
              <img
                className="absolute cursor-pointer top-1/2 right-[30px] -translate-y-1/2"
                src={assets.eye}
                alt="eye"
                onClick={handleTogglePassword1}
              />
            </div>
          </div>
          <div className="space-y-[9px]">
            <label className="text-[#696F79] text-xs block">
              Повторите пароль*
            </label>
            <div className="relative">
              <input
                className="form__input rounded-[6px] white w-full"
                type={showPassword2 ? "text" : "password"}
                placeholder="* * * * * *"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
              <img
                className="absolute cursor-pointer top-1/2 right-[30px] -translate-y-1/2"
                src={assets.eye}
                alt="eye"
                onClick={handleTogglePassword2}
              />
            </div>
          </div>
          <div>
            <input
              className="hidden text__input"
              type="checkbox"
              id="text"
              defaultChecked
            />
            <label
              htmlFor="text"
              className="text__sm font-light text-[#696F79]"
            >
              Я даю согласие на обработку пресональных данных{" "}
            </label>
          </div>
          <div className="pt-[15px] pb-[38px]">
            <p className="text-[#696F79] text-xs">Кто вы?</p>
            <div className="flex items-center justify-between mt-4">
              <div>
                <input
                  className="hidden checked__input"
                  type="radio"
                  defaultChecked
                  name="one"
                  id="one"
                />
                <label className="checked__text" htmlFor="one">
                  Пациент
                </label>
              </div>
              <div>
                <input
                  className="hidden checked__input"
                  type="radio"
                  name="one"
                  id="two"
                />
                <label className="checked__text" htmlFor="two">
                  Врач
                </label>
              </div>
              <div>
                <input
                  className="hidden checked__input"
                  type="radio"
                  name="one"
                  id="three"
                />
                <label className="checked__text" htmlFor="three">
                  Компания
                </label>
              </div>
            </div>
          </div>
          <button className="bg-teal rounded-[6px] w-full h-[64px] text-center px-4 flex items-center justify-center">
            Зарегистрироваться
          </button>
        </div>
      </div>
      <div
        className={`h-fit bg-white py-[77px] cursor-pointer overflow-y-auto w-full sm:px-[95px] px-5 shadow-lg ${
          changeForm ? "block" : "hidden"
        }`}
      >
        <div
          className="flex justify-end w-fit ml-auto my-4 bg-teal"
          onClick={handleOpenRegister}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h3 className="text-5xl pb-4 text-black mb-4">Вход</h3>
        <div className="flex items-center gap-[30px] pb-7 border-b border-[#F5F5F5]">
          <p className="font-light text-lg text-[#696F79]">Еще нет аккаунта?</p>
          <p
            className="text-teal text-lg cursor-pointer font-semibold"
            onClick={handleChangeForm}
          >
            Регистрация
          </p>
        </div>
        <div className="space-y-[9px] mt-8">
          <label className="text-[#696F79] text-xs block">Ваш логин*</label>
          <input
            className="form__input rounded-[6px] white w-full"
            type="text"
            placeholder="Ivanov17"
          />
        </div>
        <div className="space-y-[9px] mt-6">
          <label className="text-[#696F79] text-xs block">Ваш пароль*</label>
          <div className="relative">
            <input
              className="form__input rounded-[6px] white w-full"
              type={showPassword2 ? "text" : "password"}
              placeholder="* * * * * *"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <img
              className="absolute cursor-pointer top-1/2 right-[30px] -translate-y-1/2"
              src={assets.eye}
              alt="eye"
              onClick={handleTogglePassword2}
            />
          </div>
        </div>
        <div className="my-8 flex items-center justify-between w-full">
          <div>
            <input
              className="hidden text__input"
              type="checkbox"
              id="text2"
              defaultChecked
            />
            <label
              htmlFor="text2"
              className="text__sm font-light text-[#696F79]"
            >
              Запомнить меня
            </label>
          </div>
          <p className="text-sm text-[#2D2D2D]">Забыли пароль?</p>
        </div>
        <button className="bg-teal rounded-[6px] w-full h-[64px] text-center px-4 flex items-center justify-center">
          Войти
        </button>
        <div className="flex items-center gap-[30px] my-8">
          <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
          <p className="text-xs text-[#696F79]">Или</p>
          <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
        </div>
        <a
          className="border border-[#F5F5F5] text-[#696F79] justify-center font-light rounded-[6px] p-[20px] w-full flex items-center gap-[30px]"
          href="#!"
        >
          <img src={assets.google} alt="" width={24} height={24} />
          Регистрация через Google
        </a>
      </div>
    </div>
  );
};
