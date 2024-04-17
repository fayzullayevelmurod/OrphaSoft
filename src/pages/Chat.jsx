import assets from "../assets";
import { Header } from "../components";

const Chat = () => {
  return (
    <div className="container mb-12">
      <Header color={true} darkColor={true} />

      <div className="flex items-stretch mt-[90px] h-[1060px]">
        <div className="md:max-w-[414px] max-w-[300px] hidden sm:block  bg-teal py-3 rounded-lg relative">
          <div className="flex items-center gap-[26px] px-6 justify-between pb-[23px] border-b border-black">
            <div className="relative max-w-[300px] border border-black h-10 bg-[#E7E7E7B8] rounded-[10px] overflow-hidden ">
              <input
                className="w-full placeholder:text-white text-xl text-white bg-transparent h-full pl-[43px]"
                type="search"
                placeholder="Поиск"
              />
              <img
                className="absolute top-1/2 -translate-y-1/2 left-[18px]"
                src={assets.search}
                alt=""
                width={17}
                height={17}
              />
            </div>
            <button>
              <img src={assets.plus} alt="" />
            </button>
          </div>
          <div className="flex items-center gap-[9px] px-6 py-8 border-b border-black">
            <img
              className="rounded-full"
              src={assets.doctorImg}
              alt=""
              width={56}
              height={53}
            />
            <h4 className="text-2xl text-white font-bold">Иванова Татьяна</h4>
            <div className="w-[17px] h-[17px] bg-[#97FF46] rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col justify-between border sm:border-r border-t border-b -ml-2 flex-1 sm:rounded-r-[10px] rounded-[10px] border-[#B2B2B2]">
          <div>
            <div className="flex items-center gap-[9px] px-6 pb-[19px] pt-[13px] border-b border-[#B2B2B2]">
              <img
                className="rounded-full"
                src={assets.doctorImg}
                alt=""
                width={56}
                height={53}
              />
              <h4 className="text-2xl text-black font-bold">Иванова Татьяна</h4>
              <div className="w-[17px] h-[17px] bg-[#97FF46] rounded-full"></div>
            </div>
            <div className="pt-[69px] space-y-10 px-[33px]">
              <div className="flex items-center w-full gap-4 justify-end">
                <button className="black__btn">Здравствуйте</button>
                <img
                  className="rounded-full"
                  src={assets.user2}
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex items-center w-full gap-4 justify-start">
                <img
                  className="rounded-full w-10 h-10"
                  src={assets.doctorImg}
                  alt=""
                  width={40}
                  height={40}
                />
                <button className="black__btn">Здравствуйте</button>
              </div>
            </div>
          </div>
          <div className="py-8 px-[50px] border-t border-[#B2B2B2]">
            <label
              className="flex items-center cursor-pointer gap-[20px]"
              htmlFor="file"
            >
              <img src={assets.file} alt="file" />
              <span className="sm:text-2xl text-base text-[#B2B2B2]">
                Напишите здесь своё сообщение
              </span>
            </label>
            <input className="hidden" type="file" id="file" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
