import React from "react";
import HeadLine from "../components/HeadLine";
import Header from "../components/Header";
import Questions from "../components/Questions";
import Info from "../components/Info";
import Movie from "../components/Movie";
import ContactForm from "../components/ContactForm";
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
                <ContactForm />
                <ContactForm />
            </div>
        </div>
    )
}

export default LandingPage;