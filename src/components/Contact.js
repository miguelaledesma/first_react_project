import React, { useState } from "react";

// const FORM_ENDPOINT = 

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)

    const onSubmit = (evt) => {
        evt.preventDefault()

    }

    return(
        <section id= 'contact'>
            
            <h2>contact me</h2>
           <form onSubmit = {onSubmit} method = "POST" target = "_blank">
               <div className = 'name'>
               <input 
               type = "text" 
               placeholder = "Name"
               name = "name"
                /> 
                </div>
                <div className = 'email'>
               <input 
               type = "email"
               placeholder = "Email"
               email = "email"

               /> 
               </div>

               <div className = 'message'>
               <input
               type = "text"
               placeholder = "Message me!"
               message = "message" 
               /> 
               </div>
               <button type = "submit"> Send </button>
           </form>

        </section>

        
    )
}

export default Contact