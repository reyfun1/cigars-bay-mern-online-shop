import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'

import { useHistory } from "react-router-dom";


const Freatured = () => {
    const history = useHistory()

    const handleProductCard = () => {
        history.push('/product/1')
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-4">
                    <p className="h4">Freatured</p>
                    <ProductCard bigCard={true} productInfo={PRODUCT_INFO[3] } />                   
                </div>
                <div className="col-md">
                    <div className="w-100 d-md-none mt-5"></div>
                    <p className="h4">New Arrivals</p>
                    <div className="row gy-2">
                        <div className="col">
                            <ProductCard productInfo={PRODUCT_INFO[0] } clickMethod={handleProductCard} />
                        </div>
                        <div className="col">
                            <ProductCard productInfo={PRODUCT_INFO[1] } />
                        </div>
                        {/* <!-- Force next columns to break to new line at md breakpoint and up --> */}
                        <div className="w-100 d-lg-none"></div>

                        <div className="col">
                            <ProductCard productInfo={PRODUCT_INFO[2] } />
                        </div>
                        <div className="col">
                            <ProductCard productInfo={PRODUCT_INFO[2] } />
                        </div>
                    </div>

                    <div className="row gy-2 mt-3">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col-lg-6">
                            <button type="button" className="btn btn-primary w-100">Shop New Arrivals &gt; </button>
                        </div>
                    </div>


                    <p className="h4 mt-4">Best Sellers</p>
                    <div className="row gy-2">
                        <div className="col">
                            <ProductCard productInfo={PRODUCT_INFO[0] } />
                        </div>
                        <div className="col">
                            <ProductCard productInfo={PRODUCT_INFO[1] } />
                        </div>
                        {/* <!-- Force next columns to break to new line at md breakpoint and up --> */}
                        <div className="w-100 d-lg-none"></div>
                        <div className="col">
                            <ProductCard productInfo={PRODUCT_INFO[2] } />
                        </div>
                        <div className="col">
                            <ProductCard productInfo={PRODUCT_INFO[2] } />
                        </div>
                    </div>

                    <div className="row gy-2 mt-3">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col-lg-6">
                            <button type="button" className="btn btn-primary w-100">Shop Best Sellers &gt; </button>
                        </div>
                    </div>

                    
                </div>
            </div>

            {/* <div className="row my-5">
                <div className="col">

                    <button type="button" className="btn btn-outline-primary mx-2">View by Brand</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary mx-2">View Samplers</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary mx-2">View All</button>
                </div>
            </div> */}

        </div>
    )
}

export default Freatured



const PRODUCT_INFO = [
    {
        id: 1,
        company_name: 'Plasencia Cigars',
        brand_name: 'Alma Fuerte',
        product_name: 'Nestor IV Toro 6 x 54',
        price: 299.99,
        price_before: 399.99,
        discount: 0.25,
        imgSRC : 'https://assets.bestcigarprices.com/shopcontent/images/PLASENCIA_FUERTE_NESTORIV_233070.jpg'
    },
    {
        id: 2,
        company_name: 'Plasencia Cigars',
        brand_name: 'Alma del Campo',
        product_name: 'Guajiro Robusto 5 1/2 x 50',
        price: 199.99,
        price_before: 299.99,
        discount: 0.15,
        imgSRC : 'https://assets.bestcigarprices.com/shopcontent/images/PLASENCIA_CAMPO_GUAJIRO_233066.jpg'
    },
    {
        id: 3,
        company_name: 'Plasencia Cigars',
        brand_name: 'Alma del Fuego',
        product_name: 'Candente Robusto 5 x 50',
        price: 134.99,
        price_before: 150.99,
        discount: 0,
        imgSRC: 'https://assets.bestcigarprices.com/shopcontent/images/PLASENCIA_FUEGO_CANDENTE_236008.jpg'
    },
    {
        id: 4,
        company_name: 'Oliva Cigars',
        brand_name: 'Serie G',
        product_name: 'Churchill Cameroon 7 x 50',
        price: 115.99,
        price_before: 0,
        discount: 0,
        imgSRC : 'https://assets.bestcigarprices.com/shopcontent/images/oliva_g_chur_cam.jpg',
        isFreatured : true,
        freatured_text : `Oliva Serie 'G' is a good-looking Nicaraguan premium cigar made with an authentic African Cameroon wrapper. This leaf imparts a pleasant, nutty flavor, adding to the rich bouquet presented by the Nicaraguan Habano long-fillers inside.`
    },
]