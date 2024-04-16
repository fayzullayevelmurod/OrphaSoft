import assets from "../assets";
import { Banner, Footer } from "../components";
import { Counter } from "../components/Counter";
const Basket = () => {
  return (
    <>
      <Banner
        darkColor={true}
        title="Высокий уровень вовлечения представителей."
        breadcrumb={true}
        breadcrumbName="Корзина"
      />
      <div className="container__xl flex flex-wrap gap-[70px]">
        <div className="flex-1">
          <div className="flex  gap-[35px] items-center">
            <img
              src={assets.productImg1}
              alt="product img"
              width="216"
              height="215"
            />
            <div className="space-y-[23px] text-[#808080] text-xl font-semibold">
              <div className="flex items-center gap-3">
                <img src={assets.notepad} alt="" width={41} height={41} />
                <span className="">По рецепту</span>
              </div>
              <p className="">Анагрелид 0,5 мг №100 капсулы</p>
              <div className="space-y-[3px]">
                <h5 className="text-2xl text-[#2F4F4F]">Производитель</h5>
                <p>
                  ФГАОУ ВО Российский университет дружбы народов (РУДН), Россия,
                  Россия
                </p>
              </div>
            </div>
            <div className="flex gap-[34px] items-center ">
              <div className="w-[177px]">
                <Counter />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[342px] w-full bg-[#F5F5F5] px-6 py-5">
          <h4 className="text-2xl font-semibold text-black">Покупка</h4>
          <div className="flex text-black items-center justify-between gap-4 flex-wrap py-4">
            <span className="text-xl">2 товара</span>
            <span className="text-2xl">31998 руб.</span>
          </div>
          <div className="space-y-4 pb-[34px] border-b border-black">
            <div className="space-y-[7px]">
              <label>Промокод</label>
              <div className="relative h-10 flex items-start">
                <input
                  className="px-3 text-sm w-[240px] h-full bg-[#D9D9D9]"
                  type="text"
                />
                <button className="py-2 px-[10px] bg-teal h-full text-white text-sm">
                  ОК
                </button>
              </div>
            </div>
            <div className="space-y-[7px]">
              <label>Номер дисконтной карты</label>
              <div className="relative h-10 flex items-start">
                <input
                  className="px-3 text-sm w-[240px] h-full bg-[#D9D9D9]"
                  type="text"
                />
                <button className="py-2 px-[10px] bg-teal h-full text-white text-sm">
                  ОК
                </button>
              </div>
            </div>
          </div>
          <div className="flex text-black items-center justify-between gap-4 flex-wrap py-4">
            <span className="text-xl">Итого</span>
            <span className="text-2xl">31998 руб.</span>
          </div>
          <div className="flex items-center gap-[13px] pb-7">
            <img src={assets.warningIcon} alt="waning" />
            <span className="text-sm text-[#808080]">
              Цена указана без доставки
            </span>
          </div>
          <button className="bg-teal rounded-lg h-[30px] flex justify-center items-center text-center w-full text-[13px] text-white text-upercase">
            ОФОРМИТЬ ЗАКАЗ
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Basket;
