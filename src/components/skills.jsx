import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let rows = []
    let skillsList = resumeData["skills"]
    for (let i=0; i<Object.keys(skillsList).length; i++) {
        rows.push(<div key={resumeData["skills"][i]} class="col-md-3 animate-box" data-animate-effect="fadeInLeft">
            <h3>{resumeData["skills"][i]}</h3>
        </div>)
    }
    return (
      <div>
			<section class="colorlib-skills" data-section="skills">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">My Specialty</span>
							<h2 class="colorlib-heading animate-box">Technical Skills</h2>
						</div>
					</div>
					<div class="row">
            <div class="progress-wrap"> 
                {rows}
            </div>
          </div>
				</div>
			</section>
      </div>
    )
  }
}
