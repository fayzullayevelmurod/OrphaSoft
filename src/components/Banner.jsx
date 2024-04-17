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
        <div className="lg:mt-[197px] mt-[100px]">
          {breadcrumb ? (
            <div className="py-[10px] w-fit mb-[27px] bg-teal px-4 rounded-[10px] flex gap-2">
              <a href="/">Главная /</a>
              <span className="text-white text-[15px] font-normal">
                {breadcrumbName}
              </span>
            </div>
          ) : null}
          {desc ? (
            <p className="md:text-lg text-sm leading-[22px] mb-[18px]">{desc}</p>
          ) : null}
          <h1 className="font-normal lg:text-[52px] sm:text-3xl text-2xl lg:leading-[62px] md:pb-[98px] pb-[50px] max-w-[904px]">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};
