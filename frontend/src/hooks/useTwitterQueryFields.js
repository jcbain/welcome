import { useState } from 'react';

const defaultFields = [
    {id: 1, label: 'from'},
    {id: 2, label: 'conversation_id'},
    {id: 3, label: '#'},
    {id: 4, label: '$'},
    {id: 5, label: 'string match'}
]
const useTwitterQueryFields = () => {
    const [ fields, setFields ] = useState(defaultFields);
    const [ selectedIndex, setSelectedIndex ] = useState(1);

    console.log(selectedIndex)

    const selectedField = fields.find(d => d.id === selectedIndex);
    const fieldOptions = fields.filter(d => d.id !== selectedIndex);
    
    console.log(selectedField)
    return { selectedField, fieldOptions, setSelectedIndex }
}

export default useTwitterQueryFields;