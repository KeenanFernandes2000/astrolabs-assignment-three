/*
     JavaScript Assignment B
     ASSIGNMENT NOTES:
     Do not change the code below.
     Add your code in the 'Answers Section'.
*/

var house = {
  areas: {
    livingRoom: {
      items: ["tv", "sofa"],
    },
    bedroomOne: {
      items: ["bed", "washing machine"],
      windows: 3,
    },
    bedroomTwo: {
      items: ["bed", "bed", "desk"],
      windows: 4,
    },
    kitchen: {
      items: ["fridge", "broken chair", "microwave"],
    },
  },
  garden: [true, "Red Rose"],
  garage: {
    car: {
      color: "red",
      wheels: 4,
      honk: function () {
        alert("Beep");
      },
    },
  },
};

/******** Answers Section ********/

/**
 * PART I
 */

// (1) Add a dining table to the living room.
house["areas"]["livingRoom"]["items"].push("dining table");

// (2) Add a stove to the kitchen.
house["areas"]["kitchen"]["items"].push("stove");

// (3) Remove the washing machine from bedroomOne.
house["areas"]["bedroomOne"]["items"].pop();

// (4) Change the color of the car to blue.
house["garage"]["car"]["color"] = "blue";

// (5) Add a another car to the garage with a honk function.
anotherCar = {
  color: "red",
  wheels: 6,
  anotherHonk: function () {
    alert("Boop");
  },
};
house["garage"]["anotherCar"] = anotherCar;

// (6) Make the new car honk.
house["garage"]["anotherCar"].anotherHonk();

// (7) If the house has a garden, console.log the name of the flower.
if (house["garden"][0] === true) {
  console.log(house["garden"][1]);
}

/**
 * PART II
 */

// (8) Change the 'broken chair' in the kitchen to 'new chair'. Hint: Use the .replace() function

// house["areas"]["kitchen"]["items"][1] = "new chair";
house["areas"]["kitchen"]["items"][1] = house["areas"]["kitchen"][
  "items"
][1].replace("broken", "new");

console.log(house);

// (9) Find total number of areas in the house. Hint: Use the Object.keys() function.
var totalAreas = Object.keys(house["areas"]).length;
console.log("Total areas in the house: " + totalAreas);

// (10) Find the total number of beds in all rooms. Hint: Use the Object.values() function.
var totalBeds = 0;
var areas = Object.values(house.areas);

for (var x = 0; x < Object.keys(house.areas).length; x++) {
  for (var y = 0; y < areas[x].items.length; y++) {
    if (areas[x].items[y] === "bed") {
      totalBeds++;
    }
  }
}

console.log("Total number of beds: " + totalBeds);
