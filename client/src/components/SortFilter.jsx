import React, { useState } from 'react'
import styled from 'styled-components'

const SortFilter = ({sortFilter, setSortFilter}) => {

    const [priceFilter, setPriceFilter] = useState(500)

    const handlePriceFilter = e => setPriceFilter(e.target.value)

    const handleSortChange = e => {
        const value = e.target.value

        if(value.includes('price')){
            setSortFilter({...sortFilter, sort : {
                sortBy : 'price',
                sortDirection : value === 'lowestprice' ? 1 : 0
            }} )
        }
    }

    return (
        <SortFilteredStyled className="">
            <div className="p-2">
                <h6 className="mb-2 text-uppercase">Refine Search</h6>
                    <div className="">
                        <label className="mb-1">Sort By</label>
                        <select className="form-select" aria-label="Default select example" onChange={handleSortChange}>
                        <option value="featured" selected="">Relevance</option>
                            <option value="lowestprice">Price Low - High</option>
                            <option value="highestprice">Price High - Low</option>
                        </select>
                </div>
            </div>
            <div className="mt-3">
                {/* <div className="">
                    <label htmlFor="customRange1" className="form-label mb-1">Filter</label>
                    <p className="m-0"><small>($0 - ${priceFilter})</small></p>
                    <input type="range" className="form-range" id="customRange1" min="0" max="500" onChange={handlePriceFilter} value={priceFilter}/>
                </div> */}
            </div>

        </SortFilteredStyled>
    )
}

export default SortFilter

const SortFilteredStyled = styled.div`
    select{
        font-size: .8em;
    }
    label{
        font-size: .9em;
    }
`