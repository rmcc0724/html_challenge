// const createPerson = (name, age, gender) => {
//   "use strict";
//     name,
//     age,
//     gender;
// };

// var rmccull = createPerson("Reid", 42, "M");
// console.log(rmccull.name);

// const createPerson = (name, age, gender) => ({
//   "use strict";
//     name,
//     age,
//     gender
// });
// var newPerson = createPerson("Zodiac Hasbro", 56, "male");
// console.log(newPerson.name);

const createPerson = (name, age, gender) => ({
  name,
  age,
  gender
});

var rmccull = createPerson("Reid McCulloch", 42, "male");
var ljackson = createPerson("Lauren Jackson", 35, "female");
// console.log(rmccull);
// console.log(ljackson);

const iterate = (obj) => {
  var newArr = [];
  for(var key in obj) {
    console.log(obj[key]);
    newArr.push(obj[key]);
  }
};

iterate(rmccull);
iterate(ljackson);
