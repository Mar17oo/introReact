import React, {useEffect, useState} from 'react'
import Buscador from './Components/Buscador/Buscador'
import Coin from './Components/Coins/Coins'

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => {
        // Almacenar los datos en el estado
        setData(data);
      })
      .catch(error => console.error('Error', error));
  }, []);

  return (
    <div className="container my-6 " >
      <Buscador search={search} setSearch={setSearch} />
      <Coin data={data} />
    </div>
  );
}


export default App;
