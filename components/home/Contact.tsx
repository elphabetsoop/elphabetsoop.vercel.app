import React from "react";
import { Row } from "react-bootstrap";
import SectionTitle from "../global/SectionTitle";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillMail,
} from "react-icons/ai";

function Contact() {
    return (
        <Row md={12} className="home-about-social" style={{ marginBottom: '30px' }}>
            <SectionTitle title="contact " />
            <ul id="contact" className="home-about-social-links" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <li className="social-icons" style={{ margin: '0 10px' }}>
                    <a
                        href="https://github.com/elphabetsoop"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        style={{ fontSize: '2em' }}
                    >
                        <AiFillGithub />
                    </a>
                </li>
                <li className="social-icons" style={{ margin: '0 10px' }}>
                    <a
                        href="https://linkedin.com/in/synkit-tan"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        style={{ fontSize: '2em' }}
                    >
                        <AiFillLinkedin />
                    </a>
                </li>
                <li className="social-icons" style={{ margin: '0 10px' }}>
                    <a
                        href="mailto:synkit.tan@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        style={{ fontSize: '2em' }}
                    >
                        <AiFillMail />
                    </a>
                </li>
                    <img
                        className="sqD bottom-[-100px] right-[10px] w-2/6 lg:right-[-50px] lg:w-1/6"
                        src="/static/doodles/contact/smiley.svg"
                    />
            </ul>
            <div className="mt-20">
                © 2024
            </div>
        </Row>
    );
}
export default Contact;