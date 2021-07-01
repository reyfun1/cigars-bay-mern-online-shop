import React from 'react'
import ContactUs from './ContactUs'
import styled from 'styled-components'
import amex from '../img/svg/amex.svg'
import applepay from '../img/svg/applepay.svg'
import discover from '../img/svg/discover.svg'

const Footer = () => {
    return (
        <div className="position-relative">
        <FooterStyled className="container text-center text-md-start mb-4">
            <div className="row g-5">
                <div className="col-md">                  
                    <ContactUs/>
                </div>
                <div className="col-md ">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href="" className="text-muted">Privacy Policy</a></li>
                        <li><a href="" className="text-muted">Terms &amp; Conditions</a></li>
                        <li><a href="" className="text-muted">Returns</a></li>
                    </ul>
                </div>
                <div className="col-md">
                    <h4>Join Our Newsletter!</h4>
                    <p className="text-muted">Sign up for our newsletter recevie updates an exlusive offers.</p>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter your email" aria-label="Enter your email"/>
                    </div>
                        <button class="btn btn-primary py-2 px-5" type="button">Subscribe</button>
                </div>
            </div>

        </FooterStyled>
        <a href="#" class="position-absolute bottom-0 end-0 p-3">
                    <i class="bi bi-arrow-up-circle h1"></i>
        </a>
        <BarStyled>
            <div className="text-center container py-4">
                <div className="row ">
                    <div className="col fs-6">
                        <span>Copyright © 2021 By <a href="">Fundora Technologies</a></span>
                    </div>
                    <div className="col payment">
                        <img src={amex} alt="" />
                        <img src={applepay} alt="" />
                        <img src={discover} alt="" />
                    </div>
                    <div className="col">
                        <span className="d-inline-block mx-2"> Follow us :</span>
                        <a href="" className='bi bi-instagram icon'></a>
                        <a href=""className='bi bi-twitter icon'></a>
                        <a href="" className='bi bi-facebook icon'></a>
                    </div>

                </div>
            </div>
        </BarStyled>
        </div>
    )
}

export default Footer

const BarStyled = styled.div`
    background-color: #222;
    color: white;
    a{
        text-decoration: none;
    }

    .icon{
        margin: auto .5em;
        font-size: 1.2em;
        display: inline-block;
        transform: translateY(-2px);
    }


    .payment img{
        margin: auto .5em;
    }
    .social-media i{
        margin: auto .5em;
        font-size: 1.5em;
        display: inline-block;
    }

`

const FooterStyled = styled.footer`
    ul{
        margin: 0;
        padding: 0
    }

    li{
        list-style-type: none;
        margin: 1em 0;
        a{
            text-decoration: none;
            &:hover{
                color: blue !important;
            }
        }
    }    
`
