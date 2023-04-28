const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const checkoutBtn = document.getElementById('checkout-btn');
let total = 0;

// Products array
const products = [
	{name: 'Protein Powder', price: 30},
	{name: 'Gym Gloves', price: 20},
	{name: 'Resistance Bands', price: 15},
];

// Add event listener to checkout button
checkoutBtn.addEventListener('click', () => {
	alert(`Your total is $${total.toFixed(2)}`);
});

// Add products to cart
products.forEach(product => {
	const row = document.createElement('tr');
	row.innerHTML = `
		<td>${product.name}</td>
		<td>$${product.price.toFixed(2)}</td>
		<td><input type="number" class="quantity" min="1" value="1"></td>
		<td>$${product.price.toFixed(2)}</td>
	`;
	cartItems.appendChild(row);

	const quantityInput = row.querySelector('.quantity');
	quantityInput.addEventListener('input', () => {
		const quantity = parseInt(quantityInput.value);
		const subtotal = quantity * product.price;
		row.querySelector('td:last-child').textContent = `$${subtotal.toFixed(2)}`;
		calculateTotal();
	});
});

// Calculate total price
function calculateTotal() {
	total = 0;
	const subtotals = cartItems.querySelectorAll('td:last-child');
	subtotals.forEach(subtotal => {
		total += parseFloat(subtotal.textContent.slice(1));
	});
	totalPrice.textContent = `$${total.toFixed(2)}`;
}