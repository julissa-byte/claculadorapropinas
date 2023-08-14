function calc() {
    let billAmount = parseInt(document.getElementById('billAmount').value);
    let tipPer = parseInt(document.getElementById('tipPer').value);
  
    // Tip Amount
    let tipAmount = (billAmount * tipPer) / 100;
    document.getElementById(
      'tipAmount'
    ).innerHTML = ` Monto de la propina :   ${tipAmount}`;
  
    // Total Amount
    totalAmount.innerHTML = `Cantidad total :   ${tipAmount + billAmount} `;
  }
  
  function reset() {
    document.getElementById('billAmount').value = '';
    document.getElementById('tipPer').value = '';
    document.getElementById('tipAmount').innerHTML = ` Cantidad total : `;
    document.getElementById('totalAmount').innerHTML = `Monto de la propina :`;
  }
  