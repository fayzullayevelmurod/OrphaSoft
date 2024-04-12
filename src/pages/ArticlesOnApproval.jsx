import { Banner, DocsFile } from "../components";

const ArticlesOnApproval = () => (
  <>
    <Banner title="Статьи на рецензию" darkColor={true} />
    <div className="container mb-[30px]">
      <DocsFile />
    </div>
  </>
);

export default ArticlesOnApproval;
