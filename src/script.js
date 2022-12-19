function removeSymbols(text) {
  var newString = text.replace(/[^A-Z0-9]+/gi, "");
  return newString;
}

text = prompt("Masukan teks");
console.log(removeSymbols(text));
