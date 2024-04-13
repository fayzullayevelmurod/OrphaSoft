import { Header } from "./Header";

export const Banner = (props) => {
  // eslint-disable-next-line react/prop-types
  const { darkColor, title, desc, breadcrumb, breadcrumbName } = props;
  return (
    <div
      className={`${
        darkColor ? "bg-[#232323]" : "bg-teal"
      } banner m-[30px] pt-10 rounded-[10px] text-white`}
    >
      <div className="container">
        <Header darkColor={darkColor} />
        <div className="mt-[197px]">
          {breadcrumb ? (
            <div className="py-[10px] w-fit mb-[27px] bg-teal px-4 rounded-[10px] flex gap-2">
              <a href="/">Главная /</a>
              <span className="text-white text-[15px] font-normal">
                {breadcrumbName}
              </span>
            </div>
          ) : null}
          {desc ? (
            <p className="text-lg leading-[22px] mb-[18px]">{desc}</p>
          ) : null}
          <h1 className="font-normal text-[52px] leading-[62px] pb-[98px] max-w-[904px]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};
