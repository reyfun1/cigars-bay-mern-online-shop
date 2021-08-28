import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVendors } from '../actions/vendorActions'
import LoadingSpinner from './LoadingSpinner'

const SideSuggestions = () => {
    const dispatch = useDispatch()

    const vendorList = useSelector(state => state.vendorList)
    const { vendors, loading } = vendorList 

    // check if vendor list is populated, if not then load
    useEffect(() => {
        if(vendors.length < 1) dispatch(getVendors())
    },[])

    return (
        <div>
            <div className="p-2">
                <h6 className="mb-2 text-uppercase">Brands</h6>
                <ul className="list-group list-group-flush">
                    {!loading ? (
                        <>
                        {vendors && vendors
                        .sort((a,b) => a.name.localeCompare(b.name))
                        .map(vendor => (
                            <li key={vendor._id} className="list-group-item">{vendor.name}</li>
                        ))}
                        </>
                    ) : (
                        <LoadingSpinner/>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default SideSuggestions
