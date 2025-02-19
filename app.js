// 1
const firstArray = [20, 70, 15, 132, 11];

const firstArraySum = firstArray.reduce((a, b) => a + b);
const firstArrayAverage = firstArraySum / firstArray.length;
console.log("first Array sum is " + firstArraySum);
console.log("first Array average is " + firstArrayAverage);

// 2
const aboutBook = {
  title: "Three Act Tragedy",
  author: "Agatha Christie",
  yearPublished: 1935,
};

console.log(
  `${aboutBook.title} by ${aboutBook.author} was published in ${aboutBook.yearPublished}`
);

// 3
aboutBook.yearPublished = 1936;
console.log(aboutBook.yearPublished);

//4
const techShopArray = [
  {
    productName: "Toshiba",
    price: 450,
    isAailable: true,
  },
  {
    productName: "Samsung",
    price: 600,
    isAailable: true,
  },
  {
    productName: "Philips",
    price: 500,
    isAailable: false,
  },
];

console.log(techShopArray);
