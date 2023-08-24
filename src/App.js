import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
   
    state = {
      progress : 10
    }
    setProgress = (progress)=>{
      this.setState({progress:progress})
    }
 render() {
  return (
    <div>
    <Router>
    <Navbar />
    <LoadingBar
        color='#f11946'
        progress={this.state.progress}

      />
    <Routes>
      <Route path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" />} />
      <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" />} />
      <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
      {/*<Route path="/general" element={<News key="general" pageSize={5} country="in" category="general" />} />*/}
      <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" />} />
      <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" />} />
      <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
      <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
    </Routes>
  </Router>
    </div>
  )
}
 
}




