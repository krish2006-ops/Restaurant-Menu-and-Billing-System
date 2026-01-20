let total = 0;
function addToCart(price) {
total += price;
document.getElementById("total").innerText = total;
// store total for bill page
localStorage.setItem("billTotal", total);
}