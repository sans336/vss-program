
  const colors = ["red", "blue"];

  const data = [
    {
      id: 1,
      color: "red",
      name: "John",
      city: "New York",
    },
    {
      id: 2,
      color: "blue",
      name: "Emily",
      city: "Los Angeles",
    },
    {
      id: 3,
      color: "green",
      name: "Michael",
      city: "Chicago",
    },
    {
      id: 4,
      color: "olive",
      name: "Sophia",
      city: "Houston",
    },
  ];
//     const output = [
//     {
//       id: 1,
//       color: "red",
//       name: "John",
//       city: "New York",
//     },
//     {
//       id: 2,
//       color: "blue",
//       name: "Emily",
//       city: "Los Angeles",
//     },
//   ];
// const filtered = data.filter((item) => {
//   if (data.color === "blue" || data.color === "red") {
//     return true;
//   }
//   return false;
// }); console.log(filtered)


const colour = data.filter((data) => {
  if (data.color=="blue" || data.color=="red") {
      return true;
  } else {
    return false;
  }
});
console.log(colour);
