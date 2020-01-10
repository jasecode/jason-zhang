import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Introduction from './components/introductions'
import About from './components/about'
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
					<Introduction></Introduction>
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
