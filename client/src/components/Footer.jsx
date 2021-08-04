import React, { useEffect, useState } from 'react'
import ContactUs from './ContactUs'
import ContactUsForm from './ContactUsForm'
import styled from 'styled-components'
import amex from '../img/svg/amex.svg'
import applepay from '../img/svg/applepay.svg'
import discover from '../img/svg/discover.svg'
import { useHistory } from 'react-router-dom'

const Footer = () => {
    const history = useHistory() 

    const [showFooter, setShowFooter] = useState(false)

    // hide the footer based on the url location
    useEffect(() => {
        return history.listen((location) => { 
        const {pathname} = location
        console.log(`You changed the page to: ${location.pathname}`) 

        if( pathname.includes('admin') || 
            pathname.includes('login') ||
            pathname.includes('signup') ||
            pathname.includes('myaccount')
            ){
            setShowFooter(false)
        } else{
            setShowFooter(true)
        }
        }) 
    },[history])

    return (
        <FooterStyled className={`${showFooter ? '' : 'd-none'}`}>
            <div className="container text-md-start mb-4">
                <div className="row">
                    <div className="col-md text-center text-md-start mb-3">                  
                        {/* <ContactUsForm/> */}
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="" className="text-muted">Terms &amp; Conditions</a></li>
                            <li><a href="" className="text-muted">Privacy Policy</a></li>
                            <li><a href="" className="text-muted">Return Policy</a></li>
                            <li><a href="" className="text-muted">Shipping Policy</a></li>
                            <li><a href="" className="text-muted">Return Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-md text-center text-md-start mb-3">
                        <h4>Shop</h4>
                        <ul>
                            <li><a href="" className="text-muted">Brands</a></li>
                            <li><a href="" className="text-muted">On Sale Now</a></li>
                            <li><a href="" className="text-muted">Cigars</a></li>
                            <li><a href="" className="text-muted">Samplers</a></li>
                            <li><a href="" className="text-muted">New Arrivals</a></li>
                        </ul>
                    </div>
                    <div className="col-md text-center text-md-start mb-3">
                        <h4>Join Our Newsletter!</h4>
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
                            <a href="" className='bi bi-instagram icon'></a>
                            <a href=""className='bi bi-twitter icon'></a>
                            <a href="" className='bi bi-facebook icon'></a>
                        </div>
                        <div className="col fs-6">
                            <span>Copyright © 2021 By <a href="">Fundora Technologies</a></span>
                        </div>
                        <div className="col payment">
                            <img src={amex} alt="" />
                            <img src={applepay} alt="" />
                            <img src={discover} alt="" />
                        </div>
                        {/* <a href="#" className="position-absolute bottom-0 end-0 p-3">
                            <i className="bi bi-arrow-up-circle h1"></i>
                        </a> */}
                        <div className="col">
                            <a href="#" className="d-block">
                                <i className="bi bi-arrow-up-circle fs-1"></i>
                            </a>
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
        vertical-align: .225em;
    }
  
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
