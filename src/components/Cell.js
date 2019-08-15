import React, {useState} from 'react';

function Cell() {
    const [url, setUrl] = useState("https://www.fillmurray.com/100/150");

    const handleCellClick = () => {
        setUrl("");
    }

    return (
        <div className="cell">
           <img src={url} alt="" onClick={ handleCellClick }></img>
        </div>
    )
}

export default Cell;