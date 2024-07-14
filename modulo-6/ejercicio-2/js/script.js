const totalIncome = prompt("Ingreso total:");

const necessaryExpense = 0.5 * totalIncome;
const optionalExpenses = 0.3 * totalIncome;
const savings = 0.2 * totalIncome;

alert(`
Gastos necesarios: $${necessaryExpense}
Gastos opcionales: $${optionalExpenses}
Ahorro e inversión: $${savings}
`);
