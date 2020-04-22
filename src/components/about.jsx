import React from 'react';

function About() {
    return (
        <section id="about" className="pt-5 pb-5 page-section--grey">
            <div className="container">
                <h2 className="text-center">About Me</h2>
                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="about__photo">
                            <img src="images/elvislee-profile.png" alt="Elvis Lee profile picture" />
                        </div>
                        <div>
                            <p>
                                Originally from Taipei, Taiwan, Elvis (Po Yi) Lee is working conscientiously to become a web developer. Yes, I am a fan of Elvis Presley and Rock 'n' Roll, and I do coding as well. 
                                I live in Irvine, California currently, and I'm interested in web technologies and very excited about being a web developer in the United States. 
                                Besides studying coding quesitons and developing my own website for experiment, I am also learning new technologies such as Node.js, Express, React and MongoDB. 
                                I'm looking forward to entering this amazing industry and contributing my skill to create useful apps for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;