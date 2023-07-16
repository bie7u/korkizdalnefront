import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import "./ContactForm.css"


const ContactForm = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")

    return (
        <div className='contact-form'>
            <div className='contact-form-title'>
                <span className='contact-form-title1'>Formularz Kontaktowy</span>
            </div>
            <div >
            <Box className="contact-form-fields"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField onChange={e => console.log(e.target.value)} required id="standard-basic" label="Imię" variant="standard" />
                <TextField required id="standard-basic" label="Nazwisko" variant="standard" />
                <TextField required id="standard-basic" label="Email" variant="standard" />
                <TextField required id="standard-basic" label="Numer telefonu" variant="standard" />
                <TextField
                        id="outlined-multiline-static"
                        label="Dodatkowa wiadomość"
                        multiline
                        rows={4}
                        />
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Wyślij wiadomość
                        </Button>
                    </Stack>
            </Box>
            </div>
        </div>
    )
}

export default ContactForm