import React from 'react';
import Lottie from 'lottie-react';
import catpad from 'assets/lotties/cat-pad.json'

const Publications = () => {
    return (
      <section id="publications" className="section-3">
        <h2 className="heading">Publications</h2>
        <div className="list">
                <div className="item">
                    <Lottie className="icon-2" animationData={catpad} loop={true} autoplay={true} />
                    <div className="div-block-3">
                        <div className="text-block-5">学習済みBERTクラス分類器からのクラス間相関構造の抽出</div>
                        <div className="text-block-8">高橋良允（山形大学），安田宗樹（山形大学）</div>
                        <div className="text-block-9">February, 2023 IPSJ-TOHOKU</div>
                    </div>
                </div>
            </div>
      </section>
    );
};

export default Publications;