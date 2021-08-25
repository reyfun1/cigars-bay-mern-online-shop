import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import styled from 'styled-components'

const BreadCrumb = () => {

    const history = useHistory()

    // Convert path to array, remove first instance and capitalize
    const pathArr = history.location.pathname.split('/').map(path => capitalize(path))
    pathArr.shift()

    return (
        <BreadCrumbStyled aria-label="breadcrumb row">
            <ol className="breadcrumb mb-4 fw-light">
                <Link to="/" className="breadcrumb-item">Home</Link>

                {pathArr.map( path => {
                    // if path is the last one
                    if(path === pathArr[pathArr.length - 1]){
                        return <Link to={path} className="breadcrumb-item active disabled">{path}</Link>
                    } else{
                        return <Link to={path} className="breadcrumb-item">{path}</Link>
                    }
                })}
            </ol>
        </BreadCrumbStyled>
    )
}

export default BreadCrumb

const BreadCrumbStyled = styled.div`
    font-size: 0.90em;    
    a{
        text-decoration: none;
    }
    a.disabled{
        color: gray;
        pointer-events: none; 
        text-decoration: none;
    }
`


const capitalize = word => word.toLowerCase().replace(/\w/, firstLetter => firstLetter.toUpperCase());