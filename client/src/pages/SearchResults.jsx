import React , {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { listProducts } from '../actions/productActions'
import BreadCrumb from '../components/BreadCrumb'
import LoadingSpinner from '../components/LoadingSpinner'
import ProductSearchResult from '../components/ProductSearchResult'
import SortFilter from '../components/SortFilter'


const SearchResults = ({match}) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const windowWidth = window.innerWidth

    const [showFilterTab,setShowFilterTab] = useState(windowWidth >= 992)
    
    const pageNumber = match.params.pageNumber || 1
    const searchText = match.params.keyword

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList

    // push product id here 
    const handleProductCardClick = id => {
        history.push(`/product/${id}`)
    }

    useEffect(() => {
        console.log(searchText)
        dispatch(listProducts('', pageNumber))
      }, [dispatch, searchText, pageNumber])

    return (
        <SearchResultStyled className="container py-4">
            <BreadCrumb/>
            <div className="row">
                <div className="col">
                    <p className="fs-6 text-md-start text-sm-center">{products ? products.length : '0'} results for: <span className="fst-italic">"{searchText}"</span></p>
                </div>
            </div>
            <div className="row  d-sm-block text-center">
                <div className="col">
                    <button 
                        type="button" 
                        className="btn btn-outline-primary my-2  d-lg-none " 
                        onClick={()=>setShowFilterTab(!showFilterTab)}>
                            {showFilterTab ? "Hide" : "Show"} Filters
                    </button>
                    {products && products.length > 0 && <p className="text-muted mb-2">Showing {products.length} items </p>}
                </div>
            </div>
            <div className="row">
                {showFilterTab && 
                <div className="col-md-4 col-lg-3 col-xxl-2">
                    <SortFilter/>
                </div>}
                
                <div className="col d-flex align-content-center flex-wrap">
                {loading ? <div className="w-100"> <LoadingSpinner size={6} borderWidth={0.40}/> </div>: (
                    <>
                    {products && products.length > 0 
                        ? products.map(product => <ProductSearchResult productInfo={product} key={product._id} clickMethod={() => handleProductCardClick(product._id)}/> ) 
                        : <div>No Products Found</div>}
                    </>
                )}
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
