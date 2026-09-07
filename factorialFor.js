function factorial(n) {
  let resultado = 1;
  
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  
  return resultado;
}

// Ejemplo de uso
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(7)); // 5040