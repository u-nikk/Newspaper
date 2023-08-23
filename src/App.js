import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  
} from "react-router-dom";

export default class App extends Component {
 
 render() {
  return (
    <div>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<News key="general" pageSize={this.totalResults} country="in" category="general" />} />
      <Route path="/business" element={<News key="business" pageSize={15} country="in" category="business" />} />
      <Route path="/entertainment" element={<News key="entertainment" pageSize={15} country="in" category="entertainment" />} />
      {/*<Route path="/general" element={<News key="general" pageSize={5} country="in" category="general" />} />*/}
      <Route path="/health" element={<News key="health" pageSize={15} country="in" category="health" />} />
      <Route path="/science" element={<News key="science" pageSize={15} country="in" category="science" />} />
      <Route path="/sports" element={<News key="sports" pageSize={15} country="in" category="sports" />} />
      <Route path="/technology" element={<News key="technology" pageSize={15} country="in" category="technology" />} />
    </Routes>
  </Router>
    </div>
  )
}
 
}




