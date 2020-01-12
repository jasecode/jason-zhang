import React, { Component } from 'react'

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>{resumeData["introduction"][0].whoAmI}</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className='row'>
                <div className="col-md-3 animate-box fadeInLeft animated">
                    <div className="services color-1">
                    <h3>{resumeData["introduction"][0].skills[0]}</h3>
                    </div>
                </div>
                <div className="col-md-3 animate-box fadeInLeft animated">
                    <div className="services color-2">
                    <h3>{resumeData["introduction"][0].skills[1]}</h3>
                    </div>
                </div>
                <div className="col-md-3 animate-box fadeInLeft animated">
                    <div className="services color-3">
                    <h3>{resumeData["introduction"][0].skills[2]}</h3>
                    </div>
                </div>
                <div className="col-md-3 animate-box fadeInLeft animated">
                    <div className="services color-5">
                    <h3>{resumeData["introduction"][0].skills[3]}</h3>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">What I do?</span>
                    <h2 className="colorlib-heading">Here are some of my expertise</h2>
                </div>
            </div>
            <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                        <span className="icon">
                            <i className="icon-bulb" />
                        </span>
                        <div className="desc">
                            <h3>{resumeData["aboutMe"][0].skill}</h3>
                            <p>{resumeData["aboutMe"][0].desc}</p>
                            <i>{resumeData["aboutMe"][0].hash}</i>
                        </div>
                    </div>
                </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-3">
                        <span className="icon">
                            <i className="icon-codepen" />
                        </span>
                    <div className="desc">
                        <h3>{resumeData["aboutMe"][1].skill}</h3>
                        <p>{resumeData["aboutMe"][1].desc}</p>
                        <i>{resumeData["aboutMe"][1].hash}</i>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                    <div className="desc">
                        <h3>{resumeData["aboutMe"][2].skill}</h3>
                        <p>{resumeData["aboutMe"][2].desc}</p>
                        <i>{resumeData["aboutMe"][2].hash}</i>
                    </div>
                </div>
            </div>
        </div>
        <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-monitor" />
                </span>
                <div className="desc">
                        <h3>{resumeData["aboutMe"][3].skill}</h3>
                        <p>{resumeData["aboutMe"][3].desc}</p>
                        <i>{resumeData["aboutMe"][3].hash}</i>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                        <h3>{resumeData["aboutMe"][4].skill}</h3>
                        <p>{resumeData["aboutMe"][4].desc}</p>
                        <i>{resumeData["aboutMe"][4].hash}</i>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-command2" />
                </span>
                <div className="desc">
                        <h3>{resumeData["aboutMe"][5].skill}</h3>
                        <p>{resumeData["aboutMe"][5].desc}</p>
                        <i>{resumeData["aboutMe"][5].hash}</i>
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>
      </div>
    )
  }
}
