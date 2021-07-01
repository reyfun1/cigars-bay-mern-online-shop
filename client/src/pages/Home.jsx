import React from 'react'
import Carousel from '../components/Carousel'
import Freatured from '../components/Freatured'
import AboutComponent from '../components/AboutComponent'
import PolicyShowcase from '../components/PolicyShowcase'

const Home = () => {
    return (
        <>
        <Carousel carouselName="home-page-freatured"/>
        <Freatured/>
        <PolicyShowcase/>
        <AboutComponent/>
        </>
    )
}

export default Home
