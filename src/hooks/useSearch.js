import {useState} from 'react';

const useSearch = () => {
    const [hide, setHide] = useState(false);

    function toggle() {
        setHide(!hide);
    }

    return {
        hide,
        toggle
    }

}

export default useSearch;


