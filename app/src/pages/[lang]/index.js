import React, {useEffect} from "react";
import { getArticles } from "../../services/articles";
import Card from  "../../components/Card";
import styled from 'styled-components';
import Editor from "../../components/Editor";
/**
 * @slug { /de, /en, /anylang}
 * @param {optional} props 
 */
function HomePage(props) {
  const { articles }  = props;
  
  return (
    <PageWrapper>
        <h1>Design Your Logo!</h1>
        <Editor />
        <div className="row">
        {articles && articles.map((article)=>{
            return(<Card key={article.id} img={article.thumbnailUrl} title={article.title}/>)
        })}
        </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
    margin: 70px 0 30px;
    h1{
      text-align:center;
    }
    .row{
      margin-top: 32px;
    }
`;

//This gets called at build time
export async function getServerSideProps(context) {
  const articles = await getArticles('photos', 8);
  return {
    props: {
      articles: articles.data,
    }, // will be passed to the page component as props
  }
}

export default HomePage;
