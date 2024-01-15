import React from 'react';
import css from './Hero.module.scss';
import {motion} from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { ParticlesBackground } from '../Particles/particles';
import Resume from '../../assets/RESUME_SWAPNIL.pdf';

const Hero = () => {

    const handleDownload = () => {

    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Resume_SWAPNIL.pdf';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    };
    

  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:true, amount:0.25}}
        className={`innerWidth ${css.container}`}>
        <ParticlesBackground />

            <div className={css.upperElements}>
                <motion.span 
                variants={fadeIn("right", "tween", 0.2, 1)}
                className={`primaryText ${css.primaryT}`}>
                    Hey There, I'm Swapnil
                </motion.span>
                <motion.span
                variants={fadeIn("left", "tween", 0.4, 1)}
                className={`secondaryText ${css.secondaryT}`}>
                    As a dedicated Frontend Developer, I transform digital visions into compelling
                    <br/>
                    realities through meticulous coding and a passion for crafting seamless,
                    <br/> 
                    user-centric web experiences.
                </motion.span>
                {/* <div className={`${css.iconSection}`}>
                    <a href="https://www.instgram.com"><AiFillInstagram color="white" size={40} /></a>
                    <a><AiFillLinkedin color="white" size={40} /></a>
                    <a><AiFillGithub color="white" size={40} /></a>
                    <a href="mailto:sahusawapnil@gmail.com"><AiOutlineMail color='white' size={40} /></a>
                </div> */}
            </div>

            {/* <motion.div 
            variants={fadeIn("up", "tween", 0.6, 1)}
            className={css.person}>
                <motion.img 
                variants={slideIn("up", "tween", 0.8, 1)}
                src='./hero.png' alt="Profile Photo" />
            </motion.div> */}

            {/* <div className={css.lowerElements}>
                <motion.div 
                variants={fadeIn("right", "tween", 0.2, 1)}
                className={css.experience}>
                    <div className="primaryText">10</div>
                    <div className="secondaryText">
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                </motion.div>
                <motion.div 
                variants={fadeIn("left", "tween", 0.4, 1)}
                className={css.certificate}>
                    <img src='./certificate.png' alt="certificate image" />
                    <span>CERTIFIED PROFESSIONAL</span>
                    <span>UI/UX DESIGNER</span>
                </motion.div>
            </div> */}
                <div className={css.email} >
                <motion.button 
                variants={fadeIn("right", "tween", 0.4, 1)}
                onClick={handleDownload}
                >
                    <a>My Resume</a>
                </motion.button>
                </div>
        </motion.div>
    </section>
  )
}

export default Hero