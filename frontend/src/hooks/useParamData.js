import { useState } from 'react';


const stuff = {
    options: [    
        {id: 1, label: 'from'},
        {id: 2, label: 'conversation_id'},
        {id: 3, label: '#'},
        {id: 4, label: '$'},
        {id: 5, label: 'string match'}
    ],
    selection: {id: 1, label: 'from'},


}

const useParamData = () => {
    const [ paramData, setParamData ] = useState([stuff]);
    console.log(paramData)
    const modifyParam = (i, id) => {
        let items = [...paramData]
        let item = {...paramData[i],
            selection: stuff.options.find(d => d.id === id)
        }
        items[i] = item;
        setParamData(items)
    }

    return { paramData, modifyParam };
}

export default useParamData;