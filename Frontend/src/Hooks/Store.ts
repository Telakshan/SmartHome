const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

export const sumItems = cartItems => {

    Storage(cartItems);
    let itemCount: number = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total: number = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
   

    return {itemCount, total, cartItems}
}