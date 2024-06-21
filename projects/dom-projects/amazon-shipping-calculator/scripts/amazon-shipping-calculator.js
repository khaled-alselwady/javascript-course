function addShippingToCost(cost) {
  return (cost < 4000) ? (cost + 1000) : cost;
}

function showCost() {
  const inputElement = document.querySelector('.js-cost-input');

  // Convert the numbers to cents by * 100.
  const cost = Number(inputElement.value) * 100;

  handleCostElement(cost);
}

function handleCostElement(cost) {
  const costElement = document.querySelector('.js-cost');

  if (cost < 0) {
    costElement.innerHTML = 'Error: cost cannot be less than $0';
    costElement.classList.add('is-input-negative');
  }
  else {
    costElement.innerHTML = `$${addShippingToCost(cost) / 100}`; // Convert back to dollars at the end.
    costElement.classList.remove('is-input-negative');
  }
}

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    showCost();
  }
}