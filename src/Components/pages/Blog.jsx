import React from "react";
import Heading from "../common/Heading";
import { blog } from "../data/data";

function Blog(){

    return(
        <>
        <section className="blog">
        <div className="container">
            <Heading title='Blog'/>
            <div className="content grid3">
            {blog.map((context) => {
                           return( <div className="box" key={context.id} data-aos='flip-left'>
                                <div className="img"data-aos='flip-up'> 
                                    <img src={context.cover} alt="img"data-aos='flip-down' />
                                </div>
                                <div className="text">
                                    <h3 data-aos='flip-right'>{context.title}</h3>
                                    <label data-aos='flip-left'>
                                     By   {context.author} {context.date}
                                    </label>
                                    <h3 data-aos='fade-up-right'>{context.desc}</h3>
                                </div>
                            </div>
                           );
                        })}
        </div>
        </div>
        </section>
        </>

    );


}
export default Blog;    