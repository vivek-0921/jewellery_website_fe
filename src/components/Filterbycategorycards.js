import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import img1 from '../assets/images/newcollection/product-7-1.jpg'
import img11 from '../assets/images/newcollection/product-7-2.jpg'
import img2 from '../assets/images/newcollection/product-8-1.jpg'
import img22 from '../assets/images/newcollection/product-8-2.jpg'
import img3 from '../assets/images/newcollection/product-9-1.jpg'
import img33 from '../assets/images/newcollection/product-9-2.jpg'
import img4 from '../assets/images/newcollection/product-10-1.jpg'
import img44 from '../assets/images/newcollection/product-10-2.jpg'
import img5 from '../assets/images/newcollection/product-11-2.jpg'
import img55 from '../assets/images/newcollection/product-11-2.jpg'
import img6 from '../assets/images/newcollection/product-12-1.jpg'
import img66 from '../assets/images/newcollection/product-12-2.jpg'
import img7 from '../assets/images/newcollection/product-13-1.jpg'
import img77 from '../assets/images/newcollection/product-13-2.jpg'
import img8 from '../assets/images/newcollection/product-14-1.jpg'
import img88 from '../assets/images/newcollection/product-14-2.jpg'
import img9 from '../assets/images/newcollection/product-15-1.jpg'
import img99 from '../assets/images/newcollection/product-15-2.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom'
function Filterbycategorycards() {
    const filterbycategory = [
        {
            name: "Our Store(24)"
        },
        {
            name: "Anklet(2)"
        },
        {
            name: "Bracelets(5)"
        },
        {
            name: "Brooches(8)"
        },
        {
            name: "Earring(8))"
        },
        {
            name: "Rings(7)"
        },
        {
            name: "Necklaces(5)"
        },
    ]
    const highlight = [
        {
            name: "All Products"
        },
        {
            name: "Best Seller"
        },
        {
            name: "New Arrivals"
        },
        {
            name: "Sale"
        },
        {
            name: "Hot Items"
        },
    ]
    const FilterByCarat = [
        {
            name: "14 KT"
        },
        {
            name: "18 KT"
        },
        {
            name: "22 KT"
        },
        {
            name: "24 KT"
        },
    ]
    const FilterByChoiceOfMetal = [
        {
            name: "Yellow Gold"
        },
        {
            name: "Rose Gold"
        },
        {
            name: "White Gold"
        },
        {
            name: "Silver"
        },
    ]
    const FilterByChoiceOfStone = [
        {
            name: "Aquamarine"
        },
        {
            name: "Diamond"
        },
        {
            name: "Gemstone"
        },
        {
            name: "Ruby"
        },
        {
            name: "Solitaire"
        },
        {
            name: "Zambian Emerald"
        },
    ]
    const FilterByStoneShape = [
        {
            name: "Cushion"
        },
        {
            name: "Emerald"
        },
        {
            name: "Oval"
        },
        {
            name: "Pear"
        },
        {
            name: "Princess"
        },
        {
            name: "Round"
        },
    ]
    const PriceFilter = [
        {
            price: "$0–$130"
        },
        {
            price: "$130–$260"
        },
        {
            price: "$260–$390"
        },
        {
            price: "$390-$520"
        },
        {
            price: "$520–$650"
        },
        {
            price: "$650+"
        },

    ]

    const products = [
        {
            img: img1,
            to: "/singleproduct",
            imgg: img11,
            title: 'Ear Stud , Nose Stud',
            name: 'Pearl Hair Clip',
            price: '32.00$ - 37.00$'

        },
        {
            img: img2,
            to: "/singleproduct",
            imgg: img22,
            title: 'Ear Stud , Nose Stud',
            name: 'Pearl Hair Clip',
            price: '32.00$ - 37.00$'

        },
        {
            img: img3,
            to: "/singleproduct",
            imgg: img33,
            title: 'Ear Stud , Nose Stud',
            name: 'Pearl Hair Clip',
            price: '32.00$ - 37.00$'

        },
        {
            img: img4,
            to: "/singleproduct",
            imgg: img44,
            title: 'Ear Stud , Nose Stud',
            name: 'Pearl Hair Clip',
            price: '32.00$ - 37.00$'

        },
        {
            img: img5,
            to: "/singleproduct",
            imgg: img55,
            title: 'Ear Stud , Nose Stud',
            name: 'Pearl Hair Clip',
            price: '32.00$ - 37.00$'

        },
        {
            img: img6,
            to: "/singleproduct",
            imgg: img66,
            title: 'Ear Stud , Nose Stud',
            name: 'Pearl Hair Clip',
            price: '32.00$ - 37.00$'

        },
        {
            img: img7,
            to: "/singleproduct",
            imgg: img77,
            title: 'Ear Stud , Nose Stud',
            name: 'Pearl Hair Clip',
            price: '32.00$ - 37.00$'

        },
        {
            img: img8,
            to: "/singleproduct",
            imgg: img88,
            title: 'Ear Stud , Nose Stud',
            name: 'Pearl Hair Clip',
            price: '32.00$ - 37.00$'

        },
        {
            img: img9,
            to: "/singleproduct",
            imgg: img99,
            title: 'Ear Stud , Nose Stud',
            name: 'Pearl Hair Clip',
            price: '32.00$ - 37.00$'

        },
    ]
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredImage(index);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };
    return (
        <>
            <Box className='Marcellus' sx={{ padding: '10px 30px' }}>
                <Box>
                    <Grid container>
                        <Grid item lg={2}>

                            {/* filterbycategory */}

                            <Box sx={{ height: "auto", border: '1px solid #E5E5E5', margin: '20px 0 ', padding: '20px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingBottom: '15px', borderBottom: "1px solid #E5E5E5" }}>Filter By Categories</Typography>
                                </Box>
                                <Box sx={{ marginTop: "10px" }}>
                                    {
                                        filterbycategory.map((item, index) => {
                                            return (
                                                <ul >
                                                    <li style={{ padding: '4px 0px' }}><a style={{ color: 'grey', fontSize: '14px', cursor: 'pointer' }}>{item.name}</a></li>
                                                </ul>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>


                            {/* hightlight */}


                            <Box sx={{ height: "auto", border: '1px solid #E5E5E5', margin: '20px 0 ', padding: '20px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingBottom: '15px', borderBottom: "1px solid #E5E5E5" }}>Highlight</Typography>
                                </Box>
                                <Box sx={{ marginTop: "10px" }}>
                                    {
                                        highlight.map((item, index) => {
                                            return (
                                                <ul >
                                                    <li style={{ padding: '4px 0px' }}><a style={{ color: 'grey', fontSize: '14px', cursor: 'pointer' }}>{item.name}</a></li>
                                                </ul>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>

                            {/* Filter By Carat */}


                            <Box sx={{ height: "auto", border: '1px solid #E5E5E5', margin: '20px 0 ', padding: '20px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingBottom: '15px', borderBottom: "1px solid #E5E5E5" }}>Filter By Carat</Typography>
                                </Box>
                                <Box sx={{ marginTop: "10px", display: 'flex', flexWrap: 'wrap' }}>
                                    {
                                        FilterByCarat.map((item, index) => {
                                            return (
                                                <ul >
                                                    <Button variant='contained' sx={{ fontSize: '12px', margin: '5px 5px', backgroundColor: '#E5E5E5', color: 'grey', border: '1px solid #E6E6E6' }}>{item.name}</Button>
                                                </ul>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>

                            {/* FilterByChoiceOfMetal */}

                            <Box sx={{ height: "auto", border: '1px solid #E5E5E5', margin: '20px 0 ', padding: '20px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingBottom: '15px', borderBottom: "1px solid #E5E5E5" }}>Filter By Choice Of Metal</Typography>
                                </Box>
                                <Box sx={{ marginTop: "10px", display: 'flex', flexWrap: 'wrap' }}>
                                    {
                                        FilterByChoiceOfMetal.map((item, index) => {
                                            return (
                                                <ul >
                                                    <Button variant='contained' sx={{ fontSize: '12px', margin: '5px 5px', backgroundColor: '#E5E5E5', color: 'grey', border: '1px solid #E6E6E6' }}>{item.name}</Button>
                                                </ul>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>

                            {/* Filter By Choice Of Stone */}


                            <Box sx={{ height: "auto", border: '1px solid #E5E5E5', margin: '20px 0 ', padding: '20px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingBottom: '15px', borderBottom: "1px solid #E5E5E5" }}> Filter By Choice Of Stone</Typography>
                                </Box>
                                <Box sx={{ marginTop: "10px", display: 'flex', flexWrap: 'wrap' }}>
                                    {
                                        FilterByChoiceOfStone.map((item, index) => {
                                            return (
                                                <ul >
                                                    <Button variant='contained' sx={{ fontSize: '12px', margin: '5px 5px', backgroundColor: '#E5E5E5', color: 'grey', border: '1px solid #E6E6E6' }}>{item.name}</Button>
                                                </ul>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>

                            {/* Filter By Stone Color */}


                            <Box sx={{ height: "auto", border: '1px solid #E5E5E5', margin: '20px 0 ', padding: '20px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingBottom: '15px', borderBottom: "1px solid #E5E5E5" }}> Filter By Stone Color</Typography>
                                </Box>
                                <Box sx={{ marginTop: "10px", display: 'flex', flexWrap: 'wrap' }}>

                                    <Box sx={{ height: '25px', width: '25px', cursor: 'pointer', borderRadius: '50%', backgroundColor: '#124572', margin: '6px' }}></Box>
                                    <Box sx={{ height: '25px', width: '25px', cursor: 'pointer', borderRadius: '50%', backgroundColor: '#5A2D00', margin: '6px' }}></Box>
                                    <Box sx={{ height: '25px', width: '25px', cursor: 'pointer', borderRadius: '50%', backgroundColor: '#145314', margin: '6px' }}></Box>
                                    <Box sx={{ height: '25px', width: '25px', cursor: 'pointer', borderRadius: '50%', backgroundColor: '#5F138E', margin: '6px' }}></Box>
                                    <Box sx={{ height: '25px', width: '25px', cursor: 'pointer', borderRadius: '50%', backgroundColor: '#7E2727', margin: '6px' }}></Box>
                                    <Box sx={{ height: '25px', width: '25px', cursor: 'pointer', borderRadius: '50%', backgroundColor: '#999900', margin: '6px' }}></Box>

                                </Box>
                            </Box>

                            {/* Filter By Stone Shape */}
                            <Box sx={{ height: "auto", border: '1px solid #E5E5E5', margin: '20px 0 ', padding: '20px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingBottom: '15px', borderBottom: "1px solid #E5E5E5" }}> Filter By Stone Shape </Typography>
                                </Box>
                                <Box sx={{ marginTop: "10px", display: 'flex', flexWrap: 'wrap' }}>
                                    {
                                        FilterByStoneShape.map((item, index) => {
                                            return (
                                                <ul >
                                                    <Button variant='contained' sx={{ fontSize: '12px', margin: '5px 5px', backgroundColor: '#E5E5E5', color: 'grey', border: '1px solid #E6E6E6' }}>{item.name}</Button>
                                                </ul>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>

                            {/* Price Filter */}


                            <Box sx={{ height: "auto", border: '1px solid #E5E5E5', margin: '20px 0 ', padding: '20px' }}>
                                <Box>
                                    <Typography sx={{ fontWeight: '600', fontSize: '20px', paddingBottom: '15px', borderBottom: "1px solid #E5E5E5" }}>  Price Filter </Typography>
                                </Box>
                                <Box sx={{ marginTop: "10px" }}>
                                    {
                                        PriceFilter.map((item, index) => {
                                            return (
                                                <ul >
                                                    <Button variant='contained' sx={{ fontSize: '12px', margin: '5px 5px', backgroundColor: '#E5E5E5', color: 'grey', border: '1px solid #E6E6E6' }}>{item.price}</Button>
                                                </ul>
                                            )
                                        })
                                    }
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item lg={10}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                {
                                    products.map((item, index) => {

                                        return (

                                            <Link to={item.to} >
                                                <Box id='mainbox' sx={{ border: "1px solid #E5E5E5", marginTop: '30px', height: { sm: "529px", xs: '450px' }, width: { sm: "293px", xs: '230px' }, margin: { sm: ' 50px 25px ', xs: '30px 60px' }, pb: 20 }}>
                                                    <Box onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} sx={{ backgroundImage: `url(${hoveredImage === index ? item.imgg : item.img})`, height: "100% ", width: 'auto', backgroundSize: "contain", position: 'relative' }}>
                                                        <Box sx={{ height: '30px', width: "60px", backgroundColor: "#AC805D", color: 'white', textAlign: 'center', fontSize: "12px", display: 'flex', justifyContent: 'center', alignItems: "center", position: "absolute", right: '10px', top: "10px", opacity: '1', transform: 'translateY(0px)', visibility: 'visible', transition: 'opacity 0.2s ease, transform 0.2s ease', "#mainbox:hover &": { opacity: '1', transform: 'translateY(10px)', visibility: 'hidden' } }}>Sale</Box>
                                                        <Box sx={{ height: '40px', width: "40px", padding: '3px', backgroundColor: "black", color: 'white', textAlign: 'center', fontSize: "12px", display: 'flex', justifyContent: 'center', alignItems: "center", position: "absolute", right: '19px', top: "10px", opacity: '0', transform: 'translateY(-7px)', visibility: 'hidden', transition: 'opacity 0.2s ease, transform 0.2s ease', '&:hover': { backgroundColor: "#AC805D", color: "#fff", transition: "all 0.1s ease", cursor: "pointer" }, "#mainbox:hover &": { opacity: '1', transform: 'translateY(0px)', visibility: 'visible' } }}><FavoriteBorderIcon sx={{color: 'white'}} /></Box>
                                                        <Box sx={{ height: '40px', width: "92%", backgroundColor: "black", color: 'white', textAlign: 'center', fontSize: "15px", display: 'flex', justifyContent: 'center', alignItems: "center", position: "absolute", left: '10px', bottom: "10px", opacity: '0', transform: 'translateY(-7px)', visibility: 'hidden', transition: 'opacity 0.2s ease, transform 0.2s ease', "#mainbox:hover &": { opacity: '1', transform: 'translateY(0px)', visibility: 'visible' }, "&:hover ": { color: 'white', backgroundColor: "#AC805D" } }}>Select Option</Box>
                                                    </Box>
                                                    <Typography className='Marcellus' sx={{ textAlign: 'center', fontSize: '16px', marginTop: '3px', color: '#B58D6C' }}>{item.title}</Typography>
                                                    <Typography className='Marcellus' sx={{ textAlign: 'center', fontSize: '23px', marginTop: '3px' }}>{item.name}</Typography>
                                                    <Typography className='Marcellus' sx={{ textAlign: 'center', fontSize: '16px', marginTop: '3px' }}>{item.price}</Typography>
                                                </Box>
                                            </Link>

                                        )
                                    })
                                }
                            </Box>
                        </Grid>{}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Filterbycategorycards
