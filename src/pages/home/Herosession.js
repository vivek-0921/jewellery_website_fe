import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../assets/images/Hreosession/main-banner-1.jpg';
import img2 from '../../assets/images/Hreosession/main-banner-2.jpg';
import { Autoplay, Pagination } from 'swiper/modules';
import { Box, Button, Typography } from '@mui/material';

const images = [
    {
        img: img1,
        title: 'RUBANS  925 STERLING',
        heading1: 'Rubans Morden  Minimal',
        heading2: 'Ring Hoop Earrings',
        text: 'Awesome  products for the  dynamic urban lifestyle'

    },
    {
        img: img2,
        title: "THIS WEEK'S HIGHLIGHTS",
        heading1: 'Women In Golden Rings',
        heading2: 'And Necklaces',
        text: 'Awesome  products for the  dynamic urban lifestyle'

    },
];

export default function Herosession() {
    return (
        <>
            <Swiper pagination={false} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Pagination, Autoplay]} className="mySwiper"
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
                            <Button sx={{ backgroundColor: '#CE967E', color: 'white', margin: { md: '5px 70px', xs: ' 0 15px ' }, padding: { md: '10px 20px', xs: '5px 10px' }, borderRadius: '0px' }}>SHOP NOW</Button>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
