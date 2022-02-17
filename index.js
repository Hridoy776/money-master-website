// common function
function buttons(calculateButton){
    //  condition for get into calculate button interactive
      if(calculateButton == 'calculate' ){
        const income = document.getElementById("input-field").value;
        const foodExpenses = document.getElementById("food-expenses").value;
        const rentExpenses = document.getElementById("rent-expenses").value;
        const clothesExpenses = document.getElementById("clothes-expenses").value;
           if(income >=0 && foodExpenses >=0 && rentExpenses >=0 && clothesExpenses >=0){
            const totalExpenses =
            parseInt(foodExpenses) +
            parseInt(rentExpenses) +
            parseInt(clothesExpenses);
            document.getElementById("total-expenses").innerText = totalExpenses;
            if(income > totalExpenses){
                const balance = parseInt(income) - totalExpenses;
            document.getElementById("balance").innerText = balance;
            }
            else{
                alert('expenses cannot be grater then income')
            }       
      
           }
        //    validation
           else{
               alert('please input positive number')
           }
    }
    // condition for enteractive save button
      else if(calculateButton == 'saveing'){
        const saveInput = document.getElementById('save-input').value;
        const income = document.getElementById("input-field").value;
     const balanceAmount = document.getElementById('balance').innerText;
      const savingAmount = (saveInput / 100) * income;
      document.getElementById('saving-amount').innerText = savingAmount;
    //   validation
      if(savingAmount < balanceAmount){
      document.getElementById('remaining-balance').innerText = balanceAmount - savingAmount;
      }
    //   error massage alert
      else{
          alert('you can not save grater than your balance')
      }   
}
}
// add event in calculate button
document.getElementById("calculate-btn")
.addEventListener("click", function (event) {
  buttons('calculate');
  });
// add event in sav button
  document.getElementById('save').addEventListener('click', function(event){
    buttons('saveing');
  });


