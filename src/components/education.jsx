import React, { Component } from 'react'

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
        <section className="colorlib-education" data-section="educaiton">
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
                        <img class="img-circle img-responsive" src="images/sfu.jpg" alt='sfu'></img>
                      </div>
                      <div className="timeline-label">
                        <h2>Graduation at SFU <span>2011-2016</span></h2>
                        <p>In October of 2016, I graudated from Simon Fraser University earning Bachelor of Science in Software Systems by the Faculty of Applied Sciences, along with a Co-op Certificate of Completion for acquiring 16 months of industry experience.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                      <img class="img-circle img-responsive" src="images/britannia.jpg" alt='britannia'></img>
                      </div>
                      <div className="timeline-label">
                        <h2>Britannia Secondary, IB Diploma <span>2006-2011</span></h2>
                        <p>{resumeData.highschool}</p> 
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
