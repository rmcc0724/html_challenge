var newArr = [];
var tempArr = [];
var fruits = [
{
  color_id: 1,
    name: 'strawberry'
  },
  {
  color_id: 2,
    name: 'banana'
  },
  {
  color_id: 3,
    name: 'orange'
  },
  {
  color_id: 2,
    name: 'lemon'
  }
];

var colors = [
  {
    id: 1,
    color: 'red'
  },
  {
    id: 2,
    color: 'yellow'
  },
  {
    id: 3,
    color: 'orange'
  },
  {
    id: 5,
    color: 'blue'
  }
];

fruits.forEach(function(item){
tempArr.push(item);
});

tempArr.forEach(function(item, index){
    
    for(var i = 0; i < colors.length; i++){
      if(item.color_id === colors[i].id){
      item.color = colors[i].color;
      }
    }
});


console.log(tempArr);
//console.log(test);
// output:
// [
// {
//   color: {id: 1, color: 'red'},
//     name: 'strawberry'
//   },
//   {
//   color: {id: 2, color: 'yellow'},
//     name: 'banana'
//   },
//   {
//   color: {id: 3, color: 'orange'},
//     name: 'orange'
//   },
//   {
//   color: {id: 2, color: 'yellow'},
//     name: 'lemon'
//   }
// ];