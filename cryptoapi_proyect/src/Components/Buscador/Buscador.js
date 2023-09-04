import React from 'react'

// El componente Buscador recibe dos propiedades:
// - buscador: Un array de resultados de búsqueda
// - setSearch: Una función para actualizar el término de búsqueda en App.js
const Buscador = ({ buscador, setSearch }) => {
  return (
    <div className="container mt-4">
      <h1>CoinGecko Coin Search</h1>
      <div className="input-group mb-3">
        {/* Input controlado por el valor de 'buscador' y la función 'setSearch' */}
        <input
          type="text"
          className="form-control"
          placeholder="Search for coins"
          value={buscador} // Mostramos el valor de 'buscador' en el campo de entrada
          onChange={(e) => setSearch(e.target.value)} // Cuando cambia el valor, llamamos a 'setSearch' para actualizarlo
        />
      </div>
      <ul className="list-group">
        {/* Mapeamos los resultados y los mostramos como elementos de lista */}
        {buscador.map((result, index) => (
          <li key={index} className="list-group-item">
            {result.name} ({result.symbol})
          </li>
        ))}
      </ul>
    </div>
  );
}




export default Buscador