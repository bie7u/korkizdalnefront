import React from "react";
import HeadLine from "../components/HeadLine";
import CheckoutForm from "../components/CheckoutForm";
import BuyList from "../components/BuyList";
import "./CheckoutPage.css";


const CheckoutPage = () => {

    return (
        <div>
            <HeadLine />
            <div className='checkout-page'>
                
                <div className='checkout-page-m'>
                    <span className='checkout-page-title'>Koszyk</span>
                    <div className='checkout-main-container'>
                        <div className='checkout-form'>
                            <CheckoutForm />
                        </div>

                        <div className='checkout-buy-list'>
                           <BuyList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage