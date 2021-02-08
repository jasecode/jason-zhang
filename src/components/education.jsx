import React, { Component } from 'react'
import sfuImg from "../images/sfu.jpg"
import britImg from  "../images/britannia.jpg"

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
        <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">Education</span>
                    <h2 className="colorlib-heading">Credentials</h2>
                </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img class="img-circle img-responsive" src={sfuImg} alt='sfu'></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData["education"][0].name} <span>{resumeData["education"][0].date}</span></h2>
                        <p>{resumeData["education"][0].desc}</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                      <img class="img-circle img-responsive" src={britImg} alt='britannia'></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData["education"][1].name} <span>{resumeData["education"][1].date}</span></h2>
                        <p>{resumeData["education"][1].desc}</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
