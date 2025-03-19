import animals from'./data.js';


export const showDiets = () => {
  console.log('Animal Diets:');

  animals.forEach(animal => {
    console.log(`- Name: ${animal.name} | Diet: ${animal.diet}`);
  });
};

// Calculate total food required (for simplicity, assume each animal eats 10kg of food per day)
export const totalFoodRequired = () => {
  const total = animals.length * 10; // 10kg per animal
  console.log(`Total food required for all animals: ${total}kg per day`);
};
