// eslint-disable-next-line react/prop-types
export const CreateForm = ({ btnText }) => (
  <form className="text-black mt-20">
    <div className="flex flex-wrap sm:flex-row flex-col gap-[17px] items-start">
      <label className="text-2xl font-normal w-[134px]">Заголовок</label>
      <input className="form__input flex-1 sm:w-auto w-full" type="text" />
    </div>
    <div className="flex flex-wrap gap-[17px] items-start mt-[50px] mb-[94px]">
      <label className="text-2xl font-normal w-[134px]">Категории</label>
      <div className="sm:w-fit w-full">
        <select className="form__input sm:w-[196px] w-full">
          <option value="Категория 1">Категория 1</option>
          <option value="Категория 2">Категория 2</option>
          <option value="Категория 3">Категория 3</option>
        </select>
        <div className="flex gap-[10px] translate-y-6">
          <button
            type="button"
            className="border border-[#E7E7E7] px-[10px] py-[5px] text-sm text-[#696F79] font-light"
          >
            Категория 1
          </button>
          <button
            type="button"
            className="border border-[#E7E7E7] px-[10px] py-[5px] text-sm text-[#696F79] font-light"
          >
            Категория 2
          </button>
          <button
            type="button"
            className="border border-[#E7E7E7] px-[10px] py-[5px] text-sm text-[#696F79] font-light"
          >
            Категория 3
          </button>
        </div>
      </div>
    </div>
    <div className="flex sm:flex-row flex-col  flex-wrap gap-[17px] items-start mb-[50px]">
      <label className="text-2xl font-normal sm:w-[134px] w-full">
        Краткое <br /> описание
      </label>
      <textarea
        className="form__input sm:w-auto w-full flex-1 textarea"
        type="text"
      />
    </div>
    <div className="flex sm:flex-row flex-col flex-wrap gap-[17px] items-start">
      <label className="text-2xl font-normal w-full sm:w-[134px]">
        Текст статьи
      </label>
      <textarea
        className="form__input sm:w-auto w-full flex-1 big__textarea"
        type="text"
      />
    </div>
    <div className="mt-[30px] flex flex-wrap gap-y-4 justify-between">
      <div className="flex flex-wrap justify-between items-center gap-[50px]">
        <p className="text-black text-2xl">Превью</p>
        <button type="button" className="outline__btn">
          Прикрепить (.png, .jpeg)
        </button>
      </div>
      <button type="submit" className="teal__btn-lg">
        {btnText}
      </button>
    </div>
  </form>
);
