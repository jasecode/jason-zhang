import React, { Component } from 'react'
import mobifyImg from "../images/mobify.png"
import sonyImg from  "../images/sony.jpg"
import sfuImg from  "../images/sfu.jpg"
import samsungImg from  "../images/samsung.png"
import gsImg from  "../images/gossamer-threads.jpg"
import galvImg from  "../images/galvanize.png"


export default class Timeline extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
        <section className="colorlib-experience" data-section="experience">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                      <img class="img-circle img-responsive" src={galvImg} alt={resumeData['timeline'][0].alt}></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData['timeline'][0].experience} <span> {resumeData['timeline'][0].date}</span></h2>
                        <p>{resumeData['timeline'][0].desc}</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                      <img class="img-circle img-responsive" src={mobifyImg} alt={resumeData['timeline'][1].alt}></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData['timeline'][1].experience} <span> {resumeData['timeline'][1].date}</span></h2>
                        <p>{resumeData['timeline'][1].desc}</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img class="img-circle img-responsive" src={sonyImg} alt={resumeData['timeline'][2].alt}></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData['timeline'][2].experience} <span>{resumeData['timeline'][2].date}</span></h2>
                            {resumeData['timeline'][2].desc[0]}
                            {resumeData['timeline'][2].desc[1]}
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img class="img-circle img-responsive" src={sfuImg} alt={resumeData['timeline'][3].alt}></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData['timeline'][3].experience} <span>{resumeData['timeline'][3].date}</span></h2>
                        <p>{resumeData['timeline'][3].desc}</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img class="img-circle img-responsive" src={samsungImg} alt={resumeData['timeline'][4].alt}></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData['timeline'][4].experience} <span>{resumeData['timeline'][4].date}</span></h2>
                        <p>{resumeData['timeline'][4].desc}</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img class="img-circle img-responsive" src={gsImg} alt={resumeData['timeline'][5].alt}></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData['timeline'][5].experience} <span>{resumeData['timeline'][5].date}</span></h2>
                        <p>{resumeData['timeline'][5].desc}</p>
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
