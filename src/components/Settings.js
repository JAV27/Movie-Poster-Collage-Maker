import React, {useState} from 'react';

function Settings({rows, cols, onSliderChange, hide}) {

  let inputVal = "";
  let [titles, updateTitles] = useState([]);

  const onChange = (e) => {
    inputVal = e.target.value;
  }

  const onSubmit = () => {
    fetch("https://api.themoviedb.org/3/search/movie?api_key=ed07fde2a29e865fa73860b991476f93&language=en-US&query= " + inputVal + "&page=1&include_adult=false")
      .then((res) => res.json())
      .then((res) => {
        let titles = res.results.map(movie => <li> {movie.original_title} </li>);
        updateTitles(titles);
      })
  }

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
        <div className={`search ${hide ? "show" : ""}`}>
          <input type="search" name="search" onChange={onChange}/> 
          <div className="submit" onClick={onSubmit}>Submit</div>
        </div>
        <div className="results">
          <ul>
            {titles}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Settings;
