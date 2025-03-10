import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../assets/images/Hreosession/main-banner-1.jpg';
import img2 from '../../assets/images/Hreosession/main-banner-2.jpg';
import { Autoplay, Pagination } from 'swiper/modules';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const images = [
    {
        img: img1,
        to: '/filterbycategory',
        title: 'RUBANS  925 STERLING',
        heading1: 'Rubans Morden  Minimal',
        heading2: 'Ring Hoop Earrings',
        text: 'Awesome  products for the  dynamic urban lifestyle'

    },
    {
        img: img2,
        to: '/filterbycategory',
        title: "THIS WEEK'S HIGHLIGHTS",
        heading1: 'Women In Golden Rings',
        heading2: 'And Necklaces',
        text: 'Awesome  products for the  dynamic urban lifestyle'

    },
];

export default function Herosession() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const slides = swiperRef.current.querySelectorAll(".swiper-slide");

            slides.forEach((slide) => {
                gsap.fromTo(
                    slide,
                    { opacity: 0, y: 50 }, // Initial state
                    { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.3 } // Animation
                );
            });
        }
    }, []);
    return (
        <>
            <Swiper pagination={false} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Pagination, Autoplay]} className="mySwiper"
                onSlideChange={() => {
                    gsap.fromTo(
                        ".swiper-slide-active",
                        { opacity: 0, scale: 0.8 },
                        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
                    );
                }}
                ref={swiperRef}
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            sx={{
                                padding: { md: '100px 0 100px 0', sm: '40px 40px 40px 0', xs: '20px 40px 20px 0' }, backgroundImage: `url(${item.img})`, height: 'auto', width: '100%', objectFit: 'cover', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                            }}>
                            <Typography sx={{ fontSize: { sm: '11px', sm: '20px', xs: '11px' }, textAlign: 'left', color: 'white', color: 'black', padding: { md: '5px 70px', xs: ' 0 15px ' }, fontWeight: '500', opacity: '0.9' }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{ fontSize: { sm: '39px', xs: '17px' }, textAlign: 'left', color: 'white', fontWeight: '600', color: 'black', padding: { md: '5px 70px', xs: ' 0 15px ' }, }}>
                                {item.heading1}
                            </Typography>
                            <Typography sx={{ fontSize: { sm: '39px', xs: '17px' }, textAlign: 'left', color: 'white', fontWeight: '600', color: 'black', padding: { md: '5px 70px', xs: ' 0 15px ' }, }}>
                                {item.heading2}
                            </Typography>
                            <Typography sx={{ fontSize: { md: '17px', sm: '20px', xs: '14px' }, textAlign: 'left', color: 'white', color: 'black', padding: { md: '5px 70px 60px 70px', sm: '10px 400px 10px 15px', xs: '10px 50px 10px 15px' }, opacity: '0.7' }}>
                                {item.text}
                            </Typography>
                            <Link to={item.to}>
                                <Button sx={{ backgroundColor: '#CE967E', color: 'white', margin: { md: '5px 70px', xs: ' 0 15px ' }, padding: { md: '10px 20px', xs: '5px 10px' }, borderRadius: '0px' }}>SHOP NOW</Button>
                            </Link>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
