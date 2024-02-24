import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
            <ul id="contact" className="home-about-social-links" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
            </ul>
        </Row>
    );
}
export default Contact;