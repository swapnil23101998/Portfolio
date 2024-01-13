import React from 'react';
import {motion} from 'framer-motion';
import { projectExperience, WhatDoIHelp } from '../../utils/data';
import { staggerContainer, fadeIn, textVariant } from '../../utils/motion';
import css from './experties.module.scss';


const experties = () => {
  return (
    <motion.section 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{ once:false, amount: 0.25 }}
    className={`${css.wrapper}`}
    id="experties">
        <div className={`paddings yPaddings innerWidth flexCenter ${css.container}`} >
            <div className={css.leftSide}>
                {
                    projectExperience.map((exp, i) => {
                        return(
                            <motion.div 
                            variants={fadeIn('right', 'tween', (i*4)/10, 1)}
                            className={css.exp} key={i}>
                                <div className='flexCenter' style={{background: exp.bg}}>
                                    <exp.icon size={25} color="white" />
                                </div>
                                <div>
                                    <span>{exp.name}</span>
                                    <span className="secondaryText">{exp.projects}</span>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        
            <motion.div 
            variants={textVariant(0.6)}
            className={css.rightSide}>
                <div><span className={css.secondaryTextHeader}>Crafting Digital Experiences:  </span><span className='secondaryText' key={1}>{WhatDoIHelp[0]}</span></div>
                <div><span className={css.secondaryTextHeader}>Innovation in Every Line of Code:  </span><span className='secondaryText' key={2}>{WhatDoIHelp[1]}</span></div>
                <div><span className={css.secondaryTextHeader}>Constant Learner, Forever Explorer:  </span><span className='secondaryText' key={3}>{WhatDoIHelp[2]}</span></div>
            </motion.div>
        </div>
    </motion.section>
  )
}

export default experties