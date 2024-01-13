import React, { useState, useEffect } from 'react';
import css from './header.module.scss';
import {BiMenu, BiMenuAltRight, BiPhoneCall} from 'react-icons/bi';
import {motion} from 'framer-motion';
import { headerVariants, getMenuStyles } from '../../utils/motion';
import useHeaderShadow from '../../hooks/useHeaderShadow';

const Header = () => {
    
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaWidth = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaWidth.matches);
    }, [])

    const menuOpenHandeler = () => {
        setMenuOpened(!menuOpened);
    }

    return (
        <motion.div 
        initial="hidden"
        whileInView="show"
        variants={headerVariants}
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}
        style={{boxShadow: headerShadow}}>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={`${css.name}`}>
                    Swapnil
                </div>

                <ul 
                style={getMenuStyles(menuOpened)}
                className={`flexCenter ${css.menu}`}>
                    <li onClick={() => setMenuOpened(false)}><a href="#experties">Skills</a></li>
                    <li onClick={() => setMenuOpened(false)}><a href="#works">Experience</a></li>
                    <li onClick={() => setMenuOpened(false)}><a href="#travel">Travel Section</a></li>
                    <li onClick={() => setMenuOpened(false)}><a href="#footer">Contact</a></li>
                    <li className={`flexCenter ${css.phone}`} onClick={() => setMenuOpened(false)}>
                        <a href="tel:9754380937"><p>9754380937</p></a>
                        <span><BiPhoneCall size={"40px"} /></span>
                    </li>
                </ul>
                {/*For medium and small screen*/}
                <div 
                className={`${css.menuIcon}`} 
                onClick={menuOpenHandeler}>
                    <BiMenuAltRight size={30} color="#ffffff" />
                </div>
            </div>
        </motion.div>
    )
}

export default Header;