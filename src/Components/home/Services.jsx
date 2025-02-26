import React from "react";
import Heading from "../common/Heading";
import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart } from "@mui/icons-material";
import {services} from "../data/data";

const iconMap = {
    "Settings": <Settings />,
    "CropRotate": <CropRotate />,
    "ViewInAr": <ViewInAr />,
    "PieChart": <PieChart />,
    "Code": <Code />,
    "BarChart": <BarChart />,
  };

function Services() {

return (
    <>
    <section className="services">
    <div className="container">
        <Heading title="Services" />
        <div className="content grid3">
        {services.map((context, i) => (
          <div key={i}>
            <div className="box" data-aos='flip-left'>
              <i>{iconMap[context.icon]}</i> 
              <h3>{context.title}</h3>
              <p>{context.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>

    </>
)
}
export default Services;    