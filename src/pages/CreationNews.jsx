import { CreateForm, Header } from "../components";

const CreationNews = () => {
  return (
    <div className="container mb-[50px]">
      <Header color={true} darkColor={true} />
      <CreateForm btnText="Опубликовать" />
    </div>
  );
};

export default CreationNews;
