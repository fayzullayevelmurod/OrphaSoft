import assets from "../assets";

export const Footer = () => {
  return (
    <footer className="bg-[#232323] py-[100px] text-white text-center m-[56px_30px_30px_30px] rounded-lg">
      <h1 className="text-[42px] leading-[50px]">Подпишитесь на наш блог</h1>
      <p className="text-[#EDFCF2] text-lg leading-[27px] font-light my-[25px]">
        Новые новости каждый день
      </p>
      <form className="bg-[#414141] py-4 px-[21px] max-w-[400px] mx-auto rounded-lg relative">
        <input
          className="w-full h-full bg-transparent"
          type="email"
          placeholder="Ваш email"
        />
        <button
          className="teal__btn absolute top-0 right-[-30px] h-full footer__btn"
          type="submit"
          aria-label="Подписаться кнопка"
        >
          <span>Подписаться</span>
          <img src={assets.nextArrow} alt="next arrow" />
        </button>
      </form>
    </footer>
  );
};
