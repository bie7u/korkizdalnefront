import React from "react";
import HeadLine from "../components/HeadLine";
import Header from "../components/Header";
import Questions from "../components/Questions";
import Info from "../components/Info";
import Movie from "../components/Movie";
import ContactForm from "../components/ContactForm";
import BuyTutor from "../components/BuyTutor";
import Blog from "../components/Blog";
import "./LandingPage.css"


const LandingPage = () => {

    return (
        <div>
            <HeadLine />
            <Header />
            <Questions />
            <Info />
            <Movie />
            <div className='contact-forms'>
                <div className='contact1'>
                    <span className='contact1-text'>Jeżeli chcesz omówić szczegóły zapraszmy do wypełnienia formularza kontaktowego. Zadzwonimy najszybciej jak możemy.</span>
                    <ContactForm />
                </div>

                <div className='contact2'>
                    <span className='contact1-text'>Jeżeli jesteś zdecydowany - zarezerwuj swoją pierwszą lekcję.</span>
                    <BuyTutor />
                </div>
            </div>
            <Blog />
        </div>
    )
}

export default LandingPage;