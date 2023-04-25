// Define variables
var cart = [];
var cartTotal = 0;
var cartElement = document.getElementById("cart-items");
var totalElement = document.getElementById("cart-total");
var addToCartButtons = document.getElementsByClassName("add-to-cart");

// Add event listeners to all "Add to Cart" buttons
for (var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", function() {
		addItemToCart(this.getAttribute("data-name"), parseFloat(this.getAttribute("data-price")));
	});
}

// Function to add an item to the cart
function addItemToCart(name, price) {
	var item = {
		name: name,
		price: price
	};
	cart.push(item);
	cartTotal += price;
	cartElement.innerHTML += "<li>" + name + " - $" + price.toFixed(2) + "</li>";
	totalElement.innerHTML = cartTotal.toFixed(2);
}
