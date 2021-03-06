import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
import Hero from './components/hero'
import Introduction from './components/introduction';
import About from './components/about'
import Skills from './components/skills'
import Sidebar from './components/sidebar'
import Timeline from './components/timeline'
import Education from './components/education'
import resumeData from './resumeData.js'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Hero></Hero>
          <Introduction resumeData={resumeData}></Introduction>
          <Skills resumeData={resumeData}></Skills>
					<About resumeData={resumeData}></About>
          <Timeline resumeData={resumeData}></Timeline>
          <Education resumeData={resumeData}></Education>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
