function addRow(triangle) {
  let previous = triangle[triangle.length - 1];
  let newRow = [1];
  for (let i = 0; i < previous.length - 1; i++) {
    let current = previous[i];
    let next = previous[i + 1];
    newRow.push(current + next);
  }
  newRow.push(1);
  return triangle.push(newRow);
}

function generate(numRows) {
  let triangle = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    addRow(triangle);
  }
  return triangle;
}

function printTriangle(numRows) {
  let triangle = generate(numRows);
  let print = "";
  for (let i = 0; i < triangle.length; i++) {
    for (let k = 0; k < numRows - i; k++) {
      print += " ";
    }
    for (let j = 0; j < triangle[i].length; j++) {
      if (j > 0) {
        print += " ";
      }
      print += triangle[i][j];
    }
    print += "\n";
  }
  console.log(print);
}
text = prompt("Masukan kedalaman level: ");
printTriangle(text);