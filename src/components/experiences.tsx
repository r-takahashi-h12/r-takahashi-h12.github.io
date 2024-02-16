import React from 'react';
import Lottie from 'lottie-react';
import catpad from 'assets/lotties/cat-pad.json'

const Experiences = () => {
    return (
      <section id="experiences" className="section-4">
        <h2 className="heading">Experiences</h2>
        <div className="list">
                <div className="item">
                    <Lottie className="icon-2" animationData={catpad} loop={true} autoplay={true} />
                    <div className="div-block-3">
                        <div className="text-block-5">Internship in AI Agent Group at Data Science &amp; Analytics Department</div>
                        <div className="text-block-8">Rakuten Group, Inc.</div>
                        <div className="text-block-9">September 1, 2023 - October 31, 2023</div>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default Experiences;