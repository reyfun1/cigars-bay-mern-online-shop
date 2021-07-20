import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

const ContactUsPage = () => {
    return (
        <div className="container py-4">
            <BreadCrumb/>
            <h4 className="mb-3">Contact Us</h4>
            <form className="row">
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="exampleInputEmail1">Name</label>
                        <input type="input" className="form-control" id="exampleInputEmail1" aria-describedby="contact-us-name-help" placeholder="Enter your Name"/>                
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group mb-3">
                            <label className="mb-1" htmlFor="exampleInputEmail1">Subject</label>
                            <input type="input" className="form-control" id="exampleInputEmail1" aria-describedby="contact-us-name-help" placeholder="Enter Subject"/>                
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary float-end">Submit</button>
                </div>
        
                
            </form>
        </div>
    )
}

export default ContactUsPage
