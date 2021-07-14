import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
    return (
        <DivStyled className="container my-5 text-center">
            <div className="d-md-none">
                    <h3 className="text-bold">404 Error:</h3>
                    <h6>Sorry, The page you are trying to access does not exist!</h6>
            </div>

            <div className="position-relative">
                <div className="d-none position-absolute text-white message-404 d-md-block">
                    <h3 className="text-bold">404 Error:</h3>
                    <h6>Sorry, The page you are trying to access does not exist!</h6>
                </div>
            <img object-fit="contain" src="https://cdn.pixabay.com/photo/2016/11/21/17/43/adorable-1846755_960_720.jpg" alt="" />
            </div>
        </DivStyled>
    )
}

export default NotFound

const DivStyled = styled.div`
    .message-404{
        top: 10%;
        left: 50%;
        transform: translateX(-50%)
    }
    img{
        width: 100%
    }
`
