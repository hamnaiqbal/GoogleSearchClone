import React from 'react'
import Head from 'next/Head';
import Header from "../Components/Header.jsx";
import {API_KEY, CONTEXT_KEY} from "../keys.js";
import Response from "../Response.js";
import SearchResultFeed from "../Components/SearchResultFeed.jsx";

import { useRouter } from "next/router";



function search({result}) {
  console.log(result)
  const router = useRouter();

  
  return (
    <div>

        <Head >
            <title>{router.query.term}-Google Search</title>

        </Head>

        <Header/>

        <SearchResultFeed result={result}/>
    </div>
  )
}

export default search;
export async  function getServerSideProps(context){
  const startIndex= context.query.star || "0";
  const useDummyData=true;
  const data= useDummyData ? Response :await fetch(`https://www.googleapis.com/customsearch/v1?
  key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(
    (response)=>response.json());
    
    
    
    return {
      props:{
        result: data,
      
      },
      
    } 
    

}