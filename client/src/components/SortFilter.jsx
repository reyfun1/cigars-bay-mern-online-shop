import React from 'react'
import styled from 'styled-components'

const SortFilter = () => {
    return (
        <SortFilteredStyled>
            <div className="p-3 bg-light border rounded-3">
                <h5 className="mb-3">Sort</h5>
                <select className="form-select" aria-label="Default select example">
                    <option value="featured" selected="">Product A - Z</option>
                    <option value="trending">Trending</option>
                    <option value="bestSelling30d">Best Selling</option>
                    <option value="userReviews">Customer Ratings</option>
                    <option value="pricePerStickLH">Stick Price Low - High</option>
                    <option value="pricePerStickHL">Stick Price High - Low</option>
                    <option value="lowestprice">Price Low - High</option>
                    <option value="highestprice">Price High - Low</option>
                    </select>
            </div>
            <div className="p-3 bg-light border rounded-3">
                <h5 className="mb-3">Filter</h5>
                <div className="mb-3">
                    <label className="mb-1">Brand</label>
                    <select className="form-select" aria-label="Default select example">
                        <option value="" disabled selected>Choose Brand</option>
                        <option value="featured" >Alma Fuerte</option>
                        <option value="trending">Alma del Fuego</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="mb-1">Strength</label>
                    <select className="form-select" aria-label="Default select example">
                        <option value=""disabled selected>Choose Strength</option>
                        <option value="featured" selected="">Alma Fuerte</option>
                        <option value="trending">Alma del Fuego</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="mb-1">Length</label>
                    <select className="form-select" aria-label="Default select example">
                        <option value="" disabled selected>Choose Length</option>
                        <option value="featured" selected="">Alma Fuerte</option>
                        <option value="trending">Alma del Fuego</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="mb-1">Packaging</label>
                    <select className="form-select" aria-label="Default select example">
                        <option value="" disabled selected>Choose Length</option>
                        <option value="featured" selected="">Alma Fuerte</option>
                        <option value="trending">Alma del Fuego</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="mb-1">Wrapper</label>
                    <select className="form-select" aria-label="Default select example">
                        <option value="" disabled selected>Choose Length</option>
                        <option value="featured" selected="">Alma Fuerte</option>
                        <option value="trending">Alma del Fuego</option>
                    </select>
                </div>

                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-danger">Reset</button>
                    <button type="button" className="btn btn-success">Apply</button>
                </div>

            </div>

        </SortFilteredStyled>
    )
}

export default SortFilter

const SortFilteredStyled = styled.div`
    select{
        font-size: .8em;
    }
`