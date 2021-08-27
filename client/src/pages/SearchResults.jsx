import React , {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { listProducts } from '../actions/productActions'
import BreadCrumb from '../components/BreadCrumb'
import LoadingSpinner from '../components/LoadingSpinner'
import Pagination from '../components/Pagination'
import ProductSearchResult from '../components/ProductSearchResult'
import SortFilter from '../components/SortFilter'


const SearchResults = ({match}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const windowWidth = window.innerWidth

    // keyword and pagenumber from query 
    const keyword = match.params.keyword
    const pageNumber = match.params.pageNumber || 1

    const [showFilterTab,setShowFilterTab] = useState(windowWidth >= 992)
    
    // import product list from redux state
    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages, totalProductCount } = productList

    // Go to ProductPage
    const handleProductCardClick = id => {
        history.push(`/product/${id}`)
    }

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
        <SearchResultStyled className="container py-4">
            <BreadCrumb/>
            <div className="row">
                <div className="col">
                    {keyword && keyword !== '' ? (
                        <p className="fs-6 text-md-start text-sm-center">
                        {totalProductCount ? totalProductCount : '0'} results for: 
                        <span className="fst-italic">"{keyword}"</span>
                    </p>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className="row  d-sm-block">
                <div className="col">
                    <button 
                        type="button" 
                        className="btn btn-outline-primary my-2  d-lg-none " 
                        onClick={()=>setShowFilterTab(!showFilterTab)}>
                            {showFilterTab ? "Hide" : "Show"} Filters
                    </button>
                    {products && products.length > 0 && 
                    <p className="text-muted mb-2 text-center">Showing {products.length} of {totalProductCount} results </p>}
                </div>
            </div>
            <div className="row">
                {showFilterTab && 
                <div className="col-md-4 col-lg-3 col-xxl-2">
                    <SortFilter/>
                </div>}
                
                <div className="col d-flex align-items-stretch flex-wrap gap-1">
                {loading ? <div className="w-100"> <LoadingSpinner size={6} borderWidth={0.40}/> </div>: (
                    <>
                        {products && products.length > 0 
                        ? products.map(product => <ProductSearchResult productInfo={product} key={product._id} clickMethod={() => handleProductCardClick(product._id)}/> ) 
                        : <div>No Products Found</div>}
                    </>
                )}
                </div>
                {products && products.length < 5 && <div className="spacer-less-than-5"></div>}
            </div>  
            {/* Pagination Here */}
            <div className="row mt-5">
                <Pagination pages={pages} page={page} keyword={keyword ? keyword : ''}/>            
            </div>
        </SearchResultStyled>
    )
}

export default SearchResults

const SearchResultStyled = styled.div`
.spacer-less-than-5{
    height: 300px;
}
a{
    text-decoration: none;
}

`
