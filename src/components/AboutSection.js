import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p><span className="greeting">Hello, and welcome to my portfolio! 😀</span></p>
                    <p>I'm <span className="name red">Suryansh Srivastava</span>, a <span className="highlight cybersecurity">Cybersecurity</span> and <span className="highlight ai-ml">AI/ML enthusiast</span> with a passion for protecting and enhancing online security. My mission is to create a safer internet environment, where people can feel secure and protected as they explore the digital world.</p>
                    <p>My personal goal is to fuse <span className="highlight ml">Machine Learning</span> with <span className="highlight cybersecurity">Cybersecurity</span>—harnessing the power of <span className="highlight ai">Artificial Intelligence</span> to improve security solutions and make the internet even safer. Through innovative approaches and dedication, I aim to make a positive impact on the world of digital security.</p>
                    <p className="closing">Thank you for visiting my site, and I hope you enjoy exploring my work! 😊</p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
