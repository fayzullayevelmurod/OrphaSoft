import { CreateForm, Header } from "../components";

const CreatingArticle = () => (
  <div className="container mb-[50px]">
    <Header color={true} darkColor={true} />
    <CreateForm btnText="Подать запрос на публикацию" />
  </div>
);

export default CreatingArticle;
