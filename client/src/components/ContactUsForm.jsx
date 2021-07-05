import React from 'react'
import styled from 'styled-components'

const ContactUsForm = () => {
    return (
        <StyledContactUsForm>
            <h4 className="mb-3">Contact Us</h4>
            <form>
                <div class="form-group mb-3">
                        <label className="mb-1" htmlFor="exampleInputEmail1">Name</label>
                        <input type="input" class="form-control" id="exampleInputEmail1" aria-describedby="contact-us-name-help" placeholder="Enter your Name"/>                
                </div>
                <div class="form-group mb-3">
                    <label className="mb-1" htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group mb-3">
                        <label className="mb-1" htmlFor="exampleInputEmail1">Subject</label>
                        <input type="input" class="form-control" id="exampleInputEmail1" aria-describedby="contact-us-name-help" placeholder="Enter Subject"/>                
                </div>
                <div class="form-group mb-3">
                    <label className="mb-1" htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </StyledContactUsForm>
    )
}

export default ContactUsForm


const StyledContactUsForm = styled.div`
`