document
  .getElementById("calculate-btn")
  .addEventListener("click", function (event) {
    const income = document.getElementById("input-field").value;
    const foodExpenses = document.getElementById("food-expenses").value;
    const rentExpenses = document.getElementById("rent-expenses").value;
    const clothesExpenses = document.getElementById("clothes-expenses").value;
    const totalExpenses =
      parseInt(foodExpenses) +
      parseInt(rentExpenses) +
      parseInt(clothesExpenses);
    document.getElementById("total-expenses").innerText = totalExpenses;
    const balance = parseInt(income) - totalExpenses;
    document.getElementById("balance").innerText = balance;
  });

  document.getElementById('save').addEventListener('click', function(event){
     const saveInput = document.getElementById('save-input').value;

     const balanceAmount = document.getElementById('balance').innerText;
      const savingAmount = (saveInput / 100) * balanceAmount;
      document.getElementById('saving-amount').innerText = savingAmount;
      document.getElementById('remaining-balance').innerText = balanceAmount - savingAmount;
  });


