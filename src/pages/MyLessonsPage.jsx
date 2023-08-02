import React from "react";
import "./MyLessonsPage.css"
import DashboardPage from "./DashboardPage";
import HeadLine from "../components/HeadLine";


const MyLessonsPage = () => {

    return (
        <div className="my-lessons-main">
            <DashboardPage />
            <div className='my-lessons-sc-main'>
                <div className='my-lessons'>
                    <span className='my-lessons-title'>Moje Korepetycje</span>
                </div>
            </div>
        </div>
    )
}

export default MyLessonsPage