function calculateSeconds(numHour, numMin, numSec) {
  let valid = true;
  if (numMin > 60 || numSec > 60) {
    valid = false;
  }

  if (valid) {
    let answer = 3600 * parseInt(numHour);
    answer = answer + 60 * parseInt(numMin);
    answer = answer + parseInt(numSec);
    alert("Jumlah Detik:" + answer);
  } else {
    alert("menit dan detik tidak boleh lebih dari 60");
  }
}

let hours = prompt("Masukan jumlah Jam: ");
let minutes = prompt("Masukan jumlah Menit: ");
let sec = prompt("Masukan jumlah Detik: ");
calculateSeconds(hours, minutes, sec);
