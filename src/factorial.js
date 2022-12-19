function multiply(n) {
  if (n > 1) return n * multiply(n - 1);
  else return 1;
}

function calculateFactorial(fact) {
  let valid = true;
  if (fact < 0) {
    valid = flase;
  }
  if (valid) {
    let answer = multiply(fact);
    alert("!" + fact + " nilai desimalnya adalah" + answer);
  } else {
    alert("input tidak boleh kurang dari 0");
  }
}

input = prompt("Masukan nilai faktorial: ");
calculateFactorial(input);
