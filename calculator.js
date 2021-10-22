window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupDefaultValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});
//Why isn't the DOMContentLoaded listener wrapped around the entire JS file?
//How are my 2 HTML files linked?

function getCurrentUIValues() {
  console.log(document.getElementById('loan-amount').value);
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value
  }
}
//I don't understand how the + works on returning this object

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupDefaultValues () {
  const defaults = {
    amount : 500000,
    years : 30,
    rate : 5
  }
  const amount = document.getElementById('loan-amount');
  amount.value = defaults.amount;
  const years = document.getElementById('loan-years');
  years.value = defaults.years;
  const rate = document.getElementById('loan-rate');
  rate.value = defaults.rate;
  update(); 
  //why do I need this function here?
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const userValues = getCurrentUIValues();
  console.log(userValues);
  updateMonthly(calculateMonthlyPayment(userValues));
}
//How do I write a test if userValues has a value (amount, rate, year) that is NaN, string, boolean, etc.?

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(defaults) {
  const monthlyInterestRate = (defaults.rate / 100) / 12;
  const n = (defaults.years) * 12;
  console.log(defaults.rate);
  console.log(monthlyInterestRate);
  console.log(n);
  return (
          (defaults.amount * monthlyInterestRate) / 
          (1 - Math.pow((1 + monthlyInterestRate), -n))
          ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = monthly;
  //I don't understand where the argument 'monthly' comes from and how it's used
}
