import React from 'react'
import styled from 'styled-components'

const ContactUs = () => {
    return (
        <StyledContactUs>
                <h4>Contact us</h4>
                <p className="text-muted">CigarsBay is a smashing template in strikingly modern and practical design. it has everything you need to start selling today!</p>

                <a href="">
                    <i className="bi bi-geo-alt-fill fs-3"></i>
                    <span>Po Box 16122 Collins Street West Victoria 8007, Australia.</span>
                </a>

                <a href="" >
                    <i className="bi bi-telephone-fill fs-3"></i>
                    <span> Tel: (+00) 123 567990</span>
                </a>

                <a href="" >
                    <i className="bi bi-envelope-fill fs-3"></i>
                    <span>Email: Contact@CigarsBay.Com</span>
                </a>                   
        </StyledContactUs>
    )
}

export default ContactUs

const StyledContactUs = styled.div`
    a {
        display: flex;
        align-content: center;
        padding: .5em;
        text-decoration: none;
        color: black;
    
        &:hover {
            :hover{
                color: blue;
            }
        }

        span {
            display: block;
            padding: .5em;
        }

        i{
            display: block;
            margin: auto 0;
            margin-top:0;
            text-align: center;
        }
    }
`
