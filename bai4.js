function calculate() {
    // Get values from input fields
    const firstNumber = parseFloat(document.getElementById("first-number").value);
    const secondNumber = parseFloat(document.getElementById("second-number").value);
  
    // Calculate the result
    const operator = document.querySelector(".operator input:checked").value;
    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
    }
  
    // Display the result
    document.getElementById("result").textContent = result;
  }
  
  document.querySelector(".operator input").addEventListener("click", calculate);