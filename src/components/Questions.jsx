import React from "react";
import "./Questions.css"
import AnswerQuestion from "./AnswerQuestion";


const Questions = () => {

    return (
    <div className='questions'>
        <p className='question-title'>Wszystko na nasz temat</p>
        <div className='questions-answer'>
            <div className='item'>
                <AnswerQuestion className='test' />
            </div>
            <div className='item'>
                <AnswerQuestion className='test' />
            </div>
            <div className='item'>
                <AnswerQuestion className='test' />
            </div>
            <div className='item'>
                <AnswerQuestion className='test' />
            </div>
            <div className='item'>
                <AnswerQuestion className='test' />
            </div>
            <div className='item'>
                <AnswerQuestion className='test' />
            </div>
        </div>
    </div>
    )
}

export default Questions