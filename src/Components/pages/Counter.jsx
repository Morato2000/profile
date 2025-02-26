import React from "react";
import { project } from "../data/data";
import { CloudOutlined, FavoriteBorder, Public, PersonOutlined } from "@mui/icons-material";
import CountUp from "react-countup";

const iconMap = {

"CloudOutlined": <CloudOutlined />,
"FavoriteBorder": <FavoriteBorder />,
"Public": <Public />,
 "PersonOutlined": <PersonOutlined />,
}

function Counter() { 
    

    return (
        <>
         <div className="hero counter">
            <div className="container grid3 grid4">
                {project.map((context, i) => (
                    <div key={i}>
                        <div className="box">
                          <i>{iconMap[context.icon]}</i>
                          <h1 className='heading' data-aos='zoom-in'>
                            <CountUp enableScrollSpy duration={2} end = {context.num} suffix={context.suffix}/></h1>
                          <h3>{context.title}</h3>
                            </div>
                        </div>
                    
                ))}
                </div>
            </div> 
        </>
    );
    
}
export default Counter;