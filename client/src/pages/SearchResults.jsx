import React , {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import ProductSearchResult from '../components/ProductSearchResult'
import SortFilter from '../components/SortFilter'


const SearchResults = () => {
    const history = useHistory()

    const windowWidth = window.innerWidth

    const [showFilterTab,setShowFilterTab] = useState(windowWidth >= 992)

    const handleProductCardClick = () => {
        console.log('trrrr')
        history.push("/product/1")
    }

    return (
        <SearchResultStyled className="container mb-5">
            <div className="row my-4">
                <div className="col-md">
                    <a href=""> Home </a>&gt;<a href=""> Products </a></div>
                <div className="col-md"></div>
            </div>
            <div className="row">
                <div className="col">
                    <p>Search results for term: <span>Alma Fuerte</span></p>
                </div>
            </div>
            <div className="row  d-sm-block text-center">
                <div className="col">
                    <button 
                        type="button" 
                        className="btn btn-outline-primary my-2  d-lg-none" 
                        onClick={()=>setShowFilterTab(!showFilterTab)}>
                            {showFilterTab ? "Hide" : "Show"} Filters
                    </button>
                    <p className="text-muted mb-2">Showing 1 - 60 of 5563 items </p>
                </div>
            </div>
            <div className="row">
                {showFilterTab && 
                <div className="col-md-3">
                    <SortFilter/>
                </div>}
                <div className="col d-flex flex-wrap">
                    <ProductSearchResult productInfo={PRODUCT_INFO[0] } clickMethod={handleProductCardClick}/>
                    <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[2] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[0] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[2] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[0] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[2] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                    <ProductSearchResult productInfo={PRODUCT_INFO[1] } />
                </div>
            </div>

                <nav className="mt-5" aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
        </SearchResultStyled>
    )
}

export default SearchResults

const SearchResultStyled = styled.div`
a{
    text-decoration: none;
}

`


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