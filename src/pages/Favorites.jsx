import { Banner, Footer, ProductsComp } from "../components";
import CustomSelect from "../components/CustomSelect"; // CustomSelect komponentini import qilib oling

const Favorites = () => {
  return (
    <>
      <Banner
        darkColor={true}
        title="Избранное"
        breadcrumb={true}
        breadcrumbName="Избранное"
      />

      <div className="flex mb-[120px] flex-wrap items-start justify-between gap-[71px] max-w-[1340px] mx-auto">
        <div className="max-w-[305px] w-full border rounded-lg border-teal overflow-hidden">
          <ul>
            <li className="py-[17px] hover:bg-[#EDF2F6] px-5 text-base font-medium text-[#070C11] cursor-pointer">
              <a href="#!">Общие сведения</a>
            </li>
            <li className="py-[17px] hover:bg-[#EDF2F6] px-5 text-base font-medium text-[#070C11] cursor-pointer">
              <a href="#!">Личные данные</a>
            </li>
            <li className="py-[17px] hover:bg-[#EDF2F6] px-5 text-base font-medium text-[#070C11] cursor-pointer">
              <a href="#!">История покупок</a>
            </li>
            <li className="py-[17px] bg-[#EDF2F6] px-5 text-base font-medium text-[#070C11] cursor-pointer">
              <a href="#!">Избранное</a>
            </li>
            <li className="py-[17px] hover:bg-[#EDF2F6] px-5 text-base font-medium text-[#070C11] cursor-pointer">
              <a href="#!">Сменить пароль</a>
            </li>
          </ul>
          <button className="py-[17px] px-5 text-base font-medium text-[#F15152] border-t border-[#EAEAF0] w-full text-left">
            Выйти
          </button>
        </div>
        <div className="flex-1">
          <div className="flex gap-4 flex-wrap justify-between mb-[19px]">
            <CustomSelect
              options={["Option 1", "Option 2", "Option 3"]}
              defaultValue="Все товары"
            />
            <CustomSelect
              options={["Option 1", "Option 2", "Option 3"]}
              defaultValue="Сначала дорогие"
            />
          </div>
          <div className="shadow-parent py-[30px] px-[23px]">
            <ProductsComp />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
