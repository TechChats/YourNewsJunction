
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {

  // url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=8488cba818a44e7c81c45cac2b4a9834";

  url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a12aa7b1ebe14779a452d5601d01048b";

  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={10} url={this.url}/>
        
      </div>

    )
  }
}
