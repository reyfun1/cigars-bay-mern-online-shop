import React, { useEffect, useState } from 'react'
import ContactUs from './ContactUs'
import ContactUsForm from './ContactUsForm'
import styled from 'styled-components'
import amex from '../img/svg/amex.svg'
import applepay from '../img/svg/applepay.svg'
import discover from '../img/svg/discover.svg'
import { Link, useHistory } from 'react-router-dom'

const Footer = () => {

    return (
        <FooterStyled className={`border-top pt-4`}>
            <div className="container text-md-start mb-4">
                <div className="row">
                    <div className="col-md text-center text-md-start mb-3">                  
                        {/* <ContactUsForm/> */}
                        <h5>Useful Links</h5>
                        <ul className="m-0 p-0">
                            <li><Link to="" className="text-secondary">Terms &amp; Conditions</Link></li>
                            <li><Link to="" className="text-secondary">Privacy Policy</Link></li>
                            <li><Link to="" className="text-secondary">Return Policy</Link></li>
                            <li><Link to="" className="text-secondary">Shipping Policy</Link></li>
                            <li><Link to="" className="text-secondary">Return Policy</Link></li>
                        </ul>
                    </div>
                    <div className="col-md text-center text-md-start mb-3">
                        <h5>Shop</h5>
                        <ul className="m-0 p-0">
                            <li><Link to="" className="text-secondary">Brands</Link></li>
                            <li><Link to="" className="text-secondary">On Sale Now</Link></li>
                            <li><Link to="" className="text-secondary">Cigars</Link></li>
                            <li><Link to="" className="text-secondary">Samplers</Link></li>
                            <li><Link to="" className="text-secondary">New Arrivals</Link></li>
                        </ul>
                    </div>
                    <div className="col-md text-center text-md-start mb-3">
                        <h5>Join Our Newsletter!</h5>
                        <p className="text-muted">Sign up for our newsletter recevie updates an exlusive offers.</p>
                        <div className="form-group mb-3">
                            <label className="mb-1" htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                            <button className="btn btn-primary py-2 px-5" type="button">Subscribe</button>
                    </div>
                </div>

            </div>
            
            <footer className="bg-dark text-white">
                <div className="text-center container py-4 position-relative">
                    <div className="row ">
                        <div className="col">
                            <span className="d-inline-block mx-2"> Follow us :</span>
                            <Link to="/" className='bi bi-instagram icon'></Link>
                            <Link to="/" className='bi bi-facebook icon'></Link>
                        </div>
                        {/* <div className="col fs-6">
                            <span>Copyright © 2021 By <a href="">Fundora Technologies</a></span>
                        </div> */}
                        <div className="col payment">
                            <img src={amex} alt="" />
                            <img src={applepay} alt="" />
                            <img src={discover} alt="" />
                        </div>
                        {/* <a href="#" className="position-absolute bottom-0 end-0 p-3">
                            <i className="bi bi-arrow-up-circle h1"></i>
                        </a> */}
                        <div className="col">
                            <Link to="#" className="d-block">
                                <i className="bi bi-arrow-up-circle fs-1"></i>
                            </Link>
                        </div>
                        

                    </div>
                </div>
            </footer>
        </FooterStyled>
    )
}

export default Footer

const FooterStyled = styled.footer`
    .bi{
        vertical-align: -.110em;
    }
  
    li{
        list-style-type: none;
        margin: 1em 0;
        a{
            text-decoration: none;
        }
    }    

    footer{
        span{
            font-size: .85em;
        }
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
    }
`
