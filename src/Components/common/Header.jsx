import React, {useState} from "react";
import { Link } from "react-router-dom";

import { navlink } from "../data/data.js";
import logo from "../data/images/logo.png";
import '../style/style.css';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
console.log(navlink);

    const[responsive, setResponsive] = useState(false);

    return (
        <>
        <header>
            <div className="container flexsb">
                <div className="logo">
                    <img src={logo} alt="logo" data-aos="flip-left" data-aos-duration="2000"/>

                </div>
            
                <div className={responsive ? "hideMenu" : "nav"}>
                    {navlink.map((links, index) => {
                        return (
                            <Link to={links.url} key={index} data-aos="fade-left" data-aos-duration="3000">{links.text}</Link>

                        );
                    })}
                    </div>
                    <button className="toggle" onClick={() => setResponsive(!responsive)}>
                        <MenuIcon className="icon" />
                    </button>
            </div>
        </header>
        
</>
    )
}

export default Header;