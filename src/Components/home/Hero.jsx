import React from "react";
import {home} from "../data/data.js"
import TypewriterEffect from "react-typewriter-effect";


function Hero(){




    return(
      <section className= 'hero'>
        {home.map((context, i) => {
            return(
            <div className="heroContainer" key={i}>
                <h3 data-aos="fade-up">{context.text}</h3>
                <h1>
                <TypewriterEffect
                    textStyle={{ fontSize: "30px", fontWeight: "bold" }} // Optional style
                    startDelay={100} // Optional start delay (ms)
                    cursorColor="gold" // Optional cursor color
                    multiText={[context.name, context.post, context.design, context.name]} // Multiple texts
                    multiTextDelay={2000} // Delay between texts (in ms)
                    deleteSpeed={50} // Speed of deleting text
                    typeSpeed={100}
                />        
                </h1>
                <p data-aos="fade-left">{context.desc}</p>
                <button className="primaryBtn" data-aos="fade-up-right">Download CV</button>
            </div>
            
            );
        })}
        
        </section>
 );
}
export default Hero;