import React from "react";
import webdev from '../images/webdev.jpg';

const Footer = () => {

    return(
        <div id="footer">
            <div className="contact">
                <h2>Contact Me</h2>
                <p>Please get in touch if you think our work could be mutually beneficial!</p>
                <p>Los Angeles, CA</p>
                <p>818-268-2242</p>
                <p>nmiles13@@gmail.com</p>
                <div className="iconContainer">
                <a href="https://github.com/kihno"><i class="devicon-github-original"></i></a>
                    <a href="https://linkedin.com/in/nicholas-miles-93328227/"><i class="devicon-linkedin-plain"></i></a>
                </div> 
            </div>
            <img className="footerImage" src={webdev} alt=""></img>
        </div>
    )
}

export default Footer;