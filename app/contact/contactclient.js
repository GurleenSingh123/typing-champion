'use client'

import "../styles/footer.css"
import "../styles/navbar.css"
import "../styles/contact.css"
import emailjs from "@emailjs/browser"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

import { useState } from "react";

function ContactClient(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [disabled, setDisabled] = useState(true);
    
    function checkFields(){

        if(name.trim() === "" || email.trim() === "" || message.trim() === ""){
            setDisabled(true);
        }
        
        else{
            setDisabled(false);
        }
    }


    async function sendEmail() {

        try{
            emailjs.send("service_lbeonpb", "template_fci0fgg", {
                name: name,
                email: email,
                message: message
            }, 'I1lnPyEDcDc64bZdQ')


            setSuccessMsg('Message sent successfully');
            
            setTimeout(() => {
                setSuccessMsg('');    
            }, 2000);
        
            setName('');
            setEmail('');
            setMessage('');
        }

        catch(error){
            setErrMsg('Message not sent');

            setTimeout(() => {
                setErrMsg('');
            }, 2000);

            console.log('error');
        }

    }

    return(
        <>
            <Navbar />

            <div className="contactSection">

                <h1 className="contactHead">Contact Us</h1>

                <p className="contactPara">Have a question, suggestion, or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>

                <input
                    className="inputField"
                    type='text'
                    placeholder="Your name"
                    onChange={(event) => {setName(event.target.value); checkFields(); }}
                    value={name}
                ></input>

                <input
                    className="inputField"
                    type='email'
                    placeholder="Your email"
                    onChange={(event) => {setEmail(event.target.value); checkFields(); }}
                    value={email}
                ></input>

                <textarea
                    className="inputField"
                    id="textField"
                    type='text'
                    placeholder="Your message"
                    onChange={(event) => {setMessage(event.target.value); checkFields(); }}
                    value={message}
                ></textarea>
                
                <button onClick={sendEmail} className="btnSubmit" disabled={disabled}>Submit</button>


                <p className="successMsg">{successMsg}</p>
                <p className="errMsg">{errMsg}</p>

            </div>
                
            <Footer />
        </>
    )

}

export default ContactClient