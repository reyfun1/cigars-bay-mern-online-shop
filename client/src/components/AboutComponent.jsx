import React from 'react'
import Carousel from './Carousel'
import logo from '../img/logo.png'
import InstagramPost from './InstagramPost'

import styled from 'styled-components'


const AboutComponent = () => {

    const handleClickedImage = () => {

    }
    return (
        <AboutComponentStyled className="container">
            <div className="row g-5">
                <div className="col-lg-4 ">
                    <div className="text-center text-md-start my-4 my-md-0 mb-md-2">
                        <p className="fs-3 m-0">About CigarsBay</p>
                        <span className="text-muted">Our history</span>
                    </div>
                    <img src={logo} className="w-100 my-3 mx-auto" alt="" />
                    <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi dolorum laudantium tempore, soluta veniam cupiditate, exercitationem dolores dolor fuga obcaecati, minima accusantium minus quibusdam sapiente suscipit unde est vitae eaque omnis. Animi earum sunt numquam commodi aliquam laborum ipsa.</p>
                </div>
                <div className="col-lg-8">
                    <div className="text-center text-md-start my-4 my-md-0 mb-md-2">
                        <p className="fs-3 m-0">Follow us on Instagram!</p>
                        <span className="text-muted">We post daily</span>
                    </div>
                    <div className="d-flex justify-content-between">
                    <figure className="figure text-center" onClick={handleClickedImage}>
                        <img src="https://source.unsplash.com/250x250" className="figure-img img-fluid rounded" alt="..."/>
                        <figcaption className="figure-caption">A caption for the above image.</figcaption>
                    </figure>
                    <figure className="figure text-center" onClick={handleClickedImage}>
                        <img src="https://source.unsplash.com/250x251" className="figure-img img-fluid rounded" alt="..."/>
                        <figcaption className="figure-caption">A caption for the above image.</figcaption>
                    </figure>
                    <figure className="figure text-center" onClick={handleClickedImage}>
                        <img src="https://source.unsplash.com/250x252" className="figure-img img-fluid rounded" alt="..."/>
                        <figcaption className="figure-caption">A caption for the above image.</figcaption>
                    </figure>

                    </div>
                    {/* <Carousel carouselName="ig-social"/> */}
                </div>
            </div>
        </AboutComponentStyled>
    )
}

export default AboutComponent

const AboutComponentStyled = styled.div`
    .figure{
        transition: transform 300ms ease-in-out;
        @media screen and (min-width: 991px){
            &:hover{
                transform: scale(1.05)
            }
        }

    }
`

