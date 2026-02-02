function convert() {
  const rate = 0.76; // 1 PLN = 0.76 GEL
  const amount = document.getElementById("amount").value;
  document.getElementById("result").innerText =
    (amount * rate).toFixed(2) + " GEL";
}
