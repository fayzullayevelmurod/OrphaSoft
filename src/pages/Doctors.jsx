import assets from "../assets";
import { Button, Search, SliderBanner } from "../components";

const doctorsData = [
  {
    img: assets.doctorImg,
    name: "Иванова Татьяна Сергеевна",
    speciality: "Педиатр-генетик",
    education:
      "Российский химико-технологический университет имени Д.И. Менделеева",
    experience: "19 лет",
  },
  {
    img: assets.doctorImg,
    name: "Иванова Татьяна Сергеевна",
    speciality: "Педиатр-генетик",
    education:
      "Российский химико-технологический университет имени Д.И. Менделеева",
    experience: "19 лет",
  },
  {
    img: assets.doctorImg,
    name: "Иванова Татьяна Сергеевна",
    speciality: "Педиатр-генетик",
    education:
      "Российский химико-технологический университет имени Д.И. Менделеева",
    experience: "19 лет",
  },
];

const Doctors = () => {
  return (
    <>
      <SliderBanner
        title="Врачи"
        darkColor={true}
        breadcrumb={true}
        breadcrumbName="Врачи"
      />
      <div className="container md:mb-[230px] mb-8">
        <Search />
        <div className="mt-16 space-y-[30px]">
          {doctorsData?.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap items-start gap-10 justify-between"
            >
              <img
                className="rounded-[37px] sm:w-auto w-full"
                src={item.img}
                alt="doctor img"
                width="317"
                height="299"
              />
              <div className="bg-[#FAFAFA] flex-1 rounded-[10px] sm:min-w-[450px]">
                <div className="pt-[39px] pb-6 px-10 border-b border-[#E7E7E7]">
                  <p className="font-semibold leading-[26px] text-sm">
                    {item.name}
                  </p>
                </div>
                <div className="pt-6 pb-[38px] px-[30px]">
                  <div className="space-y-3 mb-10">
                    <p className="text-[#414141] text-sm leading-[19px]">
                      Специальность:{" "}
                      <span className="font-bold">{item.speciality}</span>
                    </p>
                    <p className="text-[#414141] text-sm leading-[19px]">
                      Образование:{" "}
                      <span className="font-bold">{item.education}</span>
                    </p>
                    <p className="text-[#414141] text-sm leading-[19px]">
                      Опыт работы:{" "}
                      <span className="font-bold">{item.experience}</span>
                    </p>
                  </div>
                  <Button text="Подробнее" rightIcon={true} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Doctors;
