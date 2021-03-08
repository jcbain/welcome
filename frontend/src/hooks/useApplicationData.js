import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
    const [ cities, setCities ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    const [ selectedIndex, setSelectedIndex ] = useState(1)


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

    const sendQuery = e => {
        e.preventDefault();
        const params = { selectedCity }

        axios.post('http://localhost:8000/query', params)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }



    return {cities, loaded, selectedCity, cityOptions, setSelectedIndex, sendQuery}
}

export default useApplicationData;