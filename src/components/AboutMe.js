import React from "react";
import imageMe from '../images/me.jpg';

const AboutMe = (props) => {
    return (
        <div>
            <article className="center">
                <h2 className="main-title">Acerca de mi</h2>
                <figure>
                    <img src={imageMe} className="round-img" alt=""/>
                    <h4>Santiago Marmolejo</h4>
                    <p>Ing.Multimedia</p>
                </figure>
            </article>
        </div>
    );
}

export default AboutMe;