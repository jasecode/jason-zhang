import React, { Component } from 'react'

export default class Introduction extends Component {
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
                    <div className="services color-all-1">
                    <h3>{resumeData["introduction"][0].skills[0]}</h3>
                    </div>
                </div>
                <div className="col-md-3 animate-box fadeInLeft animated">
                    <div className="services color-all-2">
                    <h3>{resumeData["introduction"][0].skills[1]}</h3>
                    </div>
                </div>
                <div className="col-md-3 animate-box fadeInLeft animated">
                    <div className="services color-all-3">
                    <h3>{resumeData["introduction"][0].skills[2]}</h3>
                    </div>
                </div>
                <div className="col-md-3 animate-box fadeInLeft animated">
                    <div className="services color-all-4">
                    <h3>{resumeData["introduction"][0].skills[3]}</h3>
                    </div>
                </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
