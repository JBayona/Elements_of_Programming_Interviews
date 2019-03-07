/*
Tenemos un arreglo en donde representa el valor de stocks al día, debemos calcular cuánto es la mayor ganancia
que podemos obtener considerando que sólo podemos comprar una vez y vender una vez.

Arreglo temporal de las ganancias por día (tmp)
*/

function buyAndSellStockOnce(stocks) {
  let minStockPrice = Number.MAX_SAFE_INTEGER;
  let todayStockProfit = 0;
  let maxStockPrice = 0;
  let tmp = [];
  
  for(let i = 0; i < stocks.length; i++) {
    todayStockProfit = stock[i] - minStockPrice;
    maxStockPrice = Math.max(maxStockPrice, todayStockProfit);
    minStockPrice = Math.min(stock[i], minStockPrice);
    tmp.push(maxStockPrice);
  }
  
  console.log(tmp); // [0, 5, 5, 20, 20, 20, 30, 30, 30, 30]
  return maxStockPrice;
}

stock = [310, 315, 275, 295, 260, 270, 290, 230, 255, 250];
console.log(buyAndSellStockOnce(stock));
