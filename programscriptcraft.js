// finance_portfolio_tracker.js

class Stock {
    constructor(symbol, quantity, purchasePrice) {
        this.symbol = symbol;
        this.quantity = quantity;
        this.purchasePrice = purchasePrice;
        this.currentPrice = null;
    }

    updatePrice(newPrice) {
        this.currentPrice = newPrice;
    }

    calculateProfitLoss() {
        if (this.currentPrice === null) {
            return null;
        }
        return (this.currentPrice - this.purchasePrice) * this.quantity;
    }
}

class Portfolio {
    constructor() {
        this.stocks = [];
    }

    addStock(stock) {
        this.stocks.push(stock);
    }

    updateStockPrice(symbol, newPrice) {
        const stock = this.stocks.find(s => s.symbol === symbol);
        if (stock) {
            stock.updatePrice(newPrice);
        }
    }

    calculateTotalProfitLoss() {
        let totalProfitLoss = 0;
        this.stocks.forEach(stock => {
            const profitLoss = stock.calculateProfitLoss();
            if (profitLoss !== null) {
                totalProfitLoss += profitLoss;
            }
        });
        return totalProfitLoss;
    }
}

// Example usage
const portfolio = new Portfolio();
const stock1 = new Stock('AAPL', 10, 150);
portfolio.addStock(stock1);
portfolio.updateStockPrice('AAPL', 160);
console.log('Total profit/loss:', portfolio.calculateTotalProfitLoss());
