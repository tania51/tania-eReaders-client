
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Banner.css'



const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div>
                    <SwiperSlide><img src="https://i.ibb.co/d6xtwNN/30-eastleigh-library-1200x400.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/bsY7Vn8/Free-Book.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/sFQK9QF/gh-book-roundup-self-help-books-1675440173.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/3r4pj3G/Killers-of-the-Flower-Moon-PRH-site-1200x628.jpg" alt="" /></SwiperSlide>
                </div>
            </Swiper>
        </>
    );
};

export default Banner;