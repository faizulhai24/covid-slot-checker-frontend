import axios from "axios";

export default function searchSlotsHelper(district_ids) {
    const dates = []
    const NUM_OF_WEEKS = 5
    const promises = []
    const searchResults = []

    for (let i = 0; i < NUM_OF_WEEKS; i++) {
        let date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 * i).toJSON().slice(0, 10).split('-').reverse().join('/')
        dates.push(date)
    }

    for (let i = 0; i < district_ids.length; i++) {

        for (let j = 0; j < dates.length; j++) {
            console.log(dates[j])
            const promises = []
            let url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_ids[i]}&date=${dates[j]}`
            promises.push(axios.get(url))
        }
    }

    Promise.all(promises)
        .then((response) => {
            response.forEach((data) => {
                let centers = data['centers']
                for (let cIdx = 0; cIdx < centers.length; cIdx++) {
                    let center = centers[cIdx]
                    let sessions = center['sessions']
                    for (let sIdx = 0; sIdx < sessions.length; sIdx++) {
                        let session = sessions[sIdx]
                        if (session['min_age_limit'] === 18 && session['available_capacity'] > 1) {
                            searchResults.push({
                                centerName: center['name'],
                                districtName: center['district_name'],
                                date: session['date'],
                                availableCapacity: session['available_capacity'],
                                vaccine: session['vaccine'],
                                feeType: center['fee_type']
                            })
                        }
                    }
                }
            })
        }, () => console.log('Failed to fetch the slots'))

    return searchResults
};

