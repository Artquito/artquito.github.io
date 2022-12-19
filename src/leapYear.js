function determineLeapYear(year) {
  let valid = true;
  if (year < 1900) {
    valid = false;
  }
  if (valid) {
    let answer = checkLeapYear(year);
    alert(answer);
  } else {
    alert("input tidak boleh kurang dari 0");
  }
}

function checkLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return year + " adalah tahun kabisat";
  } else {
    return year + " bukan tahun kabisat";
  }
}

year = prompt("Masukan tahun: ");
determineLeapYear(year);
