import React from 'react';

class Settings extends React.Component {
  render() {
    return (
        <div className="settings">
          <div className="container">
            <div class="slider">
              <label for="rows">Number of Rows</label>
              <input type="range" id="rows" min="1" max="5"/>
            </div>
            <div class="slider">
              <label for="cols">Number of Columns</label>
              <input type="range" id="cols" min="1" max="5"/>
            </div>
          </div>
        </div>
    );
  }
}

export default Settings;
