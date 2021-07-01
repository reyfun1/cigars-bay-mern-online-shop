import React from 'react'
import cigarBackground from '../img/cigars-bg.jpg'
import free from '../img/free.png'
import refund from '../img/refund.png'
import sale from '../img/sale.png'
import styled from 'styled-components'

const PolicyShowcase = () => {
    return (
        <PolicyShowcaseContainer>
            <img src={cigarBackground} alt="" />
            <div className="row gy-3 position-absolute policy-cards container">
                <div className="col-md">
                    <div className="policy-card">
                        <img src={free} alt="" />
                        <h4>Free Shipping</h4>
                        <p className="text-muted">On orders over $50</p>
                    </div>
                </div>
                <div className="col-md">
                    <div className="policy-card">
                        <img src={refund} alt="" />
                        <h4>30 Days Return</h4>
                        <p className="text-muted"> Buy with confidence</p>
                    </div>
                </div>
                <div className="col-md">
                    <div className="policy-card">
                        <img src={sale} alt="" />
                        <h4>Big Sale</h4>
                        <p className="text-muted">Sales every week</p>
                    </div>
                </div>
            </div>
        </PolicyShowcaseContainer>
    )
}

export default PolicyShowcase

const PolicyShowcaseContainer = styled.div`
    overflow: hidden;
    position: relative;
    max-height: 500px; 

    @media only screen and (max-width: 768px) {
        max-height: 90vh;
        .policy.card{
            margin: auto 1em;
        }
    }

    .policy-cards{
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    .policy-card{
        padding: 1em 3em;
        background-color:white;
        height: 100%;
        text-align: center;
        img{
            width: 100px;
        }
    }
`