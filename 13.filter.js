// filter 

const shoes = [
  { name: 'Nike Air Max', price: 120, category: 'running' },
  { name: 'Adidas Ultraboost', price: 180, category: 'running' },
  { name: 'Puma RS-X', price: 110, category: 'casual' },
  { name: 'Reebok Classic', price: 90, category: 'casual' },
  { name: 'New Balance 574', price: 80, category: 'running' },
];

const myType=shoes.filter((shoe) => {
    return shoe.category === 'running' && shoe.price > 100;
})

console.log(myType);
