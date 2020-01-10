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
                        <h2>QA Engineer Lead, Product Release Manager @ Mobify <span> Sept 2016 - Nov 2019</span></h2>
                        <p>I recently have joined the Juniper Networs as a Software Developer-Intern in the DevOps team. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables developers at Juniper to do rapid development. I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img class="img-circle img-responsive" src="images/sfu.jpg" alt='sfu'></img>
                      </div>
                      <div className="timeline-label">
                        <h2>IT Technician @ SFU <span>2016</span></h2>
                        <p>In October of 2016, I graudated from Simon Fraser University earning Bachelor of Science in Software Systems by the Faculty of Applied Sciences, along with a Co-op Certificate of Completion for acquiring 16 months of industry experience.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img class="img-circle img-responsive" src="images/sony.jpg" alt='sony'></img>
                      </div>
                      <div className="timeline-label">
                        <h2>Production Services Technician @ Sony Imageworks <span>2016</span></h2>
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
                        <h2>QA Automation Engineer @ Samsung Electronics<span>2015</span></h2>
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
                        <h2>QA Analyst @ Gossamer Threads <span>2014</span></h2>
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
