// modify this function
function evolution(obj, key, value) {
  const newObject = Object.assign({}, obj);
  newObject[key] = value;
  return newObject;
}

const fish = {
  eggs: "roe",
  eyes: 2,
  habitat: "water",
};

const frog = evolution(fish, "legs", 4);

console.log("frog: ", frog);

// frog:  {eggs: "roe", eyes: 2, habitat: "water", legs: 4}

console.log("fish: ", fish);

// fish:  {eggs: "roe", eyes: 2, habitat: "water", legs: 4}
// The fish have evolved too! What have we done!?
