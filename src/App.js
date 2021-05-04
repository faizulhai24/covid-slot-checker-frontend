/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useEffect, useRef, useState} from 'react'
import Styles from './Styles'
import {Field, Form,} from 'react-final-form'
import {OnChange} from 'react-final-form-listeners'
import axios from "axios";
import _get from 'lodash/get'
import Select from 'react-select'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TextField from 'material-ui/TextField'
import {ToastProvider, useToasts} from 'react-toast-notifications';
import searchSlotsHelper from './helpers';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from '@material-ui/core/styles';

let selectedDistricts;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  availability: {
    color: '#2e2e2e',
    fontSize: '12px',
    backgroundColor: ' #a9d18e',
    padding: '0 10px',
    display: 'flex',
    borderRadius: '50px',
    justifyContent: 'center'
  },
  paid: {
    color: '#fff',
    fontSize: '9px',
    backgroundColor: '#2152b3',
    borderRadius: '20px',
    padding: '2px 5px',
  }
}));

const App = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [requestOTP, setRequestOTP] = useState(false);
  const districtRef = useRef(null)
  const stateRef = useRef(null)
  const [otp, setOTP] = useState(0);
  const [freeSlots, setFreeSlots] = useState(undefined)
  const [otpDone, setOTPDone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [slotSearchSuccess, setSlotSearchSuccess] = useState(false);
  const cowinUrl = 'https://cdn-api.co-vin.in/api/v2/admin/location/';
  const baseUrl = 'https://cowin-webserver-slotlocker2.cloud.okteto.net/'
  const {addToast} = useToasts()

  const onSubmit = values => {
    if (requestOTP || !slotSearchSuccess)
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

    if (copiedValues.phone_number.length !== 10) {
      addToast("Please enter a 10 digit phone number without country code", {
        appearance: 'error',
      })
      return;
    }

    if (!copiedValues.message_consent) {
      addToast("Please allow updates on Whatsapp to register for notification", {
        appearance: 'error',
      })
      return;
    }

    axios.post(`${baseUrl}api/v1/user/`, copiedValues).then((response) => {
      setRequestOTP(true);
      addToast('Please Enter the OTP received on your WhatsApp', {
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
    console.log(options, rest, input)

    function setSelectedDistricts(options) {
      console.log(options);
      selectedDistricts = options.map(district => {
        return district.district_id
      })
      input.onChange(options)
    }

    return (
        <Select
            placeholder='Select District...'
            isMulti
            {...input}
            options={districts}
            getOptionLabel={(option) => option.district_name}
            getOptionValue={(option) => option.district_id}
            onChange={(input, options) => setSelectedDistricts(input, options)}
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

  const executeScrollDistrict = () => districtRef.current.scrollIntoView()
  const executeScrollState = () => stateRef.current.scrollIntoView()


  function searchSlots() {
    const freeSlots = searchSlotsHelper(selectedDistricts)
    console.log(freeSlots)
    setSlotSearchSuccess(true);
    if (freeSlots.length > 0) {
      setFreeSlots(freeSlots)
    }
  }

  const classes = useStyles();

  function knowMore() {
    addToast("We are asking you to do this because of existing Whatsapp policy where a number cannot reach out to more than 1000 new users per day. When you message us, Whatsapp does not count it against this quota. ", {
      appearance: 'info',
      autoDismiss: false,
      placement: 'bottom-right'
    })
  }

  return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Styles>
          <h1 className={'font-roboto'}>Get notified on WhatsApp when a vaccination slot is available in your city!</h1>
          <h1 className={'font-roboto'}>For 18+ only</h1>
          {!otpDone &&
          <h2 className={'font-roboto'}>Register below & relax, while we scan Co-win for available slots</h2>}
          {!otpDone ?
              <Form
                  onSubmit={onSubmit}
                  render={({handleSubmit, form, submitting, pristine, values}) => (
                      <form onSubmit={handleSubmit}>
                        <div style={{marginTop: '20px'}} ref={stateRef} onFocus={executeScrollState}>
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
                        <div style={{marginTop: '20px'}} ref={districtRef} onFocus={executeScrollDistrict}>
                          <Field
                              name="district"
                              component={ReactSelectDistrictAdapter}
                              validate={required}
                              options={districts}

                          />
                        </div>
                        <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
                          <button type='submit' onClick={searchSlots}>
                            Search
                          </button>
                        </div>
                        {freeSlots &&
                        <div className={classes.root}>
                          <Grid container spacing={1}>
                            {freeSlots.map(freeSlot => {
                              return <Grid item xs>
                                <Paper className={classes.paper}>
                                  <div>
                                    <label>{freeSlot.centerName}</label>
                                  </div>
                                  <div style={{fontSize: '12px'}}>
                                    <label>{freeSlot.districtName}</label>
                                  </div>
                                  <div>
                                    <label>{freeSlot.date}</label>
                                  </div>
                                  <div className={classes.availability}>
                                    <label>{freeSlot.availableCapacity}</label>
                                  </div>
                                  <div style = {{fontSize: '12px'}}>
                                    <label>{freeSlot.vaccine}</label>
                                  </div>
                                  <div className={classes.paid}>
                                    <label>{freeSlot.feeType}</label>
                                  </div>
                                </Paper>
                              </Grid>
                            })
                            }
                          </Grid>
                        </div>
                        }
                        <div className={classes.root}>
                          <Grid container spacing={1}>
                            {

                            }
                          </Grid>
                        </div>
                        {slotSearchSuccess &&
                        <div>

                          <div>
                            <label>No Free slots available. Please register to get notified when a slot opens up</label>
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
                              Allow updates on WhatsApp
                            </label>
                          </div>

                          {!requestOTP &&
                          <div style={{marginTop: '20px'}}>

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
                            </div>
                            <div style={{marginTop: '10px', fontSize: '12px'}} className={'center-align'}>
                              <label>
                                Don't worry! Your data is safe with us. You can delete it anytime you want.
                              </label>
                            </div>

                          </div>}
                        </div>
                        }

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
                          <div style={{marginTop: '10px', fontSize: '14px'}} className={'center-align'}>
                            <label>In case you don't receive the OTP, please click &nbsp;
                              <a href="http://api.whatsapp.com/send?phone=918047107750&text=Notify%20Me" target="_blank" rel="noopener noreferrer">here</a> &nbsp;
                               and hit send and you'll be registered.
                            </label>
                              <div style={ {color: 'blue', textDecoration: 'underline'}} onClick={knowMore}>Know More</div>
                          </div>
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
      <App/>
    </ToastProvider>
)


export default ToastApp;
