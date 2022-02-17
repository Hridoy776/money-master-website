
function buttons(calculateButton){
    
      const income = document.getElementById("input-field").value;
      const foodExpenses = document.getElementById("food-expenses").value;
      const rentExpenses = document.getElementById("rent-expenses").value;
      const clothesExpenses = document.getElementById("clothes-expenses").value;
      if(calculateButton == calculate ){
        const totalExpenses =
        parseInt(foodExpenses) +
        parseInt(rentExpenses) +
        parseInt(clothesExpenses);
      document.getElementById("total-expenses").innerText = totalExpenses;
      const balance = parseInt(income) - totalExpenses;
      document.getElementById("balance").innerText = balance;
      }
      else if(calculateButton == saveing){
        const saveInput = document.getElementById('save-input').value;

     const balanceAmount = document.getElementById('balance').innerText;
      const savingAmount = (saveInput / 100) * balanceAmount;
      document.getElementById('saving-amount').innerText = savingAmount;
      document.getElementById('remaining-balance').innerText = balanceAmount - savingAmount;
      }
      
}

document.getElementById("calculate-btn")
.addEventListener("click", function (event) {
  buttons(calculate);
  });

  document.getElementById('save').addEventListener('click', function(event){
    
  });


