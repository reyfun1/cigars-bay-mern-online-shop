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
import SideSuggestions from '../components/SideSuggestions'


const SearchResults = ({match}) => {
    const MAX = 12
    const history = useHistory()
    const dispatch = useDispatch()
    const windowWidth = window.innerWidth

    // sorting and filtering 
    const [sortFilter, setSortFilter] = useState()

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

    const getProducts = () => {
        const searchProps = {
            keyword,
            pageNumber,
            sortBy : sortFilter && sortFilter.sort.sortBy,
            sortDirection : sortFilter && sortFilter.sort.sortDirection,
        }
        dispatch(listProducts(searchProps))
    }

    useEffect(() => {
        getProducts()
    }, [dispatch, keyword, pageNumber, sortFilter])

    return (
        <SearchResultStyled className="container py-4">
            <BreadCrumb/>
            <div className="row">
                <div className="col-6">
                    {keyword && keyword !== '' ? (
                        <p className="fs-6 text-md-start text-sm-center text-uppercase">
                            Search Results for "{keyword}"
                        </p>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="col-6">

                    {products && products.length > 1 && (
                        <>
                        {pages > 1 ? (
                            <p className="fs-6 text-end text-uppercase">
                                Showing {(page * MAX - MAX + 1)} - {(page * MAX - MAX + 1) + products.length - 1} of {totalProductCount} results
                            </p>
                        ) : (
                            <p className="fs-6 text-end text-uppercase">
                                Showing all {totalProductCount} results
                            </p> 
                        ) }
                        </>
                    )}
                 
                </div>
            </div>
            {/* <div className="row mb-3 d-sm-block text-end">
                <div className="col">
                    <button 
                        type="button" 
                        className="btn btn-outline-secondary my-2  d-lg-none " 
                        onClick={()=>setShowFilterTab(!showFilterTab)}>
                            {showFilterTab ? "Hide" : "Show"} Filters
                    </button>
                </div>
            </div> */}
            <div className="row">
                {/* Left SideTab */}
                {/* {showFilterTab &&  */}
                <div className="col-md-4 col-lg-3 col-xxl-2">
                    <SortFilter sortFilter={sortFilter} setSortFilter={setSortFilter}/>
                    <div className="border w-100 my-4"></div>
                    {showFilterTab && 
                        <SideSuggestions/>
                    }
                </div>

                
                
                <div className="col d-flex align-items-stretch flex-wrap gap-1">
                {loading ? <div className="w-100"> <LoadingSpinner size={6} borderWidth={0.40}/> </div>: (
                    <>
                        {products && products.length > 0 
                        ? products.map(product => <ProductSearchResult productInfo={product} key={product._id} clickMethod={() => handleProductCardClick(product._id)}/> ) 
                        : <div className="text-muted text-center w-100">No products were found</div>}
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
