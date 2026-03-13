function calculate() {
    // declare VARIABLES
    const ADMIN_FEE = 50.00;
    const TICKET_PRICE = 250.00;

    let qty = document.getElementById("Quant").value;
    let subTotal = qty * TICKET_PRICE;
    let total = subTotal + ADMIN_FEE;

    document.getElementById("subtl").value = subTotal.toFixed(2);
    document.getElementById("admin").value = ADMIN_FEE.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
    document.getElementById("outcome").innerText = "Your total is: P" + total.toFixed(2);
}