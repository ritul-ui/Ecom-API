//productId, userId, quantity
export default class CartItemModel {
  constructor(productId, userId, quantity, id) {
    this.productId = productId;
    this.userId = userId;
    this.quantity = quantity;
    this.id = id;
  }

  static add(producId, userId, quantity) {
    const cartItem = new CartItemModel(producId, userId, quantity);
    cartItem.id = cartItems.length + 1;
    cartItems.push(cartItem);
    return cartItem;
  }

  static get(userId) {
    return cartItems.filter((i) => i.userId == userId);
  }
}

var cartItems = [new CartItemModel(1, 2, 1, 1), new CartItemModel(1,1,2,2)];
