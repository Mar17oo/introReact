import React from 'react';

const Coins = ({ data }) => {
  return (
    <table className='table'>
      <thead>
        <tr className="table-primary"> 
        <th>#</th>
          <th>Coin</th>
          <th>Symbol</th>
          <th>Current Price (USD)</th>
          <th>Market Cap (USD)</th>
          <th>24h Change (%)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin, index) => (
          <tr key={index} className="table-danger">
            <td>{coin.market_cap_rank}</td>
            <td>{coin.name}</td>
            <td className='fw-light fs-6' >{coin.symbol}</td>
            <td>{coin.current_price}</td>
            <td>{coin.market_cap}</td>
            <td>{coin.price_change_percentage_24h}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Coins;

