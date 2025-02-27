import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import img1 from '../../assets/images/RS1.jpg'
import img2 from '../../assets/images/RS2.jpg'
import img3 from '../../assets/images/RS3.jpg'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    description: 'Vestibulum enim orci, mollis eu aliquet fermentum, feugiat quis magna. Phasellus non fdf dghs gsg dgsgdys  ullamcorper ipsum. Donec a neque sodales, porttitor arcu eu, venenatis turpiam.',
    img: img1,
    title1: 'Shine With Elegance',
    title2: " - Kimberly Joe ",
    city: "New York"
  },
  {
    description: 'Nunc in arcu et nunc scelerisque dignissim. Aliquam enim nunc, volutpat eget ipsum id, varius sodales mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
    img: img2,
    title1: 'Timeless Beauty Awaits',
    title2: " - Stephanie Laura ",
    city: "California"
  },
  {
    description: 'Integer eget semper mi. Aliquam scelerisque sit amet mauris sit amet posuere. Nulla facilisis semper mi sed ullamcorper. Etiam ut urna sit amet enim interdum tristique. Etiam eu malesuada.',
    img: img3,
    title1: 'Unveil Your Sparkle',
    title2: " - Kathleen White ",
    city: "Lundon"
  },
  {
    description: 'Nunc in arcu et nunc scelerisque dignissim. Aliquam enim nunc, volutpat eget ipsum id, varius sodales mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
    img: img2,
    title1: 'Timeless Beauty Awaits',
    title2: " - Stephanie Laura ",
    city: "California"
  }
];
function ReviewSlider() {
  return (
    <>
      <Box sx={{ textAlign: "center", padding: { md: "100px 50px", xs: "47px 20px" }, backgroundColor: "#fff" }}>
        <Box sx={{ padding: { md: "0 0 60px", xs: "0 0 20px" } }}>
          <Typography className='Marcellus' style={{ fontWeight: "400", fontSize: { md: "16px", xs: "14px" }, letterSpacing: "3px", margin: "0 0 5px" }}>TESTIMONIAL</Typography>
          <Typography className='Marcellus' sx={{ fontSize: { md: "39px", xs: "25px" }, fontWeight: { md: "600", xs: "600" }, letterSpacing: "3px" }}>Joyful Moments, Told</Typography>
        </Box>
        <Swiper slidesPerView={3} loop={true} spaceBetween={30} autoplay={{ delay: 2000, disableOnInteraction: false }} speed={2000} pagination={false}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            }
          }}>
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index} >
                <Box sx={{ textAlign: "start", backgroundColor: "#F5E7D6", padding: { sm: '40px', xs: "10px" }, borderRadius: { sm: '60px', xs: "none" } }}>
                  <Rating name="size-small" defaultValue={3} size="small" style={{ margin: "0 0 20px", }} />
                  <Typography className='Marcellus' style={{ fontSize: "18px", margin: "0 0 10px 0" }}>{item.description}</Typography>
                  <Box sx={{ textAlign: "end" }}>
                    <FormatQuoteIcon sx={{ color: "#CCC5C5", transition: 'opacity 0.2s ease, transform 0.2s ease', fontSize: "150px", width: "90px", height: "90px", "#mainbox:hover &": { transform: "translateY(-30px)" } }} />
                  </Box>
                  <Box sx={{ border: "1px solid #CCC5C5", height: "1px", width: "100%", position: "absolute", top: { sm: "83%", xs: "87%" }, left: "0%" }}></Box>
                  <Box sx={{ margin: "5px 0 0 0", display: "flex" }}>
                    <Avatar src={item.img} style={{ height: "75px", width: "75px", margin: { md: "0 10px", xs: "0 5px" } }} />
                    <Box>
                      <Typography className='Marcellus' sx={{ margin: { md: "8px 5px", xs: "5px 0 0 4px" }, fontSize: "20px", cursor: "pointer" }}>{item.title1}</Typography>
                      <span className='Marcellus' style={{ fontSize: { md: "16px", xs: "14px" }, margin: "10px 10px 0 0" }}>{item.title2}</span>
                      <span className='Marcellus' style={{ opacity: "0.7", fontSize: { md: "16px", xs: "4px" }, margin: { md: "5px 5px 0 0", xs: "5px 0px 0 0" } }}>{item.city}</span>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>
    </>
  )
}
export default ReviewSlider

