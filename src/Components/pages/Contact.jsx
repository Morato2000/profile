import React from "react";
import Heading from "../common/Heading";
import { contact } from "../data/data";
import { AddLocationAltOutlined, PhoneIphone, EmailOutlined } from "@mui/icons-material";
function Contact(){
    const IconMap = {
        AddLocationAltOutlined: <AddLocationAltOutlined />,
        PhoneIphone: <PhoneIphone />,
        EmailOutlined: <EmailOutlined />,
    };

    return(<>
            <section className="contact">
            <div className="container">
                <Heading title='Contact Me' />
                <div className="content flexsb">
                    <div className="right">
                        <form>
                            <div className="flex">
                            <input type="text" placeholder="Name" data-aos='zoom-in-down' />
                            <input type="email" placeholder="Email" data-aos='zoom-in-up' />
                        </div>
                        <input type="text" placeholder="Subject" data-aos='zoom-in-up'/>
                        <textarea data-aos='zoom-in-down' name="" id="" cols='30' rows="10" />
                        <button data-aos='zoom-in-down'>Submit</button>
                        </form>
                    </div>
                    <div className="left">
                        {contact.map((context, i) => (
                            <div className="box" key={i} data-aos='zoom-in-down'>
                                <i>{IconMap[context.icon]}</i>
                                <p>{context.text1}</p>
                                <p>{context.text2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </section>
    
    </>);
}
export default Contact;