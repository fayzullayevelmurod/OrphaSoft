import { useState } from "react";
import assets from "../assets";
import { Header } from "../components";

const Chat = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="max-w-[1061px] mx-auto lg:px-0 sm:px-6 px-4">
        <Header color={true} darkColor={true} className="black__header" />
      </div>
      <div className="container mb-12">
        <div className="flex items-stretch mt-[90px] h-[1060px]">
          <div className="md:max-w-[414px] sm:max-w-[300px] sm:w-fit w-[150px] block  bg-teal py-3 rounded-lg relative">
            <div className="relative flex sm:flex-row flex-col items-center gap-[26px] sm:px-6 px-4 justify-between pb-[23px] border-b border-black">
              <div className="relative max-w-[300px] border border-black h-10 bg-[#E7E7E7B8] rounded-[10px] overflow-hidden ">
                <input
                  className="w-full placeholder:text-white text-xl text-white bg-transparent h-full pl-[43px]"
                  type="search"
                  placeholder="Поиск"
                />
                <img
                  className="absolute top-1/2 -translate-y-1/2 sm:left-[18px] left-[10px]"
                  src={assets.search}
                  alt=""
                  width={17}
                  height={17}
                />
              </div>
              <button onClick={handleOpen}>
                <img src={assets.plus} alt="" />
              </button>
              <div
                className={`absolute top-full sm:right-0 text-center sm:left-auto right-auto left-0 shadow-2xl border border-black rounded-lg w-fit h-[207px] duration-300 bg-white p-4 origin-top scale-y-0 ${
                  open ? "scale-y-100" : ""
                }`}
              >
                <p className="text-black font-semibold text-base">
                  Групповой чат <br /> Индивидуальный чат
                </p>
              </div>
            </div>
            <div className="flex items-center sm:justify-normal justify-between gap-[9px] sm:px-6 px-4 py-8 border-b border-black">
              <img
                className="rounded-full"
                src={assets.doctorImg}
                alt=""
                width={56}
                height={53}
              />
              <h4 className="sm:text-2xl text-sm text-white font-bold sm:block hidden">
                Иванова Татьяна
              </h4>
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
                <h4 className="sm:text-2xl text-base text-black font-bold">
                  Иванова Татьяна
                </h4>
                <div className=" max-w-[17px] w-[10px] h-[10px] min-w-[10px] sm:max-h-[17px] bg-[#97FF46] rounded-full"></div>
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
            <div className="flex items-center gap-[10px] py-8 sm:px-[50px] px-4 border-t border-[#B2B2B2]">
              <label
                className="flex items-center cursor-pointer gap-[20px]"
                htmlFor="file"
              >
                <img className="sm:w-auto w-5" src={assets.file} alt="file" />
              </label>
              <input className="hidden" type="file" id="file" />
              <input
                placeholder="Напишите здесь своё сообщение"
                className="w-full sm:text-2xl text-xs placeholder:text-[#B2B2B2]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
