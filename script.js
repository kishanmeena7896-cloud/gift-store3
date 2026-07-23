const popup = document.getElementById("orderPopup");
const paymentPopup = document.getElementById("paymentPopup");

// Buy Now Buttons
document.querySelectorAll(".cart-btn").forEach(button => {
    button.addEventListener("click", function () {
        popup.style.display = "flex";
    });
});

// Close Order Popup
document.querySelector(".close").addEventListener("click", function () {
    popup.style.display = "none";
});

// Continue to Payment
document.getElementById("continueBtn").addEventListener("click", function () {
    popup.style.display = "none";
    paymentPopup.style.display = "flex";
});

// Close Payment Popup
document.getElementById("closePayment").addEventListener("click", function () {
    paymentPopup.style.display = "none";
});

// Paid Button
document.getElementById("paidBtn").addEventListener("click", function () {
    window.open(
        "https://wa.me/917300617677?text=Hello%20I%20have%20completed%20the%20payment.",
        "_blank"
    );
});

// Search
document.getElementById("searchInput").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();

    document.querySelectorAll(".product").forEach(product => {
        let name = product.querySelector("h3").textContent.toLowerCase();
        product.style.display = name.includes(value) ? "block" : "none";
    });
});