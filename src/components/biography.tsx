import React from 'react';
import icon from 'assets/images/meru_icon.png'
import github from 'assets/images/github_icon.png'
import mail from 'assets/images/mail_icon.png'
import linkedin from 'assets/images/linkedin_icon.png'

const Biography = () => {
    return (
        <section id="biography" className="section-1">
            <div className="div-block-2">
                <h2 className="heading">Biography</h2>
                <p className="paragraph">
                    Ryosuke Takahashi is a first-year master's student at the Graduate School of Information Sciences at Tohoku University.
                    He is affiliated with the <a href="https://www.nlp.ecei.tohoku.ac.jp/" target="_blank" rel="noopener noreferrer" className="link">Tohoku NLP Group</a> and specializes in natural language processing.
                </p>
            </div>
            <div className="div-block">
                <img src={icon} alt="" className="image-2"/>
                <div className="text-block-3">Ryosuke Takahashi</div>
                <div className="text-block-4">Tohoku NLP Group</div>
                <div className="icons">
                    <a href="https://github.com/r-takahashi-h12" target="_blank" className="link-block-3 w-inline-block">
                        <img src={github} loading="lazy" alt="" className="github-icon"/>
                    </a>
                    <a href="mailto:takahashi.ryosuke.r7@dc.tohoku.ac.jp" className="link-block-3 w-inline-block">
                        <img src={mail} loading="lazy" alt="" className="mail-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ryosuke-takahashi-859977280/" target="_blank" className="link-block-3 w-inline-block">
                        <img src={linkedin} loading="lazy" alt="" className="linkedin-icon"/>
                    </a>
                </div>
            </div>         
        </section>
        );
    };

export default Biography;