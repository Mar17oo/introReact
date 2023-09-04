import React from 'react';

const Buscador = ({ buscador, setSearch }) => {
  return (
    <div className="container mt-4">
      <h1>CoinGecko Coin Search</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for coins"
          value={buscador} 
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="list-group">
        {Array.isArray(buscador) && buscador.length > 0 ? ( // Verifica si buscador es un array y no está vacío
          buscador.map((result, index) => (
            <li key={index} className="list-group-item">
              {result.name} ({result.symbol})
            </li>
          ))
        ) : (
          <li className="list-group-item">No results found</li> // Mensaje si no hay resultados
        )}
      </ul>
    </div>
  );
}

export default Buscador;
