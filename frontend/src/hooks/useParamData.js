import { useState } from 'react';

import useTwitterQueryFields from './useTwitterQueryFields';

const useParamData = () => {
    const defaultData = useTwitterQueryFields()
    const [ paramData, setParamData ] = useState([defaultData]);

    return { paramData };
}

export default useParamData;