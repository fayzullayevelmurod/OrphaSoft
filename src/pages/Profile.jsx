import assets from "../assets";
import { Comments, Header } from "../components";

const Profile = () => (
  <>
    <div className="max-w-[1061px] mx-auto lg:px-0 sm:px-6 px-4">
      <Header color={true} darkColor={true} className="black__header" />
      <h1 className="sm:my-14 my-6 sm:text-[40px] text-3xl leading-[54px] font-bold text-black">
        Профиль
      </h1>
      <div className="flex flex-wrap gap-10 mb-[46px]">
        <img
          className="rounded-[37px]"
          src={assets.doctorImg}
          alt="doctor img"
        />
        <div className="flex-1 sm:min-w-[400px]">
          <div className="text-black flex gap-3 items-center mb-[30px]">
            <h5 className="text-2xl font-normal">Иванова Татьяна Сергеевна</h5>
            <div className="flex items-center gap-1">
              <div className="w-[15px] h-[15px] bg-[#97FF46] rounded-full"></div>
              <p className="text-[20px]">online</p>
            </div>
          </div>
          <div className="space-y-3 mb-[21px]">
            <p className="text-black text-sm leading-[19px] pb-[10px] border-b border-[#A3A3A3]">
              Специальность: <span className="font-bold">Педиатр-генетик</span>
            </p>
            <p className="text-black text-sm leading-[19px] pb-[10px] border-b border-[#A3A3A3]">
              Образование:{" "}
              <span className="font-bold">
                Российский химико-технологический университет имени Д.И.
                Менделеева
              </span>
            </p>
            <p className="text-black text-sm leading-[19px] pb-[10px] border-b border-[#A3A3A3]">
              Опыт работы: <span className="font-bold">19 лет</span>
            </p>
          </div>
          <a className="outline__btn inline-block" href="#!">
            Написать
          </a>
        </div>
      </div>
    </div>
    <div className="lg:max-w-[793px] max-w-[95%] mx-auto mb-8">
      <Comments />
    </div>
  </>
);

export default Profile;
