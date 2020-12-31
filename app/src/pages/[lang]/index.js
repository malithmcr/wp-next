import React, {useState} from "react";
import { getLogos } from "../../services/logo";
import Card from  "../../components/Card";
import styled from 'styled-components';
import Editor from "../../components/Editor";
/**
 * @slug { /de, /en, /anylang}
 * @param {optional} props 
 */
function HomePage(props) {
  const { logos }  = props;
  
  return (
    <PageWrapper>
        <h1>Design Your Logo!</h1>
        <Editor />
        <div className="row">
        {logos && logos.map((logo)=>{
            return(<Card key={logo?.id} img={logo?.acf?.logo_url} logoName={logo?.title?.rendered}/>)
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
  const logos = await getLogos();
  return {
    props: {
      logos: logos.data,
    }, // will be passed to the page component as props
  }
}

export default HomePage;
