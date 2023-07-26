import React from "react";
import HeadLine from "../components/HeadLine";
import CheckoutForm from "../components/CheckoutForm";
import "./CheckoutPage.css";


const CheckoutPage = () => {

    return (
        <div>
            <HeadLine />
            <div className='checkout-page'>
                
                <div className='checkout-page-m'>
                    <span className='checkout-page-title'>Koszyk</span>
                    <div>
                        <div className='checkout-form'>
                            <CheckoutForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage