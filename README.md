# Crypto Portfolio Tracker 💸🚀

A sleek, modern web application that allows you to effortlessly track your cryptocurrency assets in real-time. Built with React, it dynamically calculates your total portfolio value and features a premium Glassmorphism UI.

![Crypto Tracker UI Prototype Overview](https://img.shields.io/badge/UI-Glassmorphism-8b5cf6?style=flat-square)
![React Version](https://img.shields.io/badge/React-18.2-61dafb?style=flat-square)

---

## ✨ Features

- **Real-Time Pricing:** Uses Axios to fetch live cryptocurrency data from external APIs (e.g., CoinGecko) to keep your portfolio valuations accurate.
- **Auto-Refreshing:** Automatically polls the API every 60 seconds to ensure your dashboard is always reflecting current market prices without needing manual page refreshes.
- **Premium Aesthetics:** 
  - **Glassmorphism Design:** Beautiful frosted glass containers overlaying deep cosmic animated mesh gradients.
  - **Dark / Light Mode:** A sleek toggle button switches the entire app theme flawlessly, persisting your preference automatically.
  - **Micro-Animations:** Interactive token rows that react smoothly on hover to create an engaging experience.
- **Modern Typography:** Styled with Google Fonts (`Outfit` for bold metrics, `Inter` for clean data).

## 🛠️ Technology Stack

- **Frontend Environment:** React.js (Create React App)
- **Styling:** Custom Vanilla CSS (No dependencies, fully customized Flex-Grid layout)
- **Data Fetching:** Axios

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Runavphate/Crypto-Portfolio-Tracker.git
   cd Crypto-Portfolio-Tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *(Note: Overwrite legacy peer dependencies if prompted by your package manager in `npm v7+`)*

3. **Start the development server:**
   ```bash
   npm start
   ```
   
4. **Build for production:**
   ```bash
   npm run build
   ```

Navigate to [http://localhost:3000](http://localhost:3000) to view the tracker.

## 🎨 Modifying Your Portfolio
To customize the tokens tracked in the app, simply modify the `tokens` array located in `src/App.js`. Update the `id` (must match the API endpoint), `symbol`, `amount`, and `color` properties!

```javascript
{ id: "bitcoin", name: "Bitcoin", symbol: "BTC", amount: 0.5, color: "#f7931a" }
```

## 📜 License
Built for personal portfolio tracking. Free to use and distribute.
