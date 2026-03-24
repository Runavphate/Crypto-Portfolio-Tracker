import React from "react";
import "./PortfolioTable.css";

const PortfolioTable = ({ tokens, prices, darkMode }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="portfolio-glass-container">
      <div className="table-header">
        <div className="col-asset">Asset</div>
        <div className="col-portfolio">Portfolio</div>
        <div className="col-price">Price</div>
        <div className="col-total">Total Value</div>
      </div>
      
      <div className="table-body">
        {tokens.length === 0 ? (
          <div className="empty-state">No assets found</div>
        ) : (
          tokens.map((token) => {
            const price = prices[token.id]?.usd || 0;
            const value = price * token.amount;

            return (
              <div className="token-row" key={token.id}>
                {/* Asset Column */}
                <div className="col-asset">
                  <div 
                    className="token-icon" 
                    style={{ background: token.color, boxShadow: `0 0 15px ${token.color}66` }}
                  >
                    {token.symbol[0]}
                  </div>
                  <div className="token-info">
                    <span className="token-name">{token.name}</span>
                    <span className="token-symbol">{token.symbol}</span>
                  </div>
                </div>

                {/* Portfolio Amount Column */}
                <div className="col-portfolio">
                  <span className="token-amount">{token.amount}</span>
                  <span className="token-symbol-sm">{token.symbol}</span>
                </div>

                {/* Price Column */}
                <div className="col-price">
                  <span className="price-value">{formatter.format(price)}</span>
                </div>

                {/* Total Value Column */}
                <div className="col-total">
                  <span className="total-value">{formatter.format(value)}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PortfolioTable;
