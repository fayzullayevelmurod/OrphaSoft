import { CreateForm, Header } from "../components";

const CreatingArticle = () => (
  <>
    <div className="max-w-[1061px] mx-auto lg:px-0 sm:px-6 px-4">
      <Header color={true} darkColor={true} className="black__header" />
    </div>
    <div className="container mb-[50px]">
      <CreateForm btnText="Подать запрос на публикацию" />
    </div>
  </>
);

export default CreatingArticle;
