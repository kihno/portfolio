import React from "react";
import webdev from '../images/webdev.jpg';
import Icon from '@mdi/react'
import { mdiPhone, mdiEmail } from '@mdi/js';

const Footer = () => {

    return(
        <div id="footer">
            <div className="contact">
                <h2>Contact Me</h2>
                <p>Please get in touch if you think our work could be mutually beneficial!</p>
                <p>Los Angeles, CA</p>
                <p className="flex phone"><Icon className="custom-icon" path={mdiPhone} size={1} />818-268-2242</p>
                <p className="flex email"><Icon className="custom-icon" path={mdiEmail} size={1} />nmiles13@@gmail.com</p>
                <div className="iconContainer">
                    <a href="https://github.com/kihno"><i className="devicon-github-original"></i></a>
                    <a href="https://linkedin.com/in/nicholas-miles-93328227/"><i className="devicon-linkedin-plain"></i></a>
                </div> 
            </div>
            <img className="footerImage" src={webdev} alt=""></img>
        </div>
    )
}

export default Footer;