import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'

import styled from 'styled-components'

const BreadCrumb = () => {

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, product , error} = productDetails

    const history = useHistory()
    const pathname = history.location.pathname

    const pathnames = pathname.split("/").filter(x => x)

    return (
        <BreadCrumbStyled aria-label="breadcrumb row">
            <ol className="breadcrumb mb-4 ">
                {/* First link is always Home */}
                    <li className="breadcrumb-item">
                        <Link to="/" className="fw-bold text-decoration-none">HOME</Link>
                    </li>
                {/* Rest of links  */}
                {pathnames.map( (name, index) => {
                    let isProductID = false
                    let routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
                    const isLast = index === pathnames.length - 1
                    const isPage = name === "page"

                    // if the current link is equal to 'product
                    if(name === 'product'){
                        routeTo = '/search'
                        name = 'search'
                    }

                    // if the prev link is equal to 'product'
                    if(pathnames[index - 1] ){
                        if(pathnames[index - 1] === 'product'){
                            isProductID = true
                            name = product.name
                        }
                    }
                
                    // Item is disabled 
                    return (isLast || isPage) ? (
                        <li key={name} className="breadcrumb-item fw-ligth active " aria-current="page">
                            {name && name.toUpperCase()}
                        </li>

                    // Item is clickable
                    ) : (
                        <li className="breadcrumb-item fw-bold" key={name}>
                            <Link to={routeTo} className="text-decoration-none">
                                {name.toUpperCase()}
                            </Link>
                        </li>
                    )
                })}
            </ol> 
        </BreadCrumbStyled>
    )
}

export default BreadCrumb

const BreadCrumbStyled = styled.nav`
    // font-size: 0.90em;    
    // a{
    //     text-decoration: none;
    // }
    // a.disabled{
    //     color: gray;
    //     pointer-events: none; 
    //     text-decoration: none;
    // }
`


const capitalize = word => word.toLowerCase().replace(/\w/, firstLetter => firstLetter.toUpperCase());