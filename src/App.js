
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App = () => {

  const [progressBar, setProgressBar] = useState(0)
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_API_KEY;
  
  // state = {
  //   progressBar: 0,

  // }

  // setProgressBar = (progressBar) => {
  //   setProgressBar({ progressBar: progressBar })
  // }

  // url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=8488cba818a44e7c81c45cac2b4a9834";
  // url = "https://newsapi.org/v2/top-headlines?apiKey=8488cba818a44e7c81c45cac2b4a9834";
  const url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`;
 
    return (
      <div>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progressBar}

        />
        <Routes>
          {/* <Route exact path="/about" element={<About mode={mode}/>} /> */}

          {/* pass a unique 'key' paramenter to tell the <News setProgressBar={setProgressBar} > to remount/rerender the component when every you hit this urls (here click categories in navbar link)  */}
          <Route exact path="/" element={<News setProgressBar={setProgressBar} key="general" pageSize={pageSize} url={url} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgressBar={setProgressBar} key="business" pageSize={pageSize} url={url} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgressBar={setProgressBar} key="entertainment" pageSize={pageSize} url={url} country="in" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgressBar={setProgressBar} key="general" pageSize={pageSize} url={url} country="in" category="general" />} />
          <Route exact path="/health" element={<News setProgressBar={setProgressBar} key="health" pageSize={pageSize} url={url} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgressBar={setProgressBar} key="science" pageSize={pageSize} url={url} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgressBar={setProgressBar} key="sports" pageSize={pageSize} url={url} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgressBar={setProgressBar} key="technology" pageSize={pageSize} url={url} country="in" category="technology " />} />

          {/* <News setProgressBar={setProgressBar}  pageSize={pageSize} url={url} country="in" category="sports" /> */}
        </Routes>
      </div>

    )
  }

  export default App