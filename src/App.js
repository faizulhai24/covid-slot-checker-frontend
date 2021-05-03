/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useEffect, useState} from 'react'
import Styles from './Styles'
import {Field, Form,} from 'react-final-form'
import {OnChange} from 'react-final-form-listeners'
import axios from "axios";
import _get from 'lodash/get'
import Select from 'react-select'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TextField from 'material-ui/TextField'
import { ToastProvider, useToasts } from 'react-toast-notifications';


const App = () => {
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [requestOTP, setRequestOTP] = useState(false);
    const [otp, setOTP] = useState(0);
    const [otpDone, setOTPDone] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const cowinUrl = 'https://cdn-api.co-vin.in/api/v2/admin/location/';
    const baseUrl = 'https://cowin-webserver-slotlocker2.cloud.okteto.net/'
    const { addToast } = useToasts()

    const onSubmit = values => {
        if (requestOTP)
            return
        let copiedValues = JSON.parse(JSON.stringify(values));
        const state_id = values.state.state_id;
        const district_ids = values.district.map(district => {
            return district.district_id
        })
        copiedValues.state_id = state_id;
        copiedValues.district_ids = district_ids;
        delete copiedValues['state'];
        delete copiedValues['district'];

        setPhoneNumber(copiedValues.phone_number)
        axios.post(`${baseUrl}api/v1/user/`, copiedValues).then((response) => {
            setRequestOTP(true);
            addToast('Please Enter the OTP received on your phone number', {
                appearance: 'success',
            })
        }, (error) => {
            console.log(error);
            const toastMessage = _get(error, 'response.data.message', 'Something went wrong')
            addToast(toastMessage, {
                appearance: 'error',
            })
        });
    }

    function getAllStates() {
        axios.get(`${cowinUrl}states`)
            .then((response) => {
                if (response) {
                    const states = _get(response, 'data.states', []);
                    setStates(states)
                }
            })
    }

    function getAllDistricts(stateId) {
        axios.get(`${cowinUrl}districts/${stateId}`)
            .then((response) => {
                if (response) {
                    const districts = _get(response, 'data.districts', []);
                    setDistricts(districts)
                }
            })
    }

    useEffect(() => {
        getAllStates()
    }, [])

    const ReactSelectStateAdapter = ({input, options, ...rest}) => {
        return (
            <Select placeholder='Select State...'
                    {...input}
                    options={options}
                    getOptionLabel={(option) => option.state_name}
                    getOptionValue={(option) => option.state_id}
                    {...rest}
                    searchable/>

        )
    }

    const ReactSelectDistrictAdapter = ({input, options, ...rest}) => {
        return (
            <Select
                placeholder='Select District...'
                isMulti
                {...input}
                options={districts}
                getOptionLabel={(option) => option.district_name}
                getOptionValue={(option) => option.district_id}
                {...rest}
                searchable/>

        )
    }

    const TextFieldAdapter = ({input, meta, ...rest}) => (
        <TextField
            {...input}
            {...rest}
            onChange={(event, value) => input.onChange(value)}
            errorText={meta.touched ? meta.error : ''}
        />
    )

    const required = value => (value ? undefined : 'Required')

    function submitOTP() {
        const data = {"phone_number": phoneNumber, "otp": otp};
        axios.post(`${baseUrl}api/v1/user/otp/submit/`, data).then((response) => {
            setOTPDone(true);
            addToast('Successfully registered for a WhatsApp notification. Stay Safe!', {
                appearance: 'success',
            })

        }, (error) => {
            const toastMessage = _get(error, 'response.data.message', 'Please enter correct OTP')
            addToast(toastMessage, {
                appearance: 'error',
            })
        });
    }

    function setOTPValue(e) {
        setOTP(e.target.value)
    }

    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Styles>
                <h1>Find a Vaccination Slot on Co-Win</h1>
                <h2>Get notified via WhatsApp whenever a slot becomes available</h2>
                <h2><img src={"logo.jpeg"} style={{height : '277px', width : '400px'}} /></h2>
                {!otpDone ?
                    <Form
                        onSubmit={onSubmit}
                        render={({handleSubmit, form, submitting, pristine, values}) => (
                            <form onSubmit={handleSubmit}>
                                <div style={{marginTop: '20px'}}>
                                    <Field
                                        name="state"
                                        component={ReactSelectStateAdapter}
                                        validate={required}
                                        options={states}
                                    />
                                </div>
                                <OnChange name="state">
                                    {(value, previous) => {
                                        getAllDistricts(value.state_id)
                                    }}
                                </OnChange>
                                <div style={{marginTop: '20px'}}>
                                    <Field
                                        name="district"
                                        component={ReactSelectDistrictAdapter}
                                        validate={required}
                                        options={districts}

                                    />
                                </div>

                                <div className='textfield'>
                                    <Field
                                        name="first_name"
                                        component={TextFieldAdapter}
                                        validate={required}
                                        hintText="Name"
                                        floatingLabelText="Name"
                                    />
                                </div>

                                <div className='textfield'>
                                    <Field
                                        name="phone_number"
                                        component={TextFieldAdapter}
                                        validate={required}
                                        hintText="Phone Number"
                                        floatingLabelText="Phone Number (no country code)"
                                    />
                                </div>

                                <div style={{marginTop: '20px'}}>
                                    <Field name="message_consent" component="input" type="checkbox"/>
                                    <label>
                                        Allow updates on Whatsapp
                                    </label>
                                </div>

                                {requestOTP &&
                                <div>
                                    <TextField
                                        variant="standard"
                                        name="otp"
                                        hintText='OTP'
                                        floatingLabelText='OTP'
                                        onChange={setOTPValue}
                                    />
                                    <button type='submit' onClick={submitOTP}>
                                        Submit OTP
                                    </button>
                                </div>}

                                {!requestOTP &&
                                <div className="buttons">
                                    <button type="submit" disabled={submitting}>
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={form.reset}
                                        disabled={submitting || pristine}
                                    >
                                        Reset
                                    </button>
                                </div>}
                            </form>
                        )}
                    />
                    :
                    <h2>Successfully registered for a WhatsApp notification. Stay Safe!</h2>
                }
            </Styles>
        </MuiThemeProvider>
    )
}

const ToastApp = () => (
    <ToastProvider autoDismiss={true}>
        <App />
    </ToastProvider>
)



export default ToastApp;
