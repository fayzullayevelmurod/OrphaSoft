import { Banner, Comments } from "../components";

const Forums = () => (
  <>
    <Banner title="Орфанные препараты" darkColor={true} />
    <div className="container mt-[60px]">
      <Comments title="Оставить сообщение" bottomComment={true} />
    </div>
  </>
);

export default Forums;
