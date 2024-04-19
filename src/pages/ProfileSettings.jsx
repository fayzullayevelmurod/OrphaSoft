import { useState } from "react";
import assets from "../assets";
import { Header } from "../components";
const ProfileSettings = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedImage(URL.createObjectURL(selectedFile));
  };
  return (
    <>
      <div className="max-w-[1061px] mx-auto lg:px-0 sm:px-6 px-4">
        <Header color={true} darkColor={true} className="black__header" />
      </div>
      <div className="container mb-[88px]">
        <h2 className="big__title sm:mt-[44px] my-6 sm:mb-[56px]">
          Настройки профиля
        </h2>
        <div className="flex md:flex-row flex-col  md:items-center justify-between lg:gap-[125px] gap-4">
          <div className="relative sm:w-[317px] w-full h-[300px]">
            <img
              className="rounded-[37px] w-full h-full object-cover"
              src={selectedImage || assets.doctorImg}
              alt="doctor img"
              width="317"
              height="300"
            />
            <label htmlFor="avatarInput">
              <div className="absolute bottom-[25px] left-[31px] bg-white border border-teal text-teal py-[10px] px-[20px] cursor-pointer text-center rounded-[7px]">
                Изменить <br /> аватар
              </div>
            </label>
            <input
              type="file"
              id="avatarInput"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
          <form className="flex-1 space-y-[18px]">
            <div className="flex sm:flex-row flex-col sm:items-center gap-[23px]">
              <label className="inline-block text-[20px] text-black sm:w-[132px] sm:text-right">
                Имя
              </label>
              <input
                className="form__input light w-full"
                type="text"
                name="name"
                placeholder=" Татьяна"
              />
            </div>
            <div className="flex sm:flex-row flex-col sm:items-center gap-[23px]">
              <label className="inline-block text-[20px] text-black sm:w-[132px] sm:text-right">
                Фамилия
              </label>
              <input
                className="form__input light w-full"
                type="text"
                name="text"
                placeholder="Иванова"
              />
            </div>
            <div className="flex sm:flex-row flex-col sm:items-center gap-[23px]">
              <label className="inline-block text-[20px] text-black sm:w-[132px] sm:text-right">
                Отчество
              </label>
              <input
                className="form__input light w-full"
                type="text"
                name="name"
                placeholder="Сергеевна"
              />
            </div>
            <button className="teal__btn lg mt-[29px]" type="button">
              Сменить ФИО
            </button>
          </form>
        </div>
        <div className="mt-6">
          <h2 className="big__title mb-[26px]">Сменить пароль</h2>
          <form className="flex-1 space-y-[18px] max-w-[593px]">
            <div className="flex sm:items-center sm:flex-row flex-col gap-[23px]">
              <label className="inline-block text-[20px] text-black whitespace-nowrap sm:min-w-[224px] sm:text-right">
                Старый пароль
              </label>
              <input
                className="form__input light w-full"
                type="password"
                name="password"
              />
            </div>
            <div className="flex sm:items-center sm:flex-row flex-col gap-[23px]">
              <label className="inline-block text-[20px] text-black whitespace-nowrap sm:min-w-[224px] sm:text-right">
                Новый пароль
              </label>
              <input
                className="form__input light w-full"
                type="password"
                name="password"
              />
            </div>
            <div className="flex sm:items-center sm:flex-row flex-col gap-[23px]">
              <label className="inline-block text-[20px] text-black whitespace-nowrap sm:min-w-[224px] sm:text-right">
                Подтвердите пароль
              </label>
              <input
                className="form__input light w-full"
                type="password"
                name="password"
              />
            </div>
            <div className="max-w-[245px]">
              <button
                className="teal__btn full justify-center lg mt-[29px]"
                type="button"
              >
                Сменить пароль
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6">
          <h2 className="big__title mb-[26px]">Сменить почту</h2>
          <form className="flex-1 space-y-[18px] max-w-[593px]">
            <div className="flex sm:items-center sm:flex-row flex-col gap-[23px]">
              <label className="inline-block text-[20px] text-black whitespace-nowrap sm:min-w-[224px] sm:text-right">
                Старая почта
              </label>
              <input
                className="form__input light w-full"
                type="email"
                name="email"
                placeholder="123@mail.com"
              />
            </div>
            <div className="flex sm:items-center sm:flex-row flex-col gap-[23px]">
              <label className="inline-block text-[20px] text-black whitespace-nowrap sm:min-w-[224px] sm:text-right">
                Новая почта
              </label>
              <input
                className="form__input light w-full"
                type="email"
                name="email"
              />
            </div>
            <div className="w-[245px]">
              <button
                className="teal__btn full lg mt-[29px] w-full justify-center"
                type="button"
              >
                Сменить почту
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
