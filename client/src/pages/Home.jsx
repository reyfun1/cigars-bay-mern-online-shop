import React from 'react'
import { HomeCarousel} from '../components/Carousel'
import Freatured from '../components/Freatured'
import AboutComponent from '../components/AboutComponent'
import PolicyShowcase from '../components/PolicyShowcase'

const Home = () => {
    return (
        <div>
            <HomeCarousel carouselName="home-page-freatured"/>
            <Freatured/>
            <PolicyShowcase/>
            <AboutComponent/>
        </div>
    )
}

export default Home
