import assets from "../assets";
import { Search } from "./Search";
const docsData = [
  {
    title: "Орфанные препараты",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
  },
  {
    title: "Эпидемиология",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
  },
  {
    title: "Клинические исследования",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
  },
  {
    title: "Ведение пациентов и терапия",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
  },
  {
    title: "Терапевтические подходы",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
  },
  {
    title: "Название документа",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
  },
  {
    title: "Название документа",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
  },
  {
    title: "Название документа",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
  },
  {
    title: "Орфанные препараты",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
  },
];
export const DocsFile = () => (
  <>
    <Search placeholder="Поиск по лечениям" />
    <div className="space-y-8">
      {docsData.map((item, index) => (
        <div
          key={index}
          className="flex  gap-4 items-center justify-between sm:mt-[88px] mt-8 last:border-none border-b border-[#E7E7E7] pb-8"
        >
          <div className="flex flex-wrap items-center sm:gap-10 gap-4">
            <img className="sm:w-[60px] sm:h-[83px] w-[45px]" src={assets.docs} alt="docs file img" width="60" height="83" />
            <div className="max-w-[560px]">
              <h5 className="font-semibold leading-[28px] text-lg sm:text-[22px] mb-[9px]">
                {item.title}
              </h5>
              <p className="sm:leading-[25px] sm:text-base text-sm font-light text-[#696F79]">
                {item.desc}
              </p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <button aria-label="download button">
              <img className="min-w-[24px] min-h-[24px]"
                src={assets.download}
                alt="download img"
                width="24"
                height="24"
              />
            </button>
            <button aria-label="share button">
              <img className="min-w-[24px] min-h-[24px]" src={assets.share} alt="share img" width="24" height="24" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </>
);
