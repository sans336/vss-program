const products = [
  {
    name: "Smartphone",
    price: 499.99,
    category: "Electronics",
    description: "High-end smartphone with advanced features.",
  },
  {
    name: "Laptop",
    price: 799.0,
    category: "Electronics",
    description: "Powerful laptop for work and entertainment.",
  },
  {
    name: "Designer Watch",
    price: 299.5,
    category: "Fashion",
    description: "Elegant watch with a unique design.",
  },
  {
    name: "Gaming Console",
    price: 349.99,
    category: "Electronics",
    description: "Next-gen gaming console for immersive gameplay.",
  },
  {
    name: "Digital Camera",
    price: 599.95,
    category: "Electronics",
    description: "High-resolution camera for stunning photography.",
  },
];

const filtered = products.filter(
  (product) => product.category === "Electronics" && product.price > 500
);
console.log("filtered:", filtered);
// create a function which will return true if the age is greater than 18, else false



// function validateAge(age){
//   return age>=18;
// }

// const validateAge = (age) => age >= 18


let isEligibleVoter=(age)=>age>18;
console.log(isEligibleVoter(28));


