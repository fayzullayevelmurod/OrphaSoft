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
          className="flex flex-wrap gap-4 items-center justify-between mt-[88px] border-b border-[#E7E7E7] pb-8"
        >
          <div className="flex items-center gap-10">
            <img src={assets.docs} alt="docs file img" width="60" height="83" />
            <div className="max-w-[560px]">
              <h5 className="font-semibold leading-[28px] text-[22px] mb-[9px]">
                {item.title}
              </h5>
              <p className="leading-[25px] font-light text-[#696F79]">
                {item.desc}
              </p>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <button aria-label="download button">
              <img
                src={assets.download}
                alt="download img"
                width="24"
                height="24"
              />
            </button>
            <button aria-label="share button">
              <img src={assets.share} alt="share img" width="24" height="24" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </>
);
