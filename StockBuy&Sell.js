function maxProfit(prices) {
  let buy = prices[0];
  let max_profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else if (prices[i] - buy > max_profit) {
      max_profit = prices[i] - buy;
    }
  }
  return max_profit;
}


//Driver code
let prices = [7, 1, 5, 6, 4];
let n = 5;
let max_profit = maxProfit(prices, n);
console.log(max_profit);
