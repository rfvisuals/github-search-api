import React, { useState, useEffect } from 'react';

const queryAPI = function(e) {
  e.preventDefault();

}

const Search = () => {
  return (
    <div>
    <input type="text" name="text" className="search" placeholder="Github keyword search"/>
    <button type = "button" onClick= {queryAPI}>Search Github</button>

  <li>Stuff</li>
  </div>


  );
}

export default Search;