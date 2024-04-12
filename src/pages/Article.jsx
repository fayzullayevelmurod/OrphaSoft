import assets from "../assets";
import { Banner, Comments, Footer, News } from "../components";

const Article = () => {
  return (
    <>
      <main>
        <Banner
          title="Редкие заболевания редки, но пациенты с редкими заболеваниями
          многочисленны"
          desc="Портал по редким заболеваниям и орфанным препаратам OrphaSoft"
        />
        <div className="container">
          <div className="space-y-[43px] max-w-[760px] mx-auto mt-[62px]">
            <p className="text-[#696F79] leading-[30.6px] text-lg font-light">
              Равным образом, постоянный количественный рост и сфера нашей
              активности способствует повышению качества первоочередных
              требований. В частности, высокотехнологичная концепция
              общественного уклада в значительной степени обусловливает важность
              дальнейших направлений развития. Учитывая ключевые сценарии
              поведения, высококачественный прототип будущего проекта
              способствует повышению качества экономической целесообразности
              принимаемых решений. Следует отметить, что новая модель
              организационной деятельности напрямую зависит от переосмысления
              внешнеэкономических политик.
            </p>
            <p className="text-[#696F79] leading-[30.6px] text-lg font-light">
              Значимость этих проблем настолько очевидна, что сплочённость
              команды профессионалов не оставляет шанса для системы массового
              участия. Имеется спорная точка зрения, гласящая примерно
              следующее: базовые сценарии поведения пользователей неоднозначны и
              будут описаны максимально подробно. Высокий уровень вовлечения
              представителей целевой аудитории является четким доказательством
              простого факта: социально-экономическое развитие способствует
              подготовке и реализации стандартных подходов. Повседневная
              практика показывает, что повышение уровня гражданского сознания
              требует от нас анализа благоприятных перспектив.
            </p>
            <p className="text-[#696F79] leading-[30.6px] text-lg font-light">
              С учётом сложившейся международной обстановки, убеждённость
              некоторых оппонентов не даёт нам иного выбора, кроме определения
              направлений прогрессивного развития.
            </p>
            <p className="text-[#696F79] leading-[30.6px] text-lg font-light">
              Вот вам яркий пример современных тенденций - сложившаяся структура
              организации не даёт нам иного выбора, кроме определения
              своевременного выполнения сверхзадачи. Но реплицированные с
              зарубежных источников, современные исследования призваны к ответу.
            </p>
            <p className="text-[#696F79] leading-[30.6px] text-lg font-light">
              Равным образом, постоянный количественный рост и сфера нашей
              активности способствует повышению качества первоочередных
              требований. В частности, высокотехнологичная концепция
              общественного уклада в значительной степени обусловливает важность
              дальнейших направлений развития. Учитывая ключевые сценарии
              поведения, высококачественный прототип будущего экономической
              целесообразности принимаемых решений. Следует отметить, что новая
              модель организационной деятельности напрямую зависит от
              переосмысления внешнеэкономических политик.
            </p>
            <p className="text-[#696F79] leading-[30.6px] text-lg font-light">
              Господа, перспективное планирование создаёт предпосылки для
              инновационных методов управления процессами. Высокий уровень
              вовлечения представителей целевой аудитории является.
            </p>
            <p className="text-[#696F79] leading-[30.6px] text-lg font-light">
              Равным образом, постоянный количественный рост и сфера нашей
              активности способствует повышению качества первоочередных
              требований. В частности, высокотехнологичная концепция
              общественного уклада в значительной степени обусловливает важность
              дальнейших направлений развития. Учитывая ключевые сценарии
              поведения, высококачественный прототип будущего проекта
              способствует повышению качества экономической целесообразности
              принимаемых решений. Следует отметить, что новая модель
              организационной деятельности напрямую зависит от переосмысления
              внешнеэкономических политик.
            </p>
          </div>
          <div className="flex gap-[10px] max-w-[800px] mx-auto mt-[14px] mb-8">
            <button
              className="py-[5px] px-[10px] border border-[#E7E7E7] text-[#696F79] text-xs leading-6 font-light"
              aria-label="Категория 1"
            >
              Категория 1
            </button>
            <button
              className="py-[5px] px-[10px] border border-[#E7E7E7] text-[#696F79] text-xs leading-6 font-light"
              aria-label="Категория 1"
            >
              Категория 2
            </button>
            <button
              className="py-[5px] px-[10px] border border-[#E7E7E7] text-[#696F79] text-xs leading-6 font-light"
              aria-label="Категория 1"
            >
              Категория 3
            </button>
          </div>
          <div className="w-full h-[0.5px] bg-[#C4C4C4]"></div>
          <div className="max-w-[800px] mx-auto mt-8">
            <div className="mb-[66px] flex items-center justify-between">
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
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Article;
