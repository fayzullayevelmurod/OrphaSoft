import { Header } from "../components";

const PersonalArea = () => {
  return (
    <>
      <div className="max-w-[1061px] mx-auto lg:px-0 sm:px-6 px-4">
        <Header color={true} darkColor={true} className="black__header" />
      </div>
      <div className="container">
        <h2 className="big__title mt-11 mb-[53px]">
          Добро пожаловать, Татьяна!
        </h2>
        <div className="space-y-[23px]">
          <h3 className="default__title">Пользователь</h3>
          <a className="teal__btn xl" href="/profile-settings">
            Настройки профиля
          </a>
        </div>
        <div className="space-y-[23px] mt-[31px]">
          <h3 className="default__title">Мед. Специалист</h3>
          <div className="flex gap-[14px] flex-wrap">
            <a className="teal__btn xl" href="#!">
              Отправить документы о квалификации
            </a>
            <a className="teal__btn xl" href="#!">
              Опубликовать статью
            </a>
          </div>
        </div>
        <div className="space-y-[23px] mt-[31px]">
          <h3 className="default__title">Администратор</h3>
          <div className="flex gap-[14px] flex-wrap">
            <a className="teal__btn xl" href="#!">
              Управление пользователями
            </a>
            <a className="teal__btn xl" href="#!">
              Статьи на рассмотрение
            </a>
            <a className="teal__btn xl" href="#!">
              Опубликовать новость
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalArea;
