import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Button from '@mui/material/Button';
import 'dayjs/locale/pl'; 
import "./BuyTutor.css"


const BuyTutor = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [person, setPerson] = useState('');
    const [lesson, setLesson] = useState('Matematyka');
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [selectedDateTime, setSelectedDateTime] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(phoneNumber, person, lesson, name, lastName, selectedDateTime.$d.toLocaleString())
    }

    dayjs.locale('pl');

    return (
        <div className="buy-tutor">
            <div className='contact-form-title'>
                <span className='contact-form-title1'>Zarezerwuj Korepetycje</span>
                <form className='buy-tutor-form' onSubmit={handleSubmit}>
                    <div className='buy-tutor-form1'>
                        <TextField required onChange={e => setName(e.target.value)} id="standard-basic" label="Imię" variant="standard" />
                        <TextField required onChange={e => setLastName(e.target.value)} id="standard-basic" label="Nazwisko" variant="standard" />
                        <MuiTelInput required focusOnSelectCountry label="Numer telefonu" variant="outlined" value={phoneNumber} onChange={e => setPhoneNumber(e)} defaultCountry="PL" onlyCountries={['PL']} />
                    </div>
                    <div className='buy-tutor-form2'>
                        <TextField type="email" required id="standard-basic" label="Email" variant="standard" />
                        <FormControl required variant="standard" sx={{minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Kim jesteś?</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={person}
                                onChange={e => setPerson(e.target.value)}
                                label="Kim jesteś?"
                                >
                                <MenuItem value={'Uczeń'}>Uczeń</MenuItem>
                                <MenuItem value={'Rodzic'}>Rodzic</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{width:325}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateTimePicker']}>
                                    <DateTimePicker 
                                        value={selectedDateTime} 
                                        onChange={e => setSelectedDateTime(e)} 
                                        ampm={false} 
                                        label="Wybierz dzień i godzinę korepetycji"
                                        format="DD/MM/YYYY HH:mm" 
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                    </div>
                    <div className='buy-tutor-form3'>
                        <div className='buy-tutor-details'>
                            <div className='buy-tutor-details2'>
                                <span>Cena: <span className='buy-tutor-details-text1'>60zł / 60minut</span></span>
                                <FormControl disabled variant="standard" sx={{minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Przedmiot</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={lesson}
                                        onChange={e => setLesson(e.target.value)}
                                        label="Przedmiot"
                                        >
                                        <MenuItem value={'Matematyka'}>Matematyka</MenuItem>
                                        {/* <MenuItem value={'Rodzic'}>Rodzic</MenuItem> */}
                                    </Select>
                                </FormControl>
                            </div>
                            <Button variant="contained" type='submit' color="success">Przejdź do podsumowania</Button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BuyTutor