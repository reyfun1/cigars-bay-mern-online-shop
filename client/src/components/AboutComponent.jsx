import React from 'react'

const AboutComponent = () => {
    return (
        <div className="container py-5">
            <div className="row gx-5">
                <div className="col-md-4">
                    <h3>About Cigars Bay</h3>
                    <p className>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad animi dolorum laudantium tempore, soluta veniam cupiditate, exercitationem dolores dolor fuga obcaecati, minima accusantium minus quibusdam sapiente suscipit unde est vitae eaque omnis. Animi earum sunt numquam commodi aliquam laborum ipsa.</p>
                </div>
                <div className="col-md-8">
                    <h3>Follow us on Instagram!</h3>
                    <img src="https://source.unsplash.com/300x300" alt="" />
                    <img src="https://source.unsplash.com/300x301" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
