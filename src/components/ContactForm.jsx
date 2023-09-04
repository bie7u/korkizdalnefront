import React, {useState} from "react";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { MuiTelInput } from 'mui-tel-input';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { postData } from "../services/apiService";
import "./ContactForm.css";


const ContactForm = () => {
    const { dynamicWord } = useParams();
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [message, setMessage] = useState("")
    const [acceptRules, setAcceptRules]= useState(false)
    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formErrorSubmitted, setFormErrorSubmitted] = useState(false);

    const handlePhoneNumber = (phoneNumber) => {
        setPhoneNumber(phoneNumber)
        setPhoneNumberError('');
    }

    const resetForm = () => {
        setName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setAcceptRules(false);
      };

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true);
        const digitsOnly = phoneNumber.replace(/\D/g, '');
        if (digitsOnly.length < 9) {
            setPhoneNumberError('Numer telefonu musi zawierać 9 cyfr.');
            setLoading(false)
            return
        }
        const formData = {
            "name": name,
            "last_name": lastName,
            "email": email,
            "phone_number": phoneNumber,
            "additional_message": message,
            "accept_rules": acceptRules,
            "lesson": dynamicWord
        }
        try {
            const response = await postData('management/contact_form/', formData);
            console.log('Response from server:', response);
            resetForm();
            setFormSubmitted(true);
        } catch (error) {
            console.error('Error posting data:', error);
            setFormErrorSubmitted(true)
        }
        setLoading(false)
    }

    return (
        <div className='contact-form'>
            <div className='contact-form-title'>
                <span className='contact-form-title1'>Formularz Kontaktowy</span>
            </div>
            <div >
            <div className='tesdddt'>
            <form className="contact-form-fields" autoComplete="off" onSubmit={handleSubmit}>
                <TextField onChange={e => setName(e.target.value)} value={name} required id="standard-basic" label="Imię" variant="standard" />
                <TextField onChange={e => setLastName(e.target.value)} value={lastName} required id="standard-basic" label="Nazwisko" variant="standard" />
                <TextField type="email" onChange={e => setEmail(e.target.value)} value={email} required id="standard-basic" label="Email" variant="standard" />
                <MuiTelInput focusOnSelectCountry label="Numer telefonu" variant="outlined" value={phoneNumber} onChange={handlePhoneNumber} defaultCountry="PL" onlyCountries={['PL']} required />
                {phoneNumberError && <p style={{ color: 'red' }}>{phoneNumberError}</p>}
                <TextField
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        id="standard-multiline-flexible"
                        label="Dodatkowa wiadomość"
                        multiline
                        maxRows={4}
                        variant="standard"
                        />
                <FormControlLabel required control={<Checkbox checked={acceptRules} onChange={e => setAcceptRules(e.target.checked)} />} label="Akceptuję regulamin" />
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
                <Alert style={{ display: formSubmitted ? "flex" : "none" }} severity="success">Formularz został wysłany, skontaktujemy się najszybciej jak to możliwe!</Alert>
                <Alert style={{ display: formErrorSubmitted ? "flex" : "none" }} severity="error">Nie udało się wysłać formularza, spróbuj ponownie lub skontaktuj się z nami poprzez numer telefonu lub adres email.</Alert>
            </form>
            </div>
            </div>
        </div>
    )
}

export default ContactForm