import React from 'react'
import { about } from '../data/data'
import Heading from '../common/Heading';

function About() {
    return (
      <>
        <section className="about">
          <div className="container flex">
            {about.map((context, i) => (
              <div className="flex" key={i}>
                <div className="left">
                  <img src={context.cover} alt="img" data-aos='fade-down-right' />
                </div>
                <div className="right"data-aos='fade-down-left'>
                  <Heading title="About Me" />
                  <p>{context.desc}</p>
                  <p>{context.desc1}</p>
                  <button>Download CV</button>
                  <button className="primaryBtn">Download CV</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }

export default About;
