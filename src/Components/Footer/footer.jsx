import React from "react";
import {motion} from 'framer-motion';
import { fadeIn, staggerContainer } from "../../utils/motion";
import {AiFillInstagram, AiFillLinkedin, AiFillGithub, AiOutlineMail} from "react-icons/ai";
import Typewriter from 'typewriter-effect';
import css from './footer.module.scss';
import { useState } from "react";
import axios from "axios";

const Footer = () => {
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            Email: email,
            MobileNumber: number
        };

        axios.post('https://sheet.best/api/sheets/520f0644-b07c-44b6-9837-6b33d6a0660a', data).then((resp) => {
            setEmail('');
            setNumber('');
        }).catch((err) => {
            console.log(err);
        });

    }

    const handleRedirection = (url) => {
        window.open(url);
    }

    return (
        <motion.section 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        id='footer'
        viewport={{ once:false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}>
            <div className={`innerWidth flexCenter ${css.container_upper}`}>
                <div 
                    className={`${css.sideMessage}`}>
                        <Typewriter
                            options={{
                                strings: ['Hope we will meet soon...'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                </div>
                <div className={`${css.container}`}>
                    {/* <div>
                        <form name="submit-to-google-sheet" onSubmit={handleSubmit} className={`${css.contactMe}`}>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} name="Email" type={"email"} placeholder="Enter your email id"></input>
                            <input onChange={(e) => setNumber(e.target.value)} value={number} name="Mobile Number" type={"tel"} pattern="[0-9]{10}" placeholder="Enter your mobile number"></input>
                            <div className={`${css.footerButton}`}>
                                <button type="Submit">Contact&nbsp;&nbsp;Me</button>
                            </div>
                        </form>
                    </div> */}
                    <div className={`${css.iconSection}`}>
                        <a onClick={() => handleRedirection('https://www.instagram.com/that_silly_developer')}><AiFillInstagram color="white" size={40} /></a>
                        <a onClick={() => handleRedirection('https://www.linkedin.com/in/swapnilsahu1023')}><AiFillLinkedin color="white" size={40} /></a>
                        <a onClick={() => handleRedirection('https://github.com/swapnil23101998')}><AiFillGithub color="white" size={40} /></a>
                        <a href="mailto:sahusawapnil@gmail.com"><AiOutlineMail color='white' size={40} /></a>
                    </div>
                </div>
                <div className={`${css.copyright}`}>
                    <p>Copyright @ 2024 | Swapnil Sahu</p>
                </div>
            </div>
        </motion.section>
    )
}

export default Footer;