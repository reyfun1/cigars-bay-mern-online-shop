import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

const Carousel = ({ carouselName, images }) => {
    const [imagesArr, setImagesArr] = useState([])

    useEffect(() => { 
        if(images) setImagesArr(images)
    }, [images])
    
    const CarouselStyled = styled.div`
    .carousel-item{
        ${carouselName !== 'home-page-freatured' ? 'height: 390px' :'' }
    }
    img{
        object-fit: cover;
        vertical-align: initial;
        display: block;
        margin: 0 auto;
        width: auto;
        height: auto;
        max-height: 390px;
    }
`

    return (
        <CarouselStyled id={carouselName} className="carousel carousel-dark slide" data-bs-ride="carousel" options={{interval: false}}>
            <div className="carousel-indicators">

                {imagesArr.length > 0 ? imagesArr.map((image, i) => {
                    const isFirstImage = i === 0

                    return (
                        <button key={i} type="button" data-bs-target={`#${carouselName}`} 
                            data-bs-slide-to={i} className={isFirstImage ? "active" : ""} 
                            aria-current={isFirstImage ? "active" : ""} aria-label={i}></button>)
                }) : (
                    <>
                        <button type="button" data-bs-target={`#${carouselName}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target={`#${carouselName}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target={`#${carouselName}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </>
                )}
            </div>
            <div className="carousel-inner w-100">
                {imagesArr.length > 0 ? imagesArr.map((image, i) => {
                    const isFirstImage = i === 0
                    return (
                            <div key={i} className={`carousel-item ${isFirstImage ? "active" : ""}`}>
                                <img src={image} className="img-fluid" alt="..."/>
                            </div>)
                }) : (
                   <>
                        <div className="carousel-item active">
                            <img src={`https://source.unsplash.com/1920x${carouselName == "productImages" ? "1080": "400"}`} className="d-block img-fluid" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={`https://source.unsplash.com/1920x${carouselName == "productImages" ? "1080": "401"}`} className="d-block img-fluid" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={`https://source.unsplash.com/1920x${carouselName == "productImages" ? "1080": "402"}`} className="d-block img-fluid" alt="..."/>
                        </div>
                   </> 
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselName}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${carouselName}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </CarouselStyled>
    )
}

export default Carousel

const HomeCarousel = ({ carouselName, images }) => {
    const [imagesArr, setImagesArr] = useState([])

    useEffect(() => { 
        if(images) setImagesArr(images)
    }, [images])
    
    const CarouselStyled = styled.div`
    .carousel-item{
        ${carouselName !== 'home-page-freatured' ? 'height: 390px' :'' }
    }
    img{
        object-fit: cover;
        vertical-align: initial;
        display: block;
        width: 100%;
        height: auto;
        min-height: 230px;
        max-height: 330px;
    }
`

    return (
        <CarouselStyled id={carouselName} className="carousel carousel-dark slide" data-bs-ride="carousel" options={{interval: false}}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target={`#${carouselName}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target={`#${carouselName}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target={`#${carouselName}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner w-100">
                        {/* <div className="carousel-item active">
                            <img src={`https://source.unsplash.com/1920x${carouselName == "productImages" ? "1080": "330"}`} className="d-block img-fluid" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={`https://source.unsplash.com/1920x${carouselName == "productImages" ? "1080": "331"}`} className="d-block img-fluid" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={`https://source.unsplash.com/1920x${carouselName == "productImages" ? "1080": "332"}`} className="d-block img-fluid" alt="..."/>
                        </div> */}
                        <div className="carousel-item active">
                            <img src={`/uploads/test1.jpg`} className="d-block img-fluid" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={`/uploads/test2.jpg`} className="d-block img-fluid" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={`/uploads/test3.jpg`} className="d-block img-fluid" alt="..."/>
                        </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselName}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${carouselName}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </CarouselStyled>
    )
}

export {HomeCarousel}