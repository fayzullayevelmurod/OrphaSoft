import { CreateForm, Header } from "../components";

const CreationNews = () => {
  return (
    <div className="max-w-[1061px] mx-auto lg:px-0 sm:px-6 px-4 mb-[50px]">
      <Header color={true} darkColor={true} className="black__header" />
      <CreateForm btnText="Опубликовать" />
    </div>
  );
};

export default CreationNews;
