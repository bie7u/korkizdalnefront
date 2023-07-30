import React from "react";
import TextField from '@mui/material/TextField';
import { MuiTelInput } from 'mui-tel-input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import 'dayjs/locale/pl'; 
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./CheckoutForm.css";


const CheckoutForm = () => {
    
    dayjs.locale('pl');

    return (
        <div className='checkout-form'>
            <h1>Dane użytkownika</h1>
            <div className="checkout-form-first-column">
                <TextField id="outlined-basic" label="Imię"  variant="outlined" />
                <TextField id="outlined-basic" label="Nazwisko"  variant="outlined" />
                <TextField id="outlined-basic" label="Email"  variant="outlined" />
                <MuiTelInput focusOnSelectCountry label="Numer telefonu" variant="outlined" defaultCountry="PL" onlyCountries={['PL']} required />
                        <FormControl required variant="standard" sx={{minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Kim jesteś?</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="Kim jesteś?"
                                >
                                <MenuItem value={'Uczeń'}>Uczeń</MenuItem>
                                <MenuItem value={'Rodzic'}>Rodzic</MenuItem>
                            </Select>
                        </FormControl>
            </div>
            <h1>Adres</h1>
            <div className="checkout-form-first-column">
                <TextField id="outlined-basic" label="Ulica i numer"  variant="outlined" />
                <TextField id="outlined-basic" label="Miejscowość"  variant="outlined" />
                <TextField id="outlined-basic" label="Kod pocztowy"  variant="outlined" />
            </div>
            <h1>Szczegóły Korepetycji</h1>
            <div className="checkout-form-first-column">
                <FormControl sx={{width:325}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateTimePicker']}>
                            <DateTimePicker 
                                ampm={false} 
                                label="Wybierz dzień i godzinę korepetycji"
                                format="DD/MM/YYYY HH:mm" 
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                </FormControl>
                <FormControl disabled variant="standard" sx={{minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Przedmiot</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={'Matematyka'}
                            label="Przedmiot"
                            >
                            <MenuItem value={'Matematyka'}>Matematyka</MenuItem>
                            {/* <MenuItem value={'Rodzic'}>Rodzic</MenuItem> */}
                        </Select>
                </FormControl>
                </div>
                <div className="checkout-form-first-column">
                <FormControlLabel required control={<Checkbox />} label="Akceptuję regulamin" />
                </div>
                <LoadingButton
                  size="small"
                  type='submit'
                  endIcon={<SendIcon />}
                //   loading={loading}
                  loadingPosition="end"
                  variant="contained"
                >
                  <span>Zapłać</span>
                </LoadingButton>
            

        </div>
    )
}

export default CheckoutForm