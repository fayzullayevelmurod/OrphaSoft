import { Banner, Button, Footer, Search } from "../components";
const clinicsData = [
  {
    title: "Детская клиническая больница № 13 им. Филатова",
    address: "л. Садовая-Кудринская, 15.метро: Баррикадная, Маяковская",
    phone: "+7 (499) 677-65-05",
    schedule: "пн.-сб.: 09:00 - 18:00",
  },
  {
    title: "Детская клиническая больница № 13 им. Филатова",
    address: "л. Садовая-Кудринская, 15.метро: Баррикадная, Маяковская",
    phone: "+7 (499) 677-65-05",
    schedule: "пн.-сб.: 09:00 - 18:00",
  },
  {
    title: "Детская клиническая больница № 13 им. Филатова",
    address: "л. Садовая-Кудринская, 15.метро: Баррикадная, Маяковская",
    phone: "+7 (499) 677-65-05",
    schedule: "пн.-сб.: 09:00 - 18:00",
  },
  {
    title: "Детская клиническая больница № 13 им. Филатова",
    address: "л. Садовая-Кудринская, 15.метро: Баррикадная, Маяковская",
    phone: "+7 (499) 677-65-05",
    schedule: "пн.-сб.: 09:00 - 18:00",
  },
  {
    title: "Детская клиническая больница № 13 им. Филатова",
    address: "л. Садовая-Кудринская, 15.метро: Баррикадная, Маяковская",
    phone: "+7 (499) 677-65-05",
    schedule: "пн.-сб.: 09:00 - 18:00",
  },
  {
    title: "Детская клиническая больница № 13 им. Филатова",
    address: "л. Садовая-Кудринская, 15.метро: Баррикадная, Маяковская",
    phone: "+7 (499) 677-65-05",
    schedule: "пн.-сб.: 09:00 - 18:00",
  },
  {
    title: "Детская клиническая больница № 13 им. Филатова",
    address: "л. Садовая-Кудринская, 15.метро: Баррикадная, Маяковская",
    phone: "+7 (499) 677-65-05",
    schedule: "пн.-сб.: 09:00 - 18:00",
  },
  {
    title: "Детская клиническая больница № 13 им. Филатова",
    address: "л. Садовая-Кудринская, 15.метро: Баррикадная, Маяковская",
    phone: "+7 (499) 677-65-05",
    schedule: "пн.-сб.: 09:00 - 18:00",
  },
];
const Clinics = () => {
  return (
    <>
      <Banner />
      <div className="container mt-16">
        <Search placeholder="Поиск по клиникам" />
        <div className="flex flex-wrap justify-between gap-x-[39px] gap-y-[30px] mt-16">
          {clinicsData?.map((item, index) => (
            <div
              className="bg-[#FAFAFA] rounded-[10px] w-[calc(51%_-_40px)]"
              key={index}
            >
              <div className="border-b border-[#E7E7E7] pt-[39px] pb-[24px]">
                <h5 className="text-xs leading-[26px] font-semibold px-[30px]">
                  {item.title}
                </h5>
              </div>
              <div className="pt-6 pb-[38px] pl-[30px] pr-[23px]">
                <div className="space-y-2">
                  <p className="text-xs leading-[26px] font-normal">
                    Адрес:{" "}
                    <span className="text-[#676565] font-light">
                      {item.address}
                    </span>
                  </p>
                  <p className="text-xs leading-[26px] font-normal">
                    Телефон:{" "}
                    <span className="text-[#676565] font-light">
                      {item.phone}
                    </span>
                  </p>
                  <p className="text-xs leading-[26px] font-normal">
                    График работы:{" "}
                    <span className="text-[#676565] font-light">
                      {item.phone}
                    </span>
                  </p>
                </div>
                <div className="mt-6">
                  <Button text="Подробнее" rightIcon={true} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Clinics;
