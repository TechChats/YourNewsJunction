
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {

  pageSize = 10;

  state = {
    progressBar: 0
  }

  setProgressBar = (progressBar) => {
    this.setState({ progressBar: progressBar })
  }

  // url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=8488cba818a44e7c81c45cac2b4a9834";
  // url = "https://newsapi.org/v2/top-headlines?apiKey=8488cba818a44e7c81c45cac2b4a9834";
  url = "https://newsapi.org/v2/top-headlines?apiKey=3e644e5b63fb4ffda47ec1ff09cffb90";
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progressBar}

        />
        <Routes>
          {/* <Route exact path="/about" element={<About mode={mode}/>} /> */}

          {/* pass a unique 'key' paramenter to tell the <News setProgressBar={this.setProgressBar} > to remount/rerender the component when every you hit this urls (here click categories in navbar link)  */}
          <Route exact path="/" element={<News setProgressBar={this.setProgressBar} key="general" pageSize={this.pageSize} url={this.url} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgressBar={this.setProgressBar} key="business" pageSize={this.pageSize} url={this.url} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgressBar={this.setProgressBar} key="entertainment" pageSize={this.pageSize} url={this.url} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgressBar={this.setProgressBar} key="general" pageSize={this.pageSize} url={this.url} country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgressBar={this.setProgressBar} key="health" pageSize={this.pageSize} url={this.url} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgressBar={this.setProgressBar} key="science" pageSize={this.pageSize} url={this.url} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgressBar={this.setProgressBar} key="sports" pageSize={this.pageSize} url={this.url} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgressBar={this.setProgressBar} key="technology" pageSize={this.pageSize} url={this.url} country="in" category="technology " />} />

          {/* <News setProgressBar={this.setProgressBar}  pageSize={this.pageSize} url={this.url} country="in" category="sports" /> */}
        </Routes>
      </div>

    )
  }
}
