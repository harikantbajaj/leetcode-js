function convert(s, numRows) {
  if (numRows === 1) return s;

  const rows = new Array(numRows).fill(''); 
  let currentRow = 0; 
  let goingDown = false; 

  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s[i]; 
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown; 
    }
    currentRow += goingDown ? 1 : -1; 
  }

  return rows.join(''); 
}

// Test
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1));        
