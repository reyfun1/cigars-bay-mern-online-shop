import React from 'react'
import Carousel from '../components/Carousel'
import Freatured from '../components/Freatured'
import AboutComponent from '../components/AboutComponent'
import PolicyShowcase from '../components/PolicyShowcase'
import SocialMediaFreatured from '../components/SocialMediaFreatured'

const Home = () => {
    return (
        <>
        <Carousel/>
        <Freatured/>
        <PolicyShowcase/>
        <AboutComponent/>
        </>
    )
}

export default Home
