export function addCart(ID, Name, amount, Score, Unit, Image) {
  return {
    type: 'addCart',
    ID: ID,
    Name: Name,
    amount: amount,
    Score: Score,
    Unit: Unit,
    Image: Image,
  };
}
export function deleteCart(ID) {
  return {
    type: 'deleteCart',
    ID: ID,
  };
}
export function AddCartHistory(dateTime, amount, Cart, Address, Phone) {
  return {
    type: 'AddCartHistory',
    CreateAtTime: dateTime,
    Price: amount,
    arrayCart: Cart,
    Address: Address,
    Phone: Phone,
  };
}

export function setCart(ID) {
  return {
    type: 'setCart',
    data: [],
  };
}
