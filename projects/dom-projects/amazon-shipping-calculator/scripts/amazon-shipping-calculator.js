function addShippingToCost(cost) {
  return (cost < 4000) ? (cost + 1000) : cost;
}

function showCost() {
  const inputElement = document.querySelector('.js-cost-input');

  // Convert the numbers to cents by * 100.
  const cost = Number(inputElement.value) * 100;

  document.querySelector('.js-cost').innerHTML = `$${addShippingToCost(cost) / 100}`; // Convert back to dollars at the end.
}

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    showCost();
  }
}