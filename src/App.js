import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Hero from './components/hero'
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
          <Skills resumeData={resumeData}></Skills>
					<About resumeData={resumeData}></About>
          <Education resumeData={resumeData}></Education>
          <Timeline resumeData={resumeData}></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
