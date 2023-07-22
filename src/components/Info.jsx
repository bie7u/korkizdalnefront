import React from "react";
import "./Info.css"
import InfoDetail from "./InfoDetail";


const Info = ({infoData}) => {

    return (
        <div className='info'>
            <div className='info-title'>
                <span className='info-title1'>Jesteśmy</span><span className='info-title2'> dla osób które...</span>
            </div>
            <div className='info-detail-container'>
            {infoData.data.map((info, index) => (
            <div key={index} className='item'>
                <InfoDetail infoDetail={{info}} />
            </div>
            ))}
            </div>

        </div>
    )
}

export default Info