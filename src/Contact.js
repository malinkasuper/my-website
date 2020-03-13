import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import './App.css';

export const FormPage = () => {
    return (
        <div className='wrapper'>
            <div className='form-wrapper'>
        <MDBContainer>
            <form>
                <p className="h5 text-center mb-4">Write to us</p>
                <div className="grey-text">
                  <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                    success="right" />
                  <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                    success="right" />
                  <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
                  <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                </div>
                <div className="text-center">
                  <MDBBtn outline color="secondary">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div>
            </form>
              
        </MDBContainer>
            </div>
        </div>
        );
        };
        
        export default FormPage;