import React,
{
  // useEffect,
  useState,
} from 'react';

import {
  Header,
  Footer,
} from './common';
import { PageSection } from './sections';

import {
  // useParams,
  useLocation,
} from 'react-router-dom';


export function HomePage (props){
  const [posts, setPosts] =  useState([]);
  const location = useLocation();
  const pageSlug = location.pathname;
  const fetchUrl = (postID && pageSlug ==='/') ? `/wp-json/wp/v2/pages/${postID}` :`/wp-json/wp/v2/pages?slug=${pageSlug}`;

  async function fetchPageContent(){
      return fetch(fetchUrl)
      .then(response => response.json())
      .then(async (responseJson) => {
        responseJson = (postID && pageSlug ==='/') ? [responseJson] : responseJson;
        if (responseJson.length>0){
          const postID = responseJson[0].id;
          return fetch(`/wp-json/wp/v2/pages?parent=${postID}&orderBy=date&order=asc`)
          .then(async (response) => {
            console.log("Parent", responseJson);
            // if (responseJson.length > 0){
              const includeParent = (responseJson[0].content && responseJson[0].content.rendered.length) ? responseJson : [];
              return Promise.resolve( [...includeParent, ...(await response.json())])
            // }else{
            //   return Promise.resolve( [...includeParent, ...(await response.json())])
            // }
          })
        }else{
          return Promise.resolve(responseJson);
        }
      })
      .then(responseJson => {
        if (responseJson.length > 0) {
          if (JSON.stringify(posts) !== JSON.stringify(responseJson)){
            setPosts(responseJson);
          }
        }
      })
      .catch(e => console.error("error", e));
  }
  
  fetchPageContent();
  return (
    <main>
      <div>
        <Header collapse={false} />
          {posts.map((item : any, key) => {
            return (
              <PageSection key={key} theme={key % 2 === 0 ? 'light' : 'dark'} classes="padding-top-three padding-bottom-three">
                <h1 className="cormorant big"> {item.title.rendered} </h1>
                <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
              </PageSection>
            )
          })}
        <Footer theme="dark" classes="padding-top-three" />
      </div>
    </main>
  )
  // }
}

export default HomePage;