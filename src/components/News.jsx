import assets from "../assets";
import { Button } from "./Button";

// eslint-disable-next-line react/prop-types
export const News = ({ length, showTitle, title }) => {
  const data = [
    {
      img: assets.newsImg1,
      title: "Высокий уровень вовлечения представителей.",
      desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление представляет собой интересный эксперимент проверки системы массового участия.",
      date: "14 июля, 2022",
    },
    {
      img: assets.newsImg2,
      title: "Высокий уровень вовлечения представителей.",
      desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление представляет собой интересный эксперимент проверки системы массового участия.",
      date: "14 июля, 2022",
    },
    {
      img: assets.newsImg3,
      title: "Высокий уровень вовлечения представителей.",
      desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление представляет собой интересный эксперимент проверки системы массового участия.",
      date: "14 июля, 2022",
    },
    {
      img: assets.newsImg4,
      title: "Высокий уровень вовлечения представителей.",
      desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление представляет собой интересный эксперимент проверки системы массового участия.",
      date: "14 июля, 2022",
    },
    {
      img: assets.newsImg5,
      title: "Высокий уровень вовлечения представителей.",
      desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление представляет собой интересный эксперимент проверки системы массового участия.",
      date: "14 июля, 2022",
    },
    {
      img: assets.newsImg6,
      desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление представляет собой интересный эксперимент проверки системы массового участия.",
      title: "Высокий ",
    },
  ];

  const renderData = length ? data.slice(0, length) : data;

  return (
    <>
      {showTitle ? (
        <h1 className="leading-[49.03px] text-4xl font-semibold mb-[60px]">
          {title}
        </h1>
      ) : null}
      <div className="news__cards">
        {renderData.map((item, idx) => (
          <div className="news__card flex flex-col justify-between" key={idx}>
            <div className="flex gap-y-[18px] flex-col">
              <img src={item.img} alt="news img" />
              <h2 className="text-[#242628] text-[22px] font-semibold leading-7 my-[18px]">
                {item.title}
              </h2>
              <p className="text-[#696F79] font-light leading-[25px]">
                {item.desc}
              </p>
            </div>
            <div className="flex justify-between items-center gap-3 flex-wrap border-t border-[#696F79] pt-[19px] mt-[17px]">
              <div className="flex items-center gap-[11px]">
                <img src={assets.date} alt="date icon" width="24" height="24" />
                <p className="text-[#696F79] text-xs font-light">{item.date}</p>
              </div>
              <Button text="Читать" rightIcon={true} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
