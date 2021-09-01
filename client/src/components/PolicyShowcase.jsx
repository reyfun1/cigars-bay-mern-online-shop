import React from 'react'
import cigarBackground from '../img/cigars-bg.jpg'
import free from '../img/free.png'
import refund from '../img/refund.png'
import sale from '../img/sale.png'
import styled from 'styled-components'

const PolicyShowcase = () => {
    
    const PolicyShowcaseContainer = styled.div`
        background-image: url(${cigarBackground});
        padding: 6rem 4rem;
        img{
            width: 80px;
        }
        .policy-card{
            transition: transform 300ms ease-in-out;
        }
        @media only screen and (min-width: 991px) {
            .policy-card:hover{
                transform: scale(1.05)
            }
        }
    `
    return (
        <PolicyShowcaseContainer>
            {/* <img src={cigarBackground} className="img-fluid" alt="..." /> */}
            <div className="row policy-cards gy-4 text-light text-center container mx-auto">
                <div className="col-md ps-md-0">
                    <div className="policy-card p-3 bg-light text-dark">
                        <img className="mb-1" src={free} alt="..." />
                        <p className="fs-5 m-0 text-uppercase">Free Shipping</p>
                        <p className="m-0">On orders over $50</p>
                    </div>
                </div>
                <div className="col-md">
                    <div className="policy-card p-3 bg-light text-dark">
                        <img className="mb-1" src={refund} alt="..." />
                        <p className="fs-5 m-0 text-uppercase text-nowrap">7 Days Return</p>
                        <p className="m-0"> Buy with confidence</p>
                    </div>
                </div>
                <div className="col-md pe-md-0">
                    <div className="policy-card p-3 bg-light text-dark">
                        <img className="mb-1" src={sale} alt="..." />
                        <p className="fs-5 m-0 text-uppercase">Big Sales</p>
                        <p className="m-0">Sales every week</p>
                    </div>
                </div>
            </div>
        </PolicyShowcaseContainer>
    )
}

export default PolicyShowcase