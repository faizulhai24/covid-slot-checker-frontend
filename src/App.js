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
import { searchSlotsHelper, getFreeSlots } from './helpers';
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
    // To add this in the next iteration
    // const [age, setAge] = useState();
    // const [vaccine, setVaccine] = useState();
    // const [feeType, setFeeType] = useState();
    const districtRef = useRef(null)
    const stateRef = useRef(null)
    const [freeSlots, setFreeSlots] = useState(undefined)
    const [fetchingSlots, setFetchingSlots] = useState(false);
    const cowinUrl = 'https://cdn-api.co-vin.in/api/v2/admin/location/';
    const {addToast} = useToasts()

    const onSubmit = values => {
        let copiedValues = JSON.parse(JSON.stringify(values));
        const state_id = values.state.state_id;
        const district_ids = values.district.map(district => {
            return district.district_id
        })
        copiedValues.state_id = state_id;
        copiedValues.district_ids = district_ids;
        delete copiedValues['state'];
        delete copiedValues['district'];
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

        function setSelectedDistricts(options) {
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

    const executeScrollDistrict = () => districtRef.current.scrollIntoView()
    const executeScrollState = () => stateRef.current.scrollIntoView()


    async function searchSlots() {
        setFetchingSlots(true)
        const promise = searchSlotsHelper(selectedDistricts)
        const freeSlots = []

        promise.then((responses) => {
            responses.forEach((resp) => {
                getFreeSlots(resp.data, freeSlots)
            })
            setFetchingSlots(false)
            if (freeSlots.length > 0) {
                setFreeSlots(freeSlots)
            }
        }, () => console.log('Failed to fetch the slots'))
    }

    const classes = useStyles();

    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Styles>
                <h1 className={'font-roboto'}>Search for a vaccination slot in your city!</h1>
                <h3 className={'notice'}>Due to new government API limits, we will not be able to send proper notifications on time.</h3>
                <div className={'notice'}>For people who have already registered, we have deleted your data.</div>

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
                            {
                                fetchingSlots &&
                                    <div>
                                        Fetching slots...
                                    </div>
                            }
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
                                                <div style={{fontSize: '12px'}}>
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

                        </form>
                    )}
                />

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
