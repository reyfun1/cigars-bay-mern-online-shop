import React from 'react'
import styled from 'styled-components'
import BreadCrumb from '../components/BreadCrumb'
import Carousel from '../components/Carousel'
import ProductDetailsTable from '../components/ProductDetailsTable'
import ProductSearchResult from '../components/ProductSearchResult'

const ProductPage = () => {
    return (
        <ProductPageStyled className="container py-4">
            <BreadCrumb/>

            <div className="row">
                {/* Carousel Images */}
                <div className="col mb-3">
                    <Carousel carouselName="productImages"/>
                </div>
                {/* Summary and price  */}
                <div className="col-md-4 mb-3">
                    {/* Item title */}
                    <div>
                        <h3>Alma Fuerte </h3>
                        <h5>Generacion V - 7 x 58 Salomon</h5>
                        <p className="text-muted">By: <a href="">Plasencia Cigars</a></p>
                        <span className="fs-6">Item # : 231</span>
                    </div>    
                    <div>
                        <div className="d-flex justify-content-between my-4">
                            <div>
                                <h3 className="m-0">$79.99</h3>
                                <p className="text-muted m-0 font-weight-light text-decoration-line-through"> $89.99 MSRP</p>
                            </div>
                            <button type="button" className="btn btn-success">Add to Cart <i className="bi bi-cart"></i></button>
                        </div>
                        {/* Item Options */} 
                        <div className="item-options mb-5 active">
                                <button type="button" className="btn btn-outline-secondary active">
                                    <p className="m-0">Box of 10 Cigars</p>
                                    <p className="m-0">In Stock</p>
                                </button>
                                <button type="button" className="btn btn-outline-secondary">
                                    <p className="m-0">5 Cigars</p>
                                    <p className="m-0">In Stock</p>
                                </button>
                                <button type="button" className="btn btn-outline-secondary">
                                    <p className="m-0">1 Cigar</p>
                                    <p className="m-0">In Stock</p>
                                </button>
                        </div>

                        
                    </div>       
                </div>
           
            </div>

            <div className="row mt-3">
                {/* Description */}
                <div className="col-md-6 mb-3">
                    <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><h6>Description</h6></button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><h6>About Plasencia Cigars</h6></button>
                    </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active p-2" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><small>{PRODUCT_DESC}</small></div>
                    <div className="tab-pane fade p-2" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <img src="//cdn.shopify.com/s/files/1/0430/5436/6888/files/Plasencia-Logo-Shopify_300x300.png?v=1597732732" alt="" />
                        <p>
                            <small>Aboout the company here</small>
                        </p>
                    </div>
                    </div>
                </div>
                
                {/* Related */}
                <div className="col-md-6">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><h6>Other sizes</h6></button>
                    </div>
                    </nav>
                    <div className="tab-content d-flex flex-wrap" id="nav-tabContent">
                        <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                        <ProductSearchResult productInfo={PRODUCT_INFO[1]} />
                        <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                        <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                    </div>
                </div>
                  
            </div>

            {/* Similar Products */}
            <div className="row my-5">
                <div className="col">
                    <div>
                        <h6 className="">Similar products</h6>
                        <div className="d-flex flex-wrap">
                            <ProductSearchResult productInfo={PRODUCT_INFO[2] } />
                            <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                            <ProductSearchResult productInfo={PRODUCT_INFO[2] } />
                            <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                        </div>
                        <h6 className="card-header"></h6>
                    </div>
                </div>
            </div>
        </ProductPageStyled>
    )
}

export default ProductPage

const ProductPageStyled = styled.div`
a {
    text-decoration: none;
}

.attribute-value{
    text-align: center;
}

table{
    font-size: 0.8em;
}

.item-options{
    display: flex;
    justify-content: space-between;

    button{
        p:nth-of-type(2) {
            font-size: .7em;
          }
    }

    div {
        font-size: .85em;
        border: 2px solid grey;
        padding: .25em .5em;
        p{
            margin: 0;
        }
        &:hover{
            border: 2px solid blue;
        }
    }
}
`


const PRODUCT_DESC = `Not only are Plasencia Alma Fuerte cigars some of the most beautifully presented handmades we’ve ever seen, they’re also unquestionably among the tastiest full-bodied cigars ever crafted. Comprised mainly of Nicaraguan Criollo ‘98 tobaccos spanning the country’s top growing regions of Estelí, Condega, Jalapa and Ometepe, Alma Fuerte projects an ethereal bouquet of sweet coffee, hot cocoa powder, creamy Nutella, marshmallow, and mineral qualities to deliver a delicious and invigorating smoke you won’t soon forget.`
const PRODUCT_INFO = [
    {
        id: 1,
        brand_name: 'Alma Fuerte',
        product_name: 'Nestor IV Toro 6 x 54',
        price: 299.99,
        price_before: 399.99,
        discount: 0.25,
        imgSRC : 'https://assets.bestcigarprices.com/shopcontent/images/PLASENCIA_FUERTE_NESTORIV_233070.jpg'
    },
    {
        id: 2,
        brand_name: 'Alma del Campo',
        product_name: 'Guajiro Robusto 5 1/2 x 50',
        price: 199.99,
        price_before: 299.99,
        discount: 0.15,
        imgSRC : 'https://assets.bestcigarprices.com/shopcontent/images/PLASENCIA_CAMPO_GUAJIRO_233066.jpg'
    },
    {
        id: 3,
        brand_name: 'Alma del Fuego',
        product_name: 'Candente Robusto 5 x 50',
        price: 134.99,
        price_before: 150.99,
        discount: 0,
        imgSRC: 'https://assets.bestcigarprices.com/shopcontent/images/PLASENCIA_FUEGO_CANDENTE_236008.jpg'
    },
    {
        id: 4,
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