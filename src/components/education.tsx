import React from 'react';
import Lottie from 'lottie-react';
import catpad from 'assets/lotties/cat-pad.json'

const educationItems = [
    {
      id: 1,
      degree: "Master of Information Science, (Apr. 2023 - Mar. 2025(expected))",
      school: "Tohoku University",
    },
    {
      id: 2,
      degree: "Bachelor of Engineering, (Apr. 2019 - Mar. 2023)",
      school: "Yamagata University",
    },
  ];

const EducationItem = ({ degree, school }: { degree:string; school:string }) => (
  <div className="item">
    <Lottie className="icon-2" animationData={catpad} loop={true} autoplay={true} />
    <div className="div-block-3">
      <div className="text-block-5">{degree}</div>
      <div className="text-block-7">{school}</div>
    </div>
  </div>
);

const Education = () => {
    return (
      <section id="education" className="section-2">
        <h2 className="heading">Education</h2>
        <div className="list">
          {educationItems.map((item) => (
            <EducationItem key={item.id} degree={item.degree} school={item.school} />
          ))}
        </div>
      </section>
    );
};

export default Education;