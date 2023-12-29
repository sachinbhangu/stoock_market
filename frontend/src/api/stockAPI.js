const API_KEY = 'pk_cfc2766ab4d7480bb42d25b875cd64da';
const BASE_URL = 'https://api.iex.cloud/v1/data/CORE';

export const fetchStockData = async (symbol) => {
  try {
    const response = await fetch(`${BASE_URL}/HISTORICAL_PRICES/${symbol}?token=${API_KEY}`);
    console.log(response)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
    console.error('Could not fetch stock data:', error);
  }
};