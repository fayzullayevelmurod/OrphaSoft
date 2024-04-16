import { useState } from "react";
import { Banner, Footer, Search, ProductsComp } from "../components";
import assets from "../assets";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Каталог");

  const options = ["Каталог 1", "Каталог 2", "Каталог 3", "Каталог 4"];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <>
      <Banner
        darkColor={true}
        title="Маркетплейс"
        breadcrumb={true}
        breadcrumbName="Маркетплейс"
      />
      <div className="max-w-[1340px] mx-auto mb-[76px]">
        <div className="flex items-center justify-between gap-4">
          <div
            className="select flex items-center justify-between cursor-pointer teal__btn relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="selected__text text-white text-[13px] leading-[30px]">
              {selectedOption}
            </span>
            <img src={assets.arrowDown} alt="arrow down" />
            {isOpen && (
              <div className="option__box px-[10px] left-0 absolute text-black top-full bg-white border-teal border  mt-1 py-1 rounded w-[150px] z-10">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="option cursor-pointer whitespace-nowrap px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="max-w-[958px] w-full">
            <Search placeholder="Поиск по товарам" />
          </div>
          <div className="flex items-center gap-[17px]">
            <div className="cursor-pointer">
              <img src={assets.heart} alt="heart icon" width="31" height="28" />
            </div>
            <div className="cursor-pointer">
              <img src={assets.cart} alt="cart icon" width="38" height="37" />
            </div>
          </div>
        </div>
        <div className="border border-[#E7DCDC] mt-[54px] mb-[76px] py-[30px] px-[21px] shadow-parent">
          <ProductsComp />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
