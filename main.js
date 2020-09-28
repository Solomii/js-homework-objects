// 1. Створити обєкт який описує тварину(назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
// Функція яка виведе всю інформацію про тварину.Функція яка виведе за скільки тварина зможе подолати 1000 км.
// (врахуйте що тварина може рухатись не більше 12 годин у день).
// Функція яка зможе змінити назву тварини на більш детальну.
// let objAnimal = {
//   name: "horse",
//   weight: "500 kg",
//   age: 5,
//   speed: 15,
// };

// renameAnimals(objAnimal, "race horse");
// console.log(objAnimal);
// console.log(printTime(objAnimal));
// function allAboutAnimals(objAnimal) {
//   alert(this.name + ", " + this.weight + ", " + this.speed);
// }

// function printTime(animal) {
//   let kmPerDay = Math.floor(12 * animal.speed);
//   alert(Math.floor(1000 / kmPerDay));
// }

// function renameAnimals(animal, newName) {
//   animal.name = newName;
// }
// 2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи
// які будуть робити наступне - рахувати площу фігури, периметр фігури, зроблять
// фігуру 3 - д,зададуть назву фігури, переведуть значення з сантиметрів у метри.
// let sideLengths = {
//   sideOne: 10,
//   sideTwo: 20,
// };
// const oneMeterInCentimeters = 100;
// console.log(area(sideLengths));
// console.log(perimeter(sideLengths));
// console.log(threeD(sideLengths));
// console.log(centimetersToMeters(sideLengths));
// function area(rectangle) {
//   return rectangle.sideOne * rectangle.sideTwo;
// }
// function perimeter(rectangle) {
//   return 2 * (rectangle.sideOne + rectangle.sideTwo);
// }
// function centimetersToMeters(rectangle) {
//   rectangle.sideOne = rectangle.sideOne / oneMeterInCentimeters;
//   rectangle.sideTwo = rectangle.sideTwo / oneMeterInCentimeters;
//   if (rectangle.sideTwo !== undefined) {
//     rectangle.sideThree = rectangle.sideThree / oneMeterInCentimeters;
//   }
//   return rectangle;
// }
// function threeD(rectangle) {
//   sideLengths.sideThree = 10;
//   return rectangle;
// }

// 3. Створимо аналог списка покупок(мінімум 5 покупок з всіма заданими пропертями. )
// {
//   tomato: {
//     count: 5,
//       price: 50,
//         buy: false,
//           outOfstore: true
//   } , ...
// }
// Виводимо список покупок - спочатку ті які є в магазині потім яких немає,
//   Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.
// (не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).
let shopingList = {
  tomato: {
    count: 5,
    price: 50,
    buy: false,
    outOfstore: true,
  },
  cucumbers: {
    count: 6,
    price: 40,
    buy: false,
    outOfstore: false,
  },
  apples: {
    count: 4,
    price: 60,
    buy: false,
    outOfstore: true,
  },
  potatoes: {
    count: 10,
    price: 60,
    buy: false,
    outOfstore: true,
  },
  cabbage: {
    count: 1,
    price: 20,
    buy: true,
    outOfstore: false,
  },
};
// console.log(listPresentAbsent(shopingList));
// console.log(purchasedProduct(shopingList));
// console.log(sumProduct(shopingList));
// //1.Виводимо список покупок
// function listPresentAbsent(shopingList) {
//   let strPresent = "";
//   let strAbsent = "";
//   for (key in shopingList) {
//     if (shopingList[key].outOfstore) {
//       strAbsent += key + ", ";
//     } else {
//       strPresent += key + ", ";
//     }
//   }
//   return (
//     "Products that are not in the store:" +
//     strPresent +
//     "products that are in the store:" +
//     strAbsent
//   );
// }
// 2.Додаємо функцію яка дозволить купити продукт.
// function purchasedProduct(shopingList) {
//   let purchasedProduct = "";
//   for (key in shopingList) {
//     if (shopingList[key].buy === true) {
//       purchasedProduct += key + ", ";
//     }
//   }
//   return "Receipt(check): " + purchasedProduct;
// }
// // 3.Додаємо функцію яка просумує всі зроблені покупки і виведе результат.
// function sumProduct(shopingList) {
//   let PriceProduct = 0;
//   let allSumProduct = 0;
//   for (key in shopingList) {
//     if (shopingList[key].buy === true) {
//       priceProduct = shopingList[key].count * shopingList[key].price;
//       allSumProduct += priceProduct;
//     }
//   }
//   return "Price of products:" + allSumProduct;
// }
// 5-6 Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).
let productName = prompt("Enter product name.");
let quantity = +prompt("Enter quantity");
let addRemove = prompt("Enter sign(+-)");
if (addRemove === "+") {
  addProductQuantity(shopingList, productName, quantity);
} else if (addRemove === "-") {
  decreaseProductQuantity(shopingList, productName, quantity);
} else {
  alert("Wrong signe!");
}
function addProductQuantity(shopingList, productName, quantity) {
  for (key in shopingList) {
    if (key == productName) {
      shopingList[key].count += quantity;
      console.log(shopingList[key].count);
      return;
    }
  }
}
function decreaseProductQuantity(shopingList, productName, quantity) {
  for (key in shopingList) {
    if (key == productName) {
      shopingList[key].count -= quantity;
      if (shopingList[key].count <= 0) {
        shopingList[key].count = 0;
      }
      console.log(shopingList[key].count);
      return;
    }
  }
}

// 4. Задана колекція[{
// name: "Yura", age: 55,
// hobby: ["films", "games", "hiking"], type: "Admin"
// }, {}, {}, {}].
// Вивести всіх адмінів.Вивести середній вік усіх працівників.
// Вивести тільки унікальні хоббі працівників.
// let workers = [
//   {
//     name: "Yura",
//     age: 50,
//     hobby: ["films", "games", "hiking"],
//     type: "Admin",
//   },
//   {
//     name: "Ivan",
//     age: 25,
//     hobby: ["music", "football", "yoga"],
//     type: "user",
//   },
//   {
//     name: "Mark",
//     age: 35,
//     hobby: ["films", "volleyball", "skiing"],
//     type: "Admin",
//   },
//   {
//     name: "Taras",
//     age: 30,
//     hobby: ["music", "games", "hiking"],
//     type: "user",
//   },
// ];
// console.log(typeOfWork(workers));
// console.log(getMiddleAge(workers));
// console.log(uniqueHobbies(workers));
// // All Admins
// function typeOfWork(workers) {
//   let workersOfAdmins = "";
//   for (let i = 0; i < workers.length; i++) {
//     if (workers[i].type == "Admin") {
//       workersOfAdmins += workers[i].name + ", ";
//     }
//   }
//   return workersOfAdmins;
// }

// // Average Age
// function getMiddleAge(workers) {
//   return (
//     workers.reduce((sumAge, person) => sumAge + person.age, 0) / workers.length
//   );
// }

// // Unique Hobbies Of Employees
// function uniqueHobbies(workers) {
//   let uniqueHobbies = new Set();
//   for (let person of workers) {
//     for (let hobies of person.hobby) {
//       uniqueHobbies.add(hobies);
//     }
//   }
//   return uniqueHobbies;
// };
