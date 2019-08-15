import React, {useState} from 'react';

function Cell() {
    const [url, setUrl] = useState("https://www.fillmurray.com/100/150");
    const BASE = "http://image.tmdb.org/t/p/original/"

    const handleCellClick = () => {
        fetch("https://api.themoviedb.org/3/movie/550?api_key=ed07fde2a29e865fa73860b991476f93")
            .then(res => res.json())
            .then(res => setUrl(BASE + res.poster_path))
    }

    return (
        <div className="cell">
           <img src={url} alt="" onClick={ handleCellClick }></img>
        </div>
    )
}

export default Cell;