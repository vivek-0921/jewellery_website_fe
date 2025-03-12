import React from 'react'
import Herosession from '../home/Herosession'
import Maincollection from '../home/Maincollection'
import RecentCollections from '../home/RecentCollections'
import Video from '../home/Video'
import ReviewSlider from '../home/ReviewSlider'
import ShopByCategory from '../home/ShopByCategoryCard'

function Home() {
    return (
        <>
            <Herosession />
            <Maincollection />
            <RecentCollections />
            <Video />
            <ShopByCategory />
            <ReviewSlider />
        </>
    )
}

export default Home
