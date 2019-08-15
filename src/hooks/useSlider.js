import {useState} from 'react';

const useSlider = (e) => {
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(5);

    function onSliderChange(e) {
        if(e.target.name === "rows") {
          setRows(e.target.value);
        } else if(e.target.name === "cols") {
          setCols(e.target.value);
        }
    }

    return {
        rows, 
        cols,
        onSliderChange
    }

}

export default useSlider;


