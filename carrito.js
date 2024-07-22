document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.querySelector('.cart-items');
    const totalAmount = document.querySelector('.total-amount');
    const emptyCartButton = document.querySelector('.empty-cart');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const productName = button.parentElement.querySelector('h2').textContent;
            const productPrice = parseFloat(button.getAttribute('data-product-price'));
            addToCart(productId, productName, productPrice);
        });
    });

    if (emptyCartButton) {
        emptyCartButton.addEventListener('click', () => {
            cart.length = 0;
            updateCart();
        });
    }

    function addToCart(productId, productName, productPrice) {
        const item = cart.find(product => product.id === productId);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }
        updateCart();
    }

    function updateCart() {
        cartCount.textContent = cart.reduce((total, product) => total + product.quantity, 0);
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(product => {
            const item = document.createElement('li');
            item.textContent = `${product.name} x${product.quantity} - Lps.${(product.price * product.quantity).toFixed(2)}`;
            if (cartItems) {
                cartItems.appendChild(item);
            }
            total += product.price * product.quantity;
        });
        totalAmount.textContent = total.toFixed(2);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Load cart from localStorage on page load
    updateCart();
});




