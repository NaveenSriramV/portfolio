import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import {init} from 'emailjs-com';
// import { apikeys } from "./components/api";


class App extends Component {
  componentDidMount(){
    init("user_s4oBEWkQK2bJkIfE3bwNn");
  }
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;