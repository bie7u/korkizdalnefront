import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./AnswerQuestion.css"


const AnswerQuestion = ({question}) => {
    const title = question.question.title
    const more_info = question.question.more_info

    return (
        <div>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {more_info}
                </Typography>
            </AccordionDetails>
        </Accordion>
        </div>
    )
}

export default AnswerQuestion