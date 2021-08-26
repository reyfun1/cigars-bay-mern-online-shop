import React, { useEffect } from 'react'
import { HomeCarousel} from '../components/Carousel'
import ProductsShowCase from '../components/ProductsShowCase'
import AboutComponent from '../components/AboutComponent'
import PolicyShowcase from '../components/PolicyShowcase'

const Home = () => {
    return (
        <div>
            <HomeCarousel carouselName="home-page-freatured"/>
            <ProductsShowCase/>
            <PolicyShowcase/>
            <AboutComponent/>
        </div>
    )
}

export default Home
