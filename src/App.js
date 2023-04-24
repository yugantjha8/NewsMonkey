import './App.css';
import React, { Component, useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={4}
          progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey} setProgress={setProgress} pageSize={14} key="general" category="general" country="in" />}></Route>
          <Route exact path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} pageSize={14} category="sports" key="sports" country="in" />}></Route>
          <Route exact path='/science' element={<News apiKey={apiKey} setProgress={setProgress} pageSize={14} category="science" key="science" country="in" />}></Route>
          <Route exact path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} pageSize={14} category="entertainment" key="entertainment" country="in" />}></Route>
          <Route exact path='/health' element={<News apiKey={apiKey} setProgress={setProgress} pageSize={14} key="health" category="health" country="in" />}></Route>
          <Route exact path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} pageSize={14} key="technology" category="technology" country="in" />}></Route>
          <Route exact path='/business' element={<News apiKey={apiKey} setProgress={setProgress} pageSize={14} key="business" category="business" country="in" />}></Route>
        </Routes>
      </div>

    </Router>
  )

}

export default App;