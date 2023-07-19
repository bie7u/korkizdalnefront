import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { MuiTelInput } from 'mui-tel-input'
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./ContactForm.css"


const ContactForm = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false);

    const handlePhoneNumber = (phoneNumber) => {
        setPhoneNumber(phoneNumber)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, lastName, email, phoneNumber, message)
        setLoading(true);
    }

    return (
        <div className='contact-form'>
            <div className='contact-form-title'>
                <span className='contact-form-title1'>Formularz Kontaktowy</span>
            </div>
            <div >
            <form className="contact-form-fields" autoComplete="off" onSubmit={handleSubmit}>
                <TextField onChange={e => setName(e.target.value)} required id="standard-basic" label="Imię" variant="standard" />
                <TextField onChange={e => setLastName(e.target.value)} required id="standard-basic" label="Nazwisko" variant="standard" />
                <TextField type="email" onChange={e => setEmail(e.target.value)} required id="standard-basic" label="Email" variant="standard" />
                <MuiTelInput focusOnSelectCountry label="Numer telefonu" variant="outlined" value={phoneNumber} onChange={handlePhoneNumber} defaultCountry="PL" onlyCountries={['PL']} required />
                <TextField
                        onChange={e => setMessage(e.target.value)}
                        id="standard-multiline-flexible"
                        label="Dodatkowa wiadomość"
                        multiline
                        maxRows={4}
                        variant="standard"
                        />
                <FormControlLabel required control={<Checkbox />} label="Akceptuję regulamin" />
                <LoadingButton
                  size="small"
                  type='submit'
                  endIcon={<SendIcon />}
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                >
                  <span>Wyślij wiadomość</span>
                </LoadingButton>
            </form>
            </div>
        </div>
    )
}

export default ContactForm