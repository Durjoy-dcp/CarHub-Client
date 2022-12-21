import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";
import SwiperSingleCard from './SwiperSingleCard/SwiperSingleCard';

const SwiperTab = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch("/feedback.json")
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])

    // console.log(feedbacks);
    return (

        <div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                className="mySwiper container mx-auto "
            >
                {

                    feedbacks.map((feedback, idx) => <SwiperSlide key={idx}>  <SwiperSingleCard feedback={feedback}></SwiperSingleCard> </SwiperSlide>)
                }


            </Swiper>
        </div >
    );
};

export default SwiperTab;