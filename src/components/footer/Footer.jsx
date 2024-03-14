import React from "react";
import "./footer.css"
const Footer = ()=>{
    return(
        <>
        <div className="footer-wrapper" id="footer">
            <div className="footerone">
                <h2 className="zionheading">Zion 2024</h2>
                <span className="zioninfo">
                Zion is a highly anticipated annual event that attracts participants from various colleges and universities across India to showcase their technical skills and innovative ideas. The festival provides a platform for students to learn, grow, and network with like-minded individuals in a competitive yet fun environment.
                </span>
            </div>
            
            <div className="location">
                <p>Event Location</p>
                <a href="https://www.google.com/maps/place/Dr.+D.+Y.+Patil+Institute+of+Technology/@18.6234809,73.8155219,17.65z/data=!4m6!3m5!1s0x3bc2b860d63876d1:0x9bccd5081468bc36!8m2!3d18.6230833!4d73.8160199!16zL20vMDdxZjdx?entry=ttu" target="_blank"><img src="./assets/eventLocation.png" alt=""/></a>
            </div>

            <div className="footertwo">
                <h3 className="zionheading">Quick Links</h3>
                <ul className="quicklinks">
                    <li className="links">Home</li>
                    <li className="links">About</li>
                    <li className="links">Events</li>
                    <li className="links">Team</li>
                    <li className="links">FAQ</li>
                </ul>
            </div>
            <div className="footerthree">
                <h3 className="zionheading">Socials</h3>
                <ul className="quicklinks">
                    <li className="links">Instagram</li>
                    <li className="links">Linkedin</li>
                    <li className="links">EMail</li>
                    <li className="links">Whatsapp</li>
                    <li className="links">Github</li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <span className="text">
                Designed and Developed By ZION &copy; 2024
            </span>
        </div>
        </>
    );
}

export default Footer;