import React from 'react'
import ContactUs from './ContactUs'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterStyled>
            <div className="footer-bar"></div>
            <div className="row container">
                <div className="col">
                    <ContactUs/>
                </div>
                <div className="col">
                    <h4>Policies</h4>
                    <ul>Cont</ul>
                </div>
            </div>
        </FooterStyled>
    )
}

export default Footer

const FooterStyled = styled.footer`
    .footer-bar{
        background-color: red;
        height: 50px;
        width: 100%;
    }
`
