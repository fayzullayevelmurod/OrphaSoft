import { Banner, DocsFile, Footer } from "../components";
const Treatment = () => {
  return (
    <>
      <Banner
        title="Контактная информация"
        darkColor={true}
        breadcrumb={true}
        breadcrumbName="Лечение"
      />
      <div className="container">
        <DocsFile />
      </div>
      <Footer />
    </>
  );
};
export default Treatment;
