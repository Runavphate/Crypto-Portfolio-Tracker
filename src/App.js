import React, { useEffect, useState } from "react";
import PortfolioTable from "./components/PortfolioTable";
import { fetchPrices } from "./utils/fetchPrices";
import "./App.css";

function App() {
  const [prices, setPrices] = useState({});
  const [darkMode, setDarkMode] = useState(true);

  const tokens = [
    { id: "bitcoin", name: "Bitcoin", symbol: "BTC", amount: 0.5, color: "#f7931a" },
    { id: "ethereum", name: "Ethereum", symbol: "ETH", amount: 2, color: "#627eea" },
    { id: "solana", name: "Solana", symbol: "SOL", amount: 10, color: "#14f195" },
    { id: "cardano", name: "Cardano", symbol: "ADA", amount: 100, color: "#0033ad" },
    { id: "polkadot", name: "Polkadot", symbol: "DOT", amount: 50, color: "#e6007a" },
    { id: "dogecoin", name: "Dogecoin", symbol: "DOGE", amount: 1000, color: "#c2a633" },
    { id: "avalanche-2", name: "Avalanche", symbol: "AVAX", amount: 20, color: "#e84142" },
    { id: "chainlink", name: "Chainlink", symbol: "LINK", amount: 30, color: "#2a5ada" },
    { id: "uniswap", name: "Uniswap", symbol: "UNI", amount: 25, color: "#ff007a" },
    { id: "litecoin", name: "Litecoin", symbol: "LTC", amount: 5, color: "#345d9d" },
  ];

  const ids = tokens.map((token) => token.id);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if(darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  useEffect(() => {
    const getPrices = async () => {
      const fetched = await fetchPrices(ids);
      setPrices(fetched);
    };
    getPrices();
    const interval = setInterval(getPrices, 60000);
    return () => clearInterval(interval);
  }, [ids]);

  const toggleMode = () => setDarkMode((prev) => !prev);

  const totalValue = tokens.reduce((sum, token) => {
    const price = prices[token.id]?.usd || 0;
    return sum + (price * token.amount);
  }, 0);

  const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

  return (
    <div className="app-container">
      <header className="header">
        <div className="title-container">
          <h1>Crypto Portfolio</h1>
          <p>Portfolio Balance: <span style={{color: darkMode ? '#fff' : '#000', fontWeight: '800', fontFamily: 'Outfit, sans-serif'}}>{formatter.format(totalValue)}</span></p>
        </div>
        <button onClick={toggleMode} className="mode-toggle">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>
      <main className="content">
        <PortfolioTable tokens={tokens} prices={prices} darkMode={darkMode} />
      </main>
    </div>
  );
}

export default App;
