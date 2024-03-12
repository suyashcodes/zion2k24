import React from "react";
import "./footer.css"
const Footer = ()=>{
    return(
        <>
        <div className="footer-wrapper">
            <div className="footerone">
                <h2 className="zionheading">Zion 2024</h2>
                <span className="zioninfo">
                Zion is a highly anticipated annual event that attracts participants from various colleges and universities across India to showcase their technical skills and innovative ideas. The festival provides a platform for students to learn, grow, and network with like-minded individuals in a competitive yet fun environment.
                </span>
            </div>
            <div className="footer2">

            <div className="footertwo">
                <h3 className="zionheading">Quick Links</h3>
                <ul className="quicklinks">
                    <li className="links">Home</li>
                    <li className="links">About</li>
                    <li className="links">Events</li>
                    <li className="links">Team</li>
                </ul>
            </div>
            <div className="footerthree">
                <h3 className="zionheading">Socials</h3>
                <ul className="quicklinks">
                    <li className="links">Instagram</li>
                    <li className="links">Linkedin</li>
                    <li className="links">Mail</li>
                    <li className="links">Whatsapp</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="copyright">
            <span className="text">
                Designed and Developed By Devkraft&copy 2024
            </span>
        </div>
        </>
    );
}

export default Footer;