import {  DocsFile, Footer, SliderBanner } from "../components";
const Treatment = () => {
  return (
    <>
      <SliderBanner
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
