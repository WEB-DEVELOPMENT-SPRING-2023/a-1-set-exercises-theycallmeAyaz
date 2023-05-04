// Get the input fields and button from the DOM//
const costInput = document.getElementById("cost");
const litresInput = document.getElementById("litres");
const calculateBtn = document.getElementById("calculate-btn");
const totalCost = document.getElementById("total-cost");

// Add a click event listener to the button
calculateBtn.addEventListener("click", function() 
{// Get the values from the input fields and convert them to floating point numbers//
  const cost = parseFloat(costInput.value);
  const litres = parseFloat(litresInput.value);
  // Calculate the total cost and round it to two decimal places//
  const total = cost * litres;
  // Display the total cost to the user//
  totalCost.textContent = `Total cost: $${total.toFixed(2)}`;
});
