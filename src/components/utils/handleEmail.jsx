{/*import { Button, Heading, HTML } from "@react-email-components";
import * as React from "react";*/}
import emailjs from '@emailjs/browser';

export default function emailFunction(Name, email, message) {
emailjs.init("your_actual_public_key_here");
    emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, `${import.meta.env.VITE_API_KEY}`,{
        from_name: Name,
        Name: "payton",
        message: message,
        email: email,
    });

    

    
}

