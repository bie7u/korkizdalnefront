import React from "react";
import "./Questions.css"
import AnswerQuestion from "./AnswerQuestion";


const Questions = ({questionsData}) => {
    // console.log(questionsData.data)

    return (
    <div className='questions'>
        <p className='question-title'>Wszystko na nasz temat</p>
        <div className='questions-answer'>

            {questionsData.data.map((question, index) => (
            <div key={index} className='item'>
                <AnswerQuestion className='test' question={{question}} />
            </div>
            ))}
            {/* <div className='item'>
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
            </div> */}
        </div>
    </div>
    )
}

export default Questions