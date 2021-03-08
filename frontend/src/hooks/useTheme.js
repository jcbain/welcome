import { useState } from 'react';

import lightTheme from '../theme/lightTheme';

const useTheme = () => {
    const [ theme, setTheme ] = useState(lightTheme);
    
    return { theme }
}

export default useTheme;