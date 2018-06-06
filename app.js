let car = [["brand", "ford"], ["model", "mustang"], ["year", 1964]];

let arrayToObject = (arr) => {
  let newObject = {};

  for(let i = 0; i < arr.length ; i++) {
    newObject  [arr[i][0]] = arr[i][1];
  }

  return newObject;
};
console.log(arrayToObject(car)); 

let newcar = {
  brand: 'ford',
  model: 'mustang',
  year: 1964,
  color: red 
}
let objectToArray = (object) => { 
  let arr2d = [];
  let properties = Object.keys (object);

  for (let i = 0; i<properties.length; i++){
    arr2d.push([properties[i],object[properties[i]]]);
  }
  return arr2d;
};
console.log(objectToArray(newcar))