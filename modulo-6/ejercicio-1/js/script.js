const fixedCosts = prompt("Costos fijos:");
const saleCost = prompt("Precio de venta:");
const variableCosts = prompt("Costos variables");

alert(`Cantidad de ventas: ${fixedCosts / (saleCost - variableCosts)}`);
