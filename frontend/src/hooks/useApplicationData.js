import { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

const useApplicationData = (paramData) => {
    const defaultDates = [ moment('2015/01/01'), moment('2020/01/01') ]

    const [ cities, setCities ] = useState([]);
    const [ dates, setDates ] = useState(defaultDates)
    const [ loaded, setLoaded ] = useState(false);
    const [ runningStatus, setRunningStatus ] = useState(false)
    const [ selectedIndex, setSelectedIndex ] = useState(1)

    console.log(dates)

    useEffect(() => {
        axios.get('http://localhost:8000/jobs')
            .then(res => {
                setRunningStatus(res.data.runningStatus)
                setCities(res.data.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const selectedCity = loaded && cities.find(d => d.id === selectedIndex)
    const cityOptions = loaded && cities.filter(d => d.id !== selectedIndex)

    const handleDates = e => {
        if(e) {
            const [ from, to ] = e;
            const newDates = [ from._d, to._d ]
            setDates(newDates)
        }
         
    }

    const sendQuery = e => {
        e.preventDefault();
        const params = { selectedCity, paramData, dates }

        axios.post('http://localhost:8000/query', params)
            .then(resp => {
                console.log(resp)
                setRunningStatus(resp.data.runningStatus)
            })
            .catch(err => console.log(err))
    }



    return {cities, loaded, selectedCity, cityOptions, setSelectedIndex, sendQuery, dates, handleDates, defaultDates, runningStatus}
}

export default useApplicationData;