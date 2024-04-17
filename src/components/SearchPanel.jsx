import { Search } from "./Search";

// eslint-disable-next-line react/prop-types
export const SearchPanel = ({ openSearch }) => {
  return (
    <div
      className={`fixed w-full top-[125px] duration-300 origin-top left-0 bg-white z-[999] pt-[115px] pb-8 h-full ${
        openSearch ? "scale-y-100" : "scale-y-0"
      }`}
    >
      <div className="text-center mx-auto max-w-[995px]">
        <h3 className="text-[52px] leading-[62px] text-[#383434] font-normal pb-16">
          Поиск
        </h3>
        <Search placeholder="Введите слово для поиска" />

        <div className="flex flex-wrap gap-[20px] justify-center pt-16">
          <button className="search__btn">#Новые синдромы</button>
          <button className="search__btn">#Новые гены</button>
          <button className="search__btn">#Клинические исследования</button>
          <button className="search__btn">#Диагностические подходы</button>
          <button className="search__btn">#Терапевтические подходы</button>
          <button className="search__btn">#Ведение пациентов и терапия</button>
          <button className="search__btn">#Рекомендации</button>
          <button className="search__btn">#Эпидемиология</button>
          <button className="search__btn">#Качество жизни</button>
          <button className="search__btn">#Орфанные препараты</button>
        </div>
      </div>
    </div>
  );
};
