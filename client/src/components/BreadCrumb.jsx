import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const BreadCrumb = () => {
    return (
        <BreadCrumbStyled aria-label="breadcrumb row">
            <ol className="breadcrumb mb-4 fw-light">
                <Link to="/" className="breadcrumb-item">Home</Link>
                <li className="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
        </BreadCrumbStyled>
    )
}

export default BreadCrumb

const BreadCrumbStyled = styled.div`
    font-size: 0.90em;    
`
