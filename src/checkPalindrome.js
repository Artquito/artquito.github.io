function checkPalindrome(text) {
    const len = text.length;
  
    for (let i = 0; i < len / 2; i++) {
      if (text[i] !== text[len - 1 - i]) {
        return 'Kata' + " '" + text + "' " + 'bukan merupakan palindrome';
      }
    }
    return 'Kata' + " '" + text + "' " + 'merupakan palindrome';
  }
  
  function determinePalindrome(text) {
    let valid = true;
    if (typeof text != 'string') {
      valid = false;
    }
  
    if (valid) {
      let answer = checkPalindrome(text);
      alert(answer);
    } else {
      alert('karakter tidak valid');
    }
  }
  
  text = prompt("Masukan kata: ");
  determinePalindrome(text);