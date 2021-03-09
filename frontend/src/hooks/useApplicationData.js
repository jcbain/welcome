import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
    const [ cities, setCities ] = useState([]);
    const [ dates, setDates ] = useState([])
    const [ loaded, setLoaded ] = useState(false);
    const [ selectedIndex, setSelectedIndex ] = useState(1)

    console.log(dates)

    useEffect(() => {
        axios.get('http://localhost:8000/jobs')
            .then(res => {
                setCities(res.data)
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
        const params = { selectedCity }

        axios.post('http://localhost:8000/query', params)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }



    return {cities, loaded, selectedCity, cityOptions, setSelectedIndex, sendQuery, dates, handleDates}
}

export default useApplicationData;