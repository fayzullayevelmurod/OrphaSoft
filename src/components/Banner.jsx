import { Header } from "./Header";

export const Banner = () => {
  return (
    <div className="m-[30px] bg-teal pt-10 rounded-[10px] text-white">
      <div className="container">
        <Header />
        <p className="text-lg leading-[22px] mb-[18px] mt-[197px]">
          Портал по редким заболеваниям и орфанным препаратам OrphaSoft
        </p>
        <h1 className="font-normal text-[52px] leading-[62px] pb-[98px] max-w-[904px]">
          Редкие заболевания редки, <br /> но пациенты с редкими заболеваниями
          многочисленны
        </h1>
      </div>
    </div>
  );
};
