function printans(ans) {
    let totalCount = 0;
    let print = "";
    for (let [key, value] of ans) {
      totalCount += value;
      print += `${key}: ${value}\n`;
    }
    print += "Jumlah huruf yang terpakai: " + totalCount;
    alert(print);
  }
  
  function countChar(str, outp_map) {
    for (let i = 0; i < str.length; i++) {
      let k = outp_map.get(str[i]);
      outp_map.set(str[i], k + 1);
    }
    printans(outp_map);
  }
  
  function identifyChar(text) {
    text = text.replace(/\s/g, "");
    if (text.length === 0) {
      alert("tidak boleh kosong ");
      return;
    } else {
      let ans = new Map();
      for (let i = 0; i < text.length; i++) {
        ans.set(text[i], 0);
      }
      let sortedAns = [...ans.entries()];
      sortedAns.sort();
      sortedAns = new Map(sortedAns);
      countChar(text, sortedAns);
    }
  }
  
  text = prompt("Masukan kalimat: ");
  identifyChar(text);
  