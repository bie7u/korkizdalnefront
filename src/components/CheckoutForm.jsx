import React from "react";
import TextField from '@mui/material/TextField';
import "./CheckoutForm.css";


const CheckoutForm = () => {

    return (
        <div className='checkout-form'>
            <h1>Dane użytkownika</h1>
            <TextField className='testdddd' id="outlined-basic" label="Imię"  variant="outlined" />
            <TextField id="outlined-basic" label="Nazwisko"  variant="outlined" />
            <TextField id="outlined-basic" label="Email"  variant="outlined" />
        </div>
    )
}

export default CheckoutForm