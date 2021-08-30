import React, { useEffect } from 'react'
import { HomeCarousel} from '../components/Carousel'
import ProductsShowCase from '../components/ProductsShowCase'
import AboutComponent from '../components/AboutComponent'
import PolicyShowcase from '../components/PolicyShowcase'

const Home = () => {
    return (
        <div>
            <HomeCarousel carouselName="home-page-freatured"/>
            <div className="my-5"><ProductsShowCase/></div>
            <div className="my-5"><PolicyShowcase/></div>
            <div className="my-5"><AboutComponent/></div>
        </div>
    )
}

export default Home
