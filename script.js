document.addEventListener('DOMContentLoaded', function () {
  const expenseForm = document.getElementById('expense-form');
  const descriptionInput = document.getElementById('description');
  const amountInput = document.getElementById('amount');
  const categoryInput = document.getElementById('category');
  const expenseList = document.getElementById('expense-list');

  expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;

    if (description && amount && category) {
      addExpense(description, amount, category);
      descriptionInput.value = '';
      amountInput.value = '';
      categoryInput.value = '';
    } else {
      alert('Please fill out all fields.');
    }
  });

  function addExpense(description, amount, category) {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${description}</strong> - $${amount.toFixed(2)} - ${category}
    `;
    expenseList.appendChild(li);
  }
});
