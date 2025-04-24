// Display cart items
function displayCart() {
    const cartSection = document.getElementById('cart-items');
    if (cart.length === 0) {
      cartSection.innerHTML = "<p>Your cart is empty!</p>";
    } else {
      cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
          <p>${item.name} - $${item.price}</p>
        `;
        cartSection.appendChild(itemDiv);
      });
    }
  }
  
  // Call displayCart on page load
  displayCart();
  