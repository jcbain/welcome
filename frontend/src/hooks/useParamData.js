import { useState } from 'react';


const stuff = {
    options: [    
        {id: 1, label: 'from', formatted: 'from:'},
        {id: 2, label: 'conversation_id', formatted: 'conversation_id:'},
        {id: 3, label: '#', formatted: '#'},
        {id: 4, label: '$', formatted: '$'},
        {id: 5, label: 'string match', formatted: ''}
    ],
    selection: {id: 5, label: 'string match', formatted: ''},
    value: ''
}

const useParamData = () => {
    const [ paramData, setParamData ] = useState([stuff]);

    const modifyParam = (i, id) => {
        let items = [...paramData]
        const item = {...paramData[i],
            selection: stuff.options.find(d => d.id === id)
        }
        items[i] = item;
        setParamData(items)
    }

    const addParam = () => {
        let items = [...paramData]
        items.push(stuff)
        setParamData(items)
    }

    const removeParam = (i) => {
        let items = [...paramData].filter((d, j) => j !== i);
        setParamData(items);
    }

    const modifyValue = (i, e) => {
        let items = [...paramData];
        const item = {...paramData[i],
            value: e.target.value
        }
        items[i] = item;
        setParamData(items)
    }

    return { paramData, modifyParam, addParam, removeParam, modifyValue };
}

export default useParamData;