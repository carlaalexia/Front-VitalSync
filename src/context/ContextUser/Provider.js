import React, { useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {

    const [email,setEmail]=useState("");
    const [password,setPassword]= useState("");


    const[emailSelect, setEmailSelect]=useState("");
    const[passwordSelect, setPasswordSelect]=useState("");

    return(
        <Context.Provider
        value={{
            emailSelect,
            setEmailSelect,
            passwordSelect,
            setPasswordSelect,
            email,
            setEmail,
            password,
            setPassword
        }}
        >    
            {children}
        </Context.Provider>
    );
};


export default Provider;