import React from 'react';


const Buscador = ({ search, setSearch }) => {
  return (
    <div className="container mt-4  bg-success p-2 text-white text-center" >
      <h1 >Coin Search</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}


export default Buscador;
