import React, { Component } from 'react'

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
                      <img class="img-circle img-responsive" src="images/mobify.png" alt='mobify'></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData['timeline'][0].experience} <span> {resumeData['timeline'][0].date}</span></h2>
                        <p>{resumeData['timeline'][0].desc}</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img class="img-circle img-responsive" src="images/sfu.jpg" alt='sfu'></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData['timeline'][1].experience} <span>{resumeData['timeline'][1].date}</span></h2>
                        <p>{resumeData['timeline'][0].desc}</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img class="img-circle img-responsive" src="images/sony.jpg" alt='sony'></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData['timeline'][2].experience} <span>{resumeData['timeline'][2].date}</span></h2>
                        <p>In October of 2016, I graudated from Simon Fraser University earning Bachelor of Science in Software Systems by the Faculty of Applied Sciences, along with a Co-op Certificate of Completion for acquiring 16 months of industry experience.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img class="img-circle img-responsive" src="images/samsung.png" alt='samsung'></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData['timeline'][3].experience} <span>{resumeData['timeline'][3].date}</span></h2>
                        <p>In October of 2016, I graudated from Simon Fraser University earning Bachelor of Science in Software Systems by the Faculty of Applied Sciences, along with a Co-op Certificate of Completion for acquiring 16 months of industry experience.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img class="img-circle img-responsive" src="images/gossamer-threads.jpg" alt='sfu'></img>
                      </div>
                      <div className="timeline-label">
                        <h2>{resumeData['timeline'][4].experience} <span>{resumeData['timeline'][4].date}</span></h2>
                        <p>In October of 2016, I graudated from Simon Fraser University earning Bachelor of Science in Software Systems by the Faculty of Applied Sciences, along with a Co-op Certificate of Completion for acquiring 16 months of industry experience.</p>
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
