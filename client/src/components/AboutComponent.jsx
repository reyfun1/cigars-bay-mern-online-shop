import React from 'react'
import Carousel from './Carousel'
import logo from '../img/logo.png'

const AboutComponent = () => {
    return (
        <div className="container py-5">
            <div className="row gx-5">
                <div className="col-lg-4">
                    <h3>About Cigars Bay</h3>
                    <img src={logo} className="w-100 my-3 mx-auto" alt="" />
                    <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi dolorum laudantium tempore, soluta veniam cupiditate, exercitationem dolores dolor fuga obcaecati, minima accusantium minus quibusdam sapiente suscipit unde est vitae eaque omnis. Animi earum sunt numquam commodi aliquam laborum ipsa.</p>
                </div>
                <div className="col-lg-8">
                    <h3>Follow us on Instagram!</h3>
                    <div className="d-flex justify-content-evenly">
                    <figure class="figure">
                        <img src="https://source.unsplash.com/250x250" class="figure-img img-fluid rounded" alt="..."/>
                        <figcaption class="figure-caption">A caption for the above image.</figcaption>
                    </figure>
                    <figure class="figure">
                        <img src="https://source.unsplash.com/250x251" class="figure-img img-fluid rounded" alt="..."/>
                        <figcaption class="figure-caption">A caption for the above image.</figcaption>
                    </figure>
                    <figure class="figure">
                        <img src="https://source.unsplash.com/250x252" class="figure-img img-fluid rounded" alt="..."/>
                        <figcaption class="figure-caption">A caption for the above image.</figcaption>
                    </figure>

                    </div>
                    {/* <Carousel carouselName="ig-social"/> */}
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
