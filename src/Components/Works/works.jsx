import React from "react";
import css from './works.module.scss';
import {motion} from 'framer-motion';
import { workExp } from "../../utils/data";
import { staggerChildren, textVariant2, zoomIn } from "../../utils/motion";

const Works = () => {
    return (
        <motion.section 
        variants={staggerChildren}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings ${css.wrapper}`}
        id="works">
            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className={`primaryText yPaddings ${css.heading}`}>
                    My Work Experience
                </span>
                    <div className={`flexCenter ${css.experiences}`}>
                        {
                            workExp.map((exp, i) => {
                                return (
                                    <motion.div 
                                    variants={textVariant2}
                                    className={`flexCenter ${css.exp}`} key={i}>
                                        <div className={`${css.post}`}>
                                            <h1>{exp.place}</h1>
                                            <p>{exp.tenure}</p>
                                        </div>
                                        <div className={`${css.role}`}>
                                            <h1>{exp.role}</h1>
                                            <div className={css.mobileDetail}>{exp.detailMobile}</div>
                                            <ul className={css.desktopDetail}>
                                            {
                                                exp.detail.map((d) => {
                                                    return <li className={css.listItem}>{d}</li>
                                                })
                                            }
                                            </ul>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                        <motion.div 
                        variants={zoomIn(1, 1)}
                        className={css.progressbar}>
                            <div><div className={css.circle} style={{ background: "#EABF9F"}}></div></div>
                            <div><div className={css.circle} style={{ background: "#EABF9F"}}></div></div>
                            {/* <div><div className={css.circle} style={{ background: "#EABF9F"}}></div></div> */}
                        </motion.div>
                    </div>
            </div>
        </motion.section>
    )
}

export default Works;