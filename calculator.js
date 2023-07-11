// Tính tổng hai số
function add(a, b) {
    return a + b;
  }
  
  // Tính hiệu hai số
  function subtract(a, b) {
    return a - b;
  }
  
  // Tính tích hai số
  function multiply(a, b) {
    return a * b;
  }
  
  // Chia hai số
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  // Xuất các hàm để có thể sử dụng từ bên ngoài module
  var calculator = {
    add,
    subtract,
    multiply,
    divide
  };
  
  // Export module để có thể sử dụng trong tệp tin HTML
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = calculator;
  }
  