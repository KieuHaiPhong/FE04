function solveEquation() {
    // Get values from input fields
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
  
    // Calculate discriminant
    const delta = b * b - 4 * a * c;
  
    // Determine roots based on discriminant
    if (delta > 0) {
      // Two distinct real roots
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById("results").textContent = `x1 = ${x1}, x2 = ${x2}`;
    } else if (delta === 0) {
      // One repeated real root
      const x = -b / (2 * a);
      document.getElementById("results").textContent = "x = " + x;
    } else {
      // No real roots (complex roots)
      document.getElementById("results").textContent = "No real roots";
    }
  }
  