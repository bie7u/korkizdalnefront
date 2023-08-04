import React from "react";
import Pagination from '@mui/material/Pagination';
import "./MyLessonsPage.css"
import DashboardPage from "./DashboardPage";
import SingleLesson from "../components/MyLessonPage/SingleLesson";


const MyLessonsPage = () => {

    return (
        <div className="my-lessons-main">
            <DashboardPage />
            <div className='my-lessons-sc-main'>
                <div className='my-lessons'>
                    <span className='my-lessons-title'>Moje Korepetycje</span>
                    <div>
                        <h1>Trwające</h1>
                        <SingleLesson />
                        <h1>Nadchodzące</h1>
                        <SingleLesson />
                        <h1>Zakończone</h1>
                        <SingleLesson />
                        <SingleLesson />
                        <SingleLesson />
                        <SingleLesson />
                        <SingleLesson />
                        <div className='pagination-style'>
                            <Pagination count={3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyLessonsPage