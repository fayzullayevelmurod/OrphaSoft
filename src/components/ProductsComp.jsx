import assets from "../assets";
import { Button } from "./Button";

const productsData = [
  {
    img: assets.productImg1,
    productName: "Анагрелид 0,5 мг №100 капсулы",
    oldPrice: "35 647",
    newPrice: "15 999",
    availability: "100",
  },
  {
    img: assets.productImg1,
    productName: "Анагрелид 0,5 мг №100 капсулы",
    oldPrice: "35 647",
    newPrice: "15 999",
    availability: "100",
  },
  {
    img: assets.productImg1,
    productName: "Анагрелид 0,5 мг №100 капсулы",
    oldPrice: "35 647",
    newPrice: "15 999",
    availability: "100",
  },
  {
    img: assets.productImg1,
    productName: "Анагрелид 0,5 мг №100 капсулы",
    oldPrice: "35 647",
    newPrice: "15 999",
    availability: "100",
  },
  {
    img: assets.productImg1,
    productName: "Анагрелид 0,5 мг №100 капсулы",
    oldPrice: "35 647",
    newPrice: "15 999",
    availability: "100",
  },
  {
    img: assets.productImg1,
    productName: "Анагрелид 0,5 мг №100 капсулы",
    oldPrice: "35 647",
    newPrice: "15 999",
    availability: "100",
  },
];
export const ProductsComp = () => {
  return (
    <>
      <div className="products">
        {productsData?.map((item, index) => (
          <div
            key={index}
            className="product border border-black pt-[5px] pb-[14px] px-[12px]"
          >
            <img src={item.img} alt="product img" />
            <h3 className="text-black text-center text-xl font-normal mt-[13px] mb-[6px]">
              {item.productName}
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-sm text-black">
                Цена: <del className="text-[10px]">{item.oldPrice} руб.</del>
              </p>
              <p className="text-sm text-[#FF0000]">{item.newPrice} руб.</p>
            </div>
            <p className="text-sm text-black">
              В наличии: <span className="text-base">{item.availability}</span>{" "}
              шт
            </p>
            <div className="flex items-center mt-[13px] justify-between">
              <Button text="В КОРЗИНУ" />
              <Button text="Подробнее" rightIcon={true} />
              <button>
                <img src={assets.heart} alt="heart icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
