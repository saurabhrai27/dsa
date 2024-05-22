// Leet code: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// Tuf YT: https://www.youtube.com/watch?v=excAOvwF_Wk&t=3s
// Tuf Article: https://takeuforward.org/data-structure/stock-buy-and-sell/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for(let i = 1; i < prices.length; i++) {
        let cost = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, cost);
        minPrice = Math.min(minPrice, prices[i])
    }

    return maxProfit;
};