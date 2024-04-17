import { Banner, Button, Search } from "../components";
const formusData = [
  {
    title: "Орфанные препараты",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
    to: "#",
  },
  {
    title: "Орфанные препараты",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
    to: "#",
  },
  {
    title: "Орфанные препараты",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
    to: "#",
  },
  {
    title: "Орфанные препараты",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
    to: "#",
  },
  {
    title: "Орфанные препараты",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
    to: "#",
  },
  {
    title: "Орфанные препараты",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
    to: "#",
  },
  {
    title: "Орфанные препараты",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
    to: "#",
  },
  {
    title: "Орфанные препараты",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
    to: "#",
  },
  {
    title: "Орфанные препараты",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
    to: "#",
  },
  {
    title: "Орфанные препараты",
    desc: "Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление.",
    to: "#",
  },
];
const ForumsTwo = () => (
  <>
    <Banner title="Форумы" darkColor={true} />
    <div className="lg:max-w-[960px] max-w-[95%] mx-auto mt-[60px] mb-12">
      <Search placeholder="Поиск по форумам" />
      <div className="mt-[88px] space-y-1">
        {formusData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 flex-wrap justify-between border-b border-[#E7E7E7] pb-7 lg:pl-[100px] lg:pr-[83px]"
          >
            <div className="space-y-[10px] max-w-[566px]">
              <h5 className="leading-[29px] text-[22px] font-semibold">
                {item.title}
              </h5>
              <p className="text-[#696F79] leading-[25px] text-base font-light">
                {item.desc}
              </p>
            </div>
            <Button to={item.to} text="Подробнее" rightIcon={true} />
          </div>
        ))}
      </div>
    </div>
  </>
);

export default ForumsTwo;
