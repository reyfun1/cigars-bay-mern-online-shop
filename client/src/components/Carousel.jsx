import React from 'react'

import styled from 'styled-components'

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <ImgStyled src="https://source.unsplash.com/1920x350" className="d-block img-fluid" alt="..."/>
                </div>
                <div className="carousel-item">
                    <ImgStyled src="https://source.unsplash.com/1920x351" className="d-block img-fluid" alt="..."/>
                </div>
                <div className="carousel-item">
                    <ImgStyled src="https://source.unsplash.com/1920x352" className="d-block img-fluid" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel

const ImgStyled = styled.img`
    min-height: 25vh;
    width: auto;
    object-fit: cover;
`