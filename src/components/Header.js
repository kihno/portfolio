import React from "react";
import headshot from "../images/hs.jpg";

const Header = () => {

    return(
        <div id="header">
            <h1 className="name">Nick Miles</h1>
            <img className="headshot" src={headshot} alt=""></img>
            <div className="aboutContainer">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id dapibus diam. Ut suscipit, elit non bibendum interdum, nisi neque dictum sapien, nec vestibulum magna est ac erat. Nulla convallis ultrices velit eu laoreet. Donec quis pretium arcu, nec vehicula magna. Praesent vitae lectus scelerisque tortor accumsan cursus vitae a nunc. Nullam mi orci, ornare eget sodales non, rutrum sed ipsum. Aenean a nisl vestibulum dui laoreet sodales. Donec ultricies, sapien nec tempor tincidunt, quam neque finibus augue, vitae fermentum nunc lorem ac libero. Curabitur mattis, diam nec gravida venenatis, turpis augue consequat sapien, sed vulputate velit nisl molestie tortor. Praesent accumsan rhoncus nisl, eget aliquam erat ullamcorper eget.</p>
                <div className="iconContainer">
                    <i class="devicon-github-original"></i>
                    <i class="devicon-linkedin-plain"></i>
                </div>         
            </div>
            <div className="techContainer">
                <i class="devicon-html5-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-webpack-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-firebase-plain"></i>
                <i class="devicon-nodejs-plain"></i>
            </div>
            <div className="background"></div>
        </div>
    )
}

export default Header;