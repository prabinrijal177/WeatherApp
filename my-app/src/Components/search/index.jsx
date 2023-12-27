import React from 'react'

export default function Search({search, setSearch, handleSearch}) {
  return (
    <div className='search-box'>
        <input type="text"  placeholder='Enter City' name='search' value={search} onChange={(event)=> setSearch(event.target.value)}/>
      <button  onClick={handleSearch}>Search</button>
    </div>
  );
}
