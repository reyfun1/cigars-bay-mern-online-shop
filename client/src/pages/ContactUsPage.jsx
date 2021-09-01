import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import axios from 'axios'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContactUsPage = () => {

    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState()
    const [success, setSuccess] = useState(false)

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const sendMessage = async msgData => {
        try {
            setLoading(true)
            const reqConfig = {
                headers: {
                    'Authorization': `Bearer ${userInfo.token}`,
                    'Content-Type' : 'application/json'
                }
            }

            const { data } = await axios.post('/api/msg', msgData, reqConfig) 

            setLoading(false)
            setSuccess(true)
            
        } catch (error) {
            setLoading(false)
            setErr(error)
        }
    }

    const onSubmit = e => {
        e.preventDefault()

        const form = e.target

        if(!form.checkValidity()){
            e.stopPropagation()
            form.classList.add('was-validated')
        } else{
            // extract element values
            let result = {}

            Array.from(form.elements).forEach(el => {
                result[el.name] = el.value
            })

            sendMessage(result)
        }

    }

    return (
        <ContactUsPageStyled className="container py-4">
            <BreadCrumb/>
            {!success ? (
                <>
                <p className="mb-3 fs-3">Contact Us</p>
                    <form className="needs-validation" noValidate onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label className="mb-1" htmlFor="contact-name">Name</label>
                                    <input type="input" className="form-control" 
                                    id="contact-name" aria-describedby="contact-us-name-help" 
                                    placeholder="Enter your Name" name="name" required maxLength="80"/>    
                                    <div className="invalid-feedback">
                                        Valid name is required.
                                    </div>            
                                </div>
                                <div className="form-group mb-3">
                                    <label className="mb-1" htmlFor="contact-email">Email address</label>
                                    <input type="email" className="form-control" 
                                    id="contact-email" aria-describedby="emailHelp" 
                                    placeholder="Enter email" name="email" required maxLength="80"/>
                                    <div className="invalid-feedback">
                                        Valid email is required.
                                    </div>  
                                </div>
                                <div className="form-group mb-3">
                                    <label className="mb-1" htmlFor="contact-subject">Subject</label>
                                    <input type="input" className="form-control" 
                                    id="contact-subject" aria-describedby="contact-us-name-help" 
                                    placeholder="Enter Subject" name="subject" maxLength="80"/>                
                                </div>
                                <div className="form-group mb-3">
                                    <label className="mb-1" htmlFor="contact-orderRef">Order Ref #</label>
                                    <input type="input" className="form-control" 
                                    id="contact-orderRef" aria-describedby="contact-us-name-help"
                                    name="orderRef"
                                    maxLength="80"
                                    placeholder="Order# (Optional)"/>                
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3">
                                    <label className="mb-1" htmlFor="contact-msg">Message</label>
                                    <textarea 
                                        className="form-control" 
                                        id="contact-msg" rows="11"
                                        name="msg"
                                        maxLength="1000"
                                        required>
                                    </textarea>
                                </div>
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="col">
                                {loading ? (
                                    <div className={`alert alert-primary m-0 py-2 px-3 d-flex justify-content-between`} role="alert">
                                        <span>Loading...</span>
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                    {err &&  
                                        <div className={`alert alert-danger m-0 py-2 px-3 d-flex justify-content-between`} role="alert">
                                            <span>Error: Try again later</span>
                                        </div>
                                    }
                                    </>
                                )}
                            </div>
                            <div className="col">
                                <button type="submit" className={`btn btn-primary float-end ${loading ? '' : ''}`}>Submit</button>
                            </div>
                        </div>
                    </form>
                </>

            ) : (
                <div className="d-flex justify-content-center">
                    <div className="card text-center p-4">
                        <h4>Message Submitted</h4>
                        <p className="text-muted">We will get back to you as soon as possible</p>
                        <i className="bi bi-check-circle text-success fs-3"></i>
                        <Link to="/" className="btn btn-primary mt-4">Go Home</Link>
                    </div>
                </div>
            )}
            
        </ContactUsPageStyled>
    )
}

export default ContactUsPage

const ContactUsPageStyled = styled.div`
    .spinner-border{
        margin-top: 0.23rem;
        width: 1.1rem;
        height: 1.1rem;
    }
`
