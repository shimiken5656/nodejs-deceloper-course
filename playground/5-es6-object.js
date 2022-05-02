//Object properity shorthand

const name = 'Andrews';
const userAge = 27;

const user={
  name,
  age: userAge,
  location: 'Philadelphia'
}

console.log(user);

//Object destructuring

const product = {
  label: 'Red label',
  price: 3,
  stock: 201,
  salePrice:undefined,
}

// const { label: productLabel, stock ,rating=5 } = product;//定義名を変えたい時に使えそう。
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, {label,stock}) => {
  console.log(type, label, stock);
}
transaction('order', product);