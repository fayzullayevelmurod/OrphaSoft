import assets from "../assets";
import { Comments, News, SliderBanner } from "../components";

const ArticleApproval = () => {
  return (
    <>
      <SliderBanner
        bannerBg={true}
        title="Высокий уровень вовлечения представителей."
      />
      <div className="lg:max-w-[760px] max-w-[95%] mx-auto space-y-6 text-[#696F79] text-lg leading-[31px] font-light">
        <p>
          <div className="flex items-start lg:mb-[-23px] gap-4">
            <span className="text-teal text-[64px] block leading-normal">
              Р
            </span>
            <p className="mt-[10px]">
              {" "}
              равным образом, постоянный количественный рост и сфера нашей{" "}
              активности способствует повышению качества первоочередных
              требований.{" "}
            </p>
          </div>
          В частности, высокотехнологичная концепция общественного уклада в
          значительной степени обусловливает важность дальнейших направлений
          развития. Учитывая ключевые сценарии поведения, высококачественный
          прототип будущего проекта способствует повышению качества
          экономической целесообразности принимаемых решений. Следует отметить,
          что новая модель организационной деятельности напрямую зависит от
          переосмысления внешнеэкономических политик.
        </p>
        <p>
          Значимость этих проблем настолько очевидна, что сплочённость команды
          профессионалов не оставляет шанса для системы массового участия.
          Имеется спорная точка зрения, гласящая примерно следующее: базовые
          сценарии поведения пользователей неоднозначны и будут описаны
          максимально подробно. Высокий уровень вовлечения представителей
          целевой аудитории является четким доказательством простого факта:
          социально-экономическое развитие способствует подготовке и реализации
          стандартных подходов. Повседневная практика показывает, что повышение
          уровня гражданского сознания требует от нас анализа благоприятных
          перспектив.
        </p>
        <p>
          С учётом сложившейся международной обстановки, убеждённость некоторых
          оппонентов не даёт нам иного выбора, кроме определения направлений
          прогрессивного развития.
        </p>
      </div>
      <div className="container">
        <div className="tendence__bg">
          <h3 className="text-teal text-[32px] font-semibold">
            Вот вам яркий пример современных тенденций —{" "}
          </h3>
        </div>
      </div>
      <div className="lg:max-w-[760px] max-w-[95%] mx-auto space-y-6 text-[#696F79] text-lg leading-[31px] font-light">
        <p>
          сложившаяся структура организации не даёт нам иного выбора, кроме
          определения своевременного выполнения сверхзадачи. Но реплицированные
          с зарубежных источников, современные исследования призваны к ответу.
        </p>
        <p>
          Равным образом, постоянный количественный рост и сфера нашей
          активности способствует повышению качества первоочередных требований.
          В частности, высокотехнологичная концепция общественного уклада в
          значительной степени обусловливает важность дальнейших направлений
          развития. Учитывая ключевые сценарии поведения, высококачественный
          прототип будущего экономической целесообразности принимаемых решений.
          Следует отметить, что новая модель организационной деятельности
          напрямую зависит от переосмысления внешнеэкономических политик.
        </p>
        <p>
          экономической целесообразности принимаемых решений. Следует отметить,
          что новая модель организационной деятельности напрямую зависит от
          переосмысления внешнеэкономических политик.
        </p>
      </div>
      <div className="lg:max-w-[760px] max-w-[95%] mx-auto mt-[60px]">
        <div className="md:p-[50px] p-4 border-t-[4px] border-teal bg-[#EAFFFE] rounded-lg">
          <p className="sm:text-2xl text-base">
            Господа, перспективное планирование создаёт предпосылки для
            инновационных методов управления процессами. Высокий уровень
            вовлечения представителей целевой аудитории является.
          </p>
        </div>
        <div className="mt-16 mb-[95px]">
          <p className="text-[#696F79] text-lg leading-[31px] font-light">
            Равным образом, постоянный количественный рост и сфера нашей
            активности способствует повышению качества первоочередных
            требований. В частности, высокотехнологичная концепция общественного
            уклада в значительной степени обусловливает важность дальнейших
            направлений развития. Учитывая ключевые сценарии поведения,
            высококачественный прототип будущего проекта способствует повышению
            качества экономической целесообразности принимаемых решений. Следует
            отметить, что новая модель организационной деятельности напрямую
            зависит от переосмысления внешнеэкономических политик.
          </p>
        </div>
        <div className="flex gap-[10px]">
          <button className="category__btn">Категория 1</button>
          <button className="category__btn">Категория 2</button>
          <button className="category__btn">Категория 3</button>
        </div>
      </div>
      <div className="container my-8 h-[0.5px] bg-[#C4C4C4]"></div>
      <div className="lg:max-w-[760px] max-w-[95%] mx-auto mb-[108px]">
        <div className="flex flex-wrap gap-y-4 items-center justify-between pb-8">
          <div className="flex items-center gap-[30px]">
            <img
              src={assets.userAvatar}
              alt="user img"
              width="80"
              height="80"
            />
            <div className="space-y-[2px] text-[#242628]">
              <h6 className="font-semibold text-base leading-[21px]">
                Иванов Иван
              </h6>
              <span className="inline-block text-xs leading-[19px] font-light">
                Врач
              </span>
            </div>
          </div>
          <div className="flex gap-[15px]">
            <a
              href="#!"
              aria-label="social media wk"
              className="rounded-full bg-[#495057] w-10 h-10 flex justify-center items-center"
            >
              <img src={assets.wk} alt="wk icon" width="22" height="14" />
            </a>
            <a
              href="#!"
              aria-label="social media telegram"
              className="rounded-full bg-[#495057] w-10 h-10 flex justify-center items-center"
            >
              <img
                src={assets.telegram}
                alt="telegram icon"
                width="19"
                height="17"
              />
            </a>
            <a
              href="#!"
              aria-label="social media whatsapp"
              className="rounded-full bg-[#495057] w-10 h-10 flex justify-center items-center"
            >
              <img
                src={assets.whatsapp}
                alt="whatsapp icon"
                width="21"
                height="21"
              />
            </a>
          </div>
        </div>
        <Comments />
      </div>
      <div className="container mt-[58px] mb-[124px]">
        <News length={3} showTitle={true} title="Вам может понравиться" />
      </div>
      <div className="container flex justify-between flex-wrap gap-4 mb-[88px]">
        <button className="border-[6px] border-[#FF0000] bg-[#C4C4C4] text-black max-w-[453px] h-[72px] w-full text-2xl font-semibold">
          Отклонить
        </button>
        <button className="teal__btn-lg h-[72px]">Опубликовать</button>
      </div>
    </>
  );
};

export default ArticleApproval;
