let family = {
  incomes: [2500, 3200, 526],
  expenses:[3200,9000,50,80]
}
function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
  
}
function calculateBalance() {
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);
  const spending = calculateIncomes - calculateExpenses;
  let balanceText = "negativo"
  if (spending >= 0) {
    balanceText = "positivo"
  }
  console.log(`Seu saldo é ${balanceText}:R$${spending.toFixed(2)}`);
}
calculateBalance();