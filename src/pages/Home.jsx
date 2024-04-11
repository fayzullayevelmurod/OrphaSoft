import { Banner, Footer, News } from "../components";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <h2 className="title">Популярные новости</h2>
        <div className="flex items-center justify-between mt-9 mb-16">
          <ul className="flex items-center gap-[30px] category__list">
            <li>
              <a
                className="text-[#696F79] font-light leading-[25px] active"
                href="#!"
              >
                Все
              </a>
            </li>
            <li>
              <a className="text-[#696F79] font-light leading-[25px]" href="#!">
                Категория 1
              </a>
            </li>
            <li>
              <a className="text-[#696F79] font-light leading-[25px]" href="#!">
                Категория 2
              </a>
            </li>
            <li>
              <a className="text-[#696F79] font-light leading-[25px]" href="#!">
                Категория 3
              </a>
            </li>
            <li>
              <a className="text-[#696F79] font-light leading-[25px]" href="#!">
                Категория 4
              </a>
            </li>
            <li>
              <a className="text-[#696F79] font-light leading-[25px]" href="#!">
                Категория 5
              </a>
            </li>
          </ul>
          <a className="text-teal flex items-center gap-[10px]" href="#!">
            <span>Все новости</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#00AAA1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 8L14 12L10 16"
                stroke="#00AAA1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <News />
      </div>
      <Footer />
    </>
  );
};

export default Home;
