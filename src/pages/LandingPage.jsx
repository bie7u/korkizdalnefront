import React, { useState, useEffect } from "react";
import HeadLine from "../components/HeadLine";
import Header from "../components/Header";
import Questions from "../components/Questions";
import Info from "../components/Info";
import Movie from "../components/Movie";
import ContactForm from "../components/ContactForm";
import BuyTutor from "../components/BuyTutor";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import {fetchData, postData} from '../services/apiService';
import "./LandingPage.css";


const LandingPage = (props) => {
    const { dynamicWord } = useParams();
    const navigate = useNavigate();

    const [lessonType, setLessonType] = useState();
    const [headerData, setHeaderData] = useState([]);
    const [questionsData, setQuestionsData] = useState([]);
    const [infoData, setInfoData] = useState([]);
    const [blogData, setBlogData] = useState([]);
    
    useEffect(() => {
        // ID landing page
        fetchData(`landingpage/landing_page/?lesson=${dynamicWord}`)
          .then((responseData) => {
            if (!responseData[0]) {
                navigate('/')
                return null
            }
            setLessonType(responseData[0].id);
      
            // Headline Data
            fetchData(`landingpage/landing_page/${responseData[0].id}`)
              .then((responseData) => {
                setHeaderData(responseData);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
      
            // Questions Data
            fetchData(`landingpage/landing_page/${responseData[0].id}/accordion/`)
              .then((responseData) => {
                setQuestionsData(responseData);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            // Info Data
            fetchData(`landingpage/landing_page/${responseData[0].id}/about/`)
              .then((responseData) => {
                setInfoData(responseData);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
            // Blog Data
            fetchData(`landingpage/landing_page/${responseData[0].id}/blog/`)
              .then((responseData) => {
                setBlogData(responseData);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }, []);

    return (
        <div>
            <HeadLine />
            <Header headerData={{'data': headerData}} />
            <Questions questionsData={{'data': questionsData}} />
            <Info infoData={{'data': infoData}} />
            <Movie />
            <div className='contact-forms'>
                <div className='contact1'>
                    <span className='contact1-text'>Jeżeli chcesz omówić szczegóły zapraszmy do wypełnienia formularza kontaktowego. Zadzwonimy najszybciej jak możemy.</span>
                    <ContactForm />
                </div>

                {/* <div className='contact2'>
                    <span className='contact1-text'>Jeżeli jesteś zdecydowany - zarezerwuj swoją pierwszą lekcję.</span>
                    <BuyTutor />
                </div> */}
            </div>
            <Blog blogData={{'data': blogData}}/>
            <Footer />
        </div>
    )
}

export default LandingPage;