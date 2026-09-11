export function addProduct(cart, product) {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        return cart.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
        );
    }

    return [...cart, product];
}

export function removeProduct(cart, id) {
    const product = cart.find(item => item.id === id);

    if (!product) {
        throw new Error("Produsul nu există în coș!");
    }

    return cart.filter(item => item.id !== id);
}

export function updateQuantity(cart, id, quantity) {
    return cart.map(item =>
        item.id === id
            ? { ...item, quantity: quantity }
            : item
    );
}

export function calculateTotal(cart) {
    return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
}