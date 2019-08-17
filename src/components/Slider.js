import React from 'react';

function Slider({val, type, onSliderChange}) {
    return (
        <div className="slider">
          <label htmlFor={type}>Number of {type}</label>
          <input type="range" name={type} min="1" max="5" value={rows} onChange={(e) => onSliderChange(e)}/>
          {val}
        </div>
    )
}

export default Slider;