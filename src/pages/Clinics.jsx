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
      <Banner
        title="Клиники"
        darkColor={true}
        breadcrumb={true}
        breadcrumbName="Клиники"
      />
      <div className="container md:mt-16 mt-6">
        <Search placeholder="Поиск по клиникам" />
        <div className="flex flex-wrap justify-between gap-x-[39px] gap-y-[30px] mt-16">
          {clinicsData?.map((item, index) => (
            <div
              className="bg-[#FAFAFA] rounded-[10px] w-full md:w-[calc(51%_-_40px)]"
              key={index}
            >
              <div className="border-b border-[#E7E7E7] sm:pt-[39px] sm:pb-[24px] py-4">
                <h5 className="text-xs leading-[26px] font-semibold sm:px-[30px] px-4">
                  {item.title}
                </h5>
              </div>
              <div className="sm:pt-6 sm:pb-[38px] sm:pl-[30px] sm:pr-[23px] p-4">
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
