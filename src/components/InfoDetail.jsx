import React from "react";
import "./InfoDetail.css"
import RightArrow from '../assets/icons/double_right_arrow.png'

const InfoDetail = ({infoDetail}) => {
    const info = infoDetail.info.text

    return (
        <div className='info-detail'>
            <img src={RightArrow} className='info-detail-right-arrow' />
            <span>{info}</span>
        </div>
    )
}

export default InfoDetail