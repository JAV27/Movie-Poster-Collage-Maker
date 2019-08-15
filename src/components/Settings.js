import React from 'react';

function Settings({rows, cols, onSliderChange}) {
  return (
    <div className="settings">
      <div className="container">
        <div className="slider">
          <label htmlFor="rows">Number of Rows</label>
          <input type="range" name="rows" min="1" max="5" value={rows} onChange={(e) => onSliderChange(e)}/>
          {rows}
        </div>
        <div className="slider">
          <label htmlFor="cols">Number of Columns</label>
          <input type="range" name="cols" min="1" max="8" value={cols} onChange={(e) => onSliderChange(e)}/>
          {cols}
        </div>
      </div>
    </div>
  )
}

export default Settings;
