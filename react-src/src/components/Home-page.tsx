import React, { Component} from 'react';

import { Header, Footer } from './common';
import { PageSection } from './sections';

export class HomePage extends Component<{}, {data: [] }> {
  constructor(props){
    super(props);
    this.state = {
      data : []
    };
    
  }
  
  
  async componentDidMount(){
    return fetch('/wp-json/wp/v2/pages?slug=homepage')
    .then(response => response.json())
    .then(responseJson => fetch(`/wp-json/wp/v2/pages?parent=${responseJson[0].id}&orderBy=date&order=asc`))
    .then(response => response.json())
    .then(responseJson => this.setState({data: responseJson}))
    .catch(e => console.error(e));
  }

  componentDidCatch(error, errorInfo) { 
    // You can also log the error to an error reporting service    logErrorToMyService(error, errorInfo);
    console.error(error, errorInfo);
   }  
  
  render(){
    return (
      <main>
      <Header collapse={false} />
      {this.state.data.map((item : any, key) => {
        return (
          <PageSection key={key} theme={key % 2 === 0 ? 'light' : 'dark'} classes="padding-top-three padding-bottom-three">
            <h1 className="cormorant big"> {item.title.rendered} </h1>
            <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
          </PageSection>
        )
      })}
      <Footer theme="dark" classes="padding-top-three" />
      </main>
    )
  }
}

export default HomePage;