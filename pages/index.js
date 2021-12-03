import { server } from "../config";
import ArticleList from "../components/ArticleList";

export default function Home() {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}
