import React from "react";
import { useState } from "react";
import css from './portfolio.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation } from 'swiper';
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/swiper.min.css';

const Portfolio = () => {

    return (
        <section id="travel" className={`paddings ${css.wrapper}`}>
            <div className={`innerWidth flexCenter ${css.container}`}>
                My Travel Diary
            </div>
            <Swiper
                grabCursor={true}
                pagination={true}
                navigation={true}
                spaceBetween={50}
                slidesPerView={1}
                modules={[EffectFlip, Pagination, Navigation]} effect="flip"
                >
                <SwiperSlide className={css.swiperImage}><img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg" /></SwiperSlide>
                <SwiperSlide className={css.swiperImage}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZN3KJO4gl7l3ZQ2KFx0Z3D1F1pOcJIOyOhIvNm8rc&s" /></SwiperSlide>
                <SwiperSlide className={css.swiperImage}><img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Kedarnath_Temple.jpg" /></SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Portfolio;