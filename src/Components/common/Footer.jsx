import React from "react";
import { social } from "../data/data";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

function Footer(){

    const IconMap = {
        Facebook: <Facebook />,
        Twitter: <Twitter />,
        Instagram: <Instagram />,
        YouTube: <YouTube />,
    };

    const year = new Date().getFullYear();

    return(<>
    <footer>
        {social.map((context, i) => (
            <>
                <i data-aos='zoom-in-left'>{IconMap[context.icon]}</i>
            </>
        ))}
        <p data-aos='zoom-in-right'>All Rights Reserved © {year} </p>
    </footer>
    </>);
}
export default Footer;