import assets from "../assets";
import { Banner, Footer } from "../components";
const ContactInformation = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <div className="max-w-[96.8%] mx-auto mt-[21px] mb-[69px] w-full h-[570px]">
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="100%"
          height="100%"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
        ></iframe>
      </div>
      <div className="container mb-8">
        <div className="space-y-[23px]">
          <h1 className="title">Контакты</h1>
          <p className="text-[#000000] leading-[21px] font-light max-w-[728px]">
            Детская городская клиническая больница №13 имени. Н.Ф. Филатова
            находится по адресу: улица, Садовая-Кудринская ул., 15, Москва,
            123001
          </p>
          <p className="text-[#000000] leading-[21px] font-light max-w-[728px]">
            Телефон: +7 (499) 677-65-05
          </p>
          <p className="text-[#000000] leading-[21px] font-light max-w-[728px]">
            График работы: пн.-сб.: 09:00 - 18:00
          </p>
        </div>

        <div className="flex gap-4 justify-between mt-6 px-[20px]">
          <div className="max-w-[195px] w-full text-center border-[2px] border-[#000000] bg-[#F3F3F3] pt-6 pb-3">
            <img
              className="mx-auto"
              src={assets.userPortret}
              alt="user 3x4 img"
              width="115"
              height="114"
            />
            <span className="block text-black leading-[21px] font-light text-[13px] mt-[3px]">
              ФИО
            </span>
            <span className="block text-black leading-[21px] font-light text-[13px]">
              Врач
            </span>
          </div>
          <div className="max-w-[195px] w-full text-center border-[2px] border-[#000000] bg-[#F3F3F3] pt-6 pb-3">
            <img
              className="mx-auto"
              src={assets.userPortret}
              alt="user 3x4 img"
              width="115"
              height="114"
            />
            <span className="block text-black leading-[21px] font-light text-[13px] mt-[3px]">
              ФИО
            </span>
            <span className="block text-black leading-[21px] font-light text-[13px]">
              Врач
            </span>
          </div>
          <div className="max-w-[195px] w-full text-center border-[2px] border-[#000000] bg-[#F3F3F3] pt-6 pb-3">
            <img
              className="mx-auto"
              src={assets.userPortret}
              alt="user 3x4 img"
              width="115"
              height="114"
            />
            <span className="block text-black leading-[21px] font-light text-[13px] mt-[3px]">
              ФИО
            </span>
            <span className="block text-black leading-[21px] font-light text-[13px]">
              Врач
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactInformation;