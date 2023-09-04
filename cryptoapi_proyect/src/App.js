import React, {useEffect, useState} from 'react'
import Buscador from './Components/Buscador/Buscador';


function App() {
  // Estado para rastrear el término de búsqueda del usuario
  const [search, setSearch] = useState('');
  // Estado para almacenar los resultados de la búsqueda
  const [results, setResults] = useState([]);

  // useEffect se utiliza para realizar la búsqueda cada vez que cambia el search
  useEffect(() => {
    // Si el término de búsqueda está vacío, se pueden borrar los resultados.
    if (search.trim() === '') {
      setResults([]);
      return;
    }

    // Realiza una solicitud a la API de CoinGecko con el término de búsqueda
    fetch(`https://api.coingecko.com/api/v3/search?${new URLSearchParams({ q: search })}`)
      .then(response => response.json())
      .then(data => {
        // Almacena los resultados de la búsqueda en el estado results
        setResults(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [search]);

  // TENEMOS NUESTROS COMPONENTES
  return (
    <div className="container">
      {/* Pasamos el array a la prop 'buscador' */}
      <Buscador buscador={results} setSearch={setSearch} />
    </div>
  );
}

export default App;
