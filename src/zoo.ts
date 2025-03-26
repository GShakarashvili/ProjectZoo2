import animals from "./data.js";

class Zoo {
  displayAnimals() {
    if (animals.length === 0) {
      console.log("No animals available.");
      return;
    }

    console.log("Animal List:");
    animals.forEach((animal) => {
      console.log(
        `- ID: ${animal.id} | Name: ${animal.name} | Species: ${animal.species} | Age: ${animal.age} | Health Status: ${animal.healthStatus}`
      );
    });
  }

  addAnimal(id: number, name: any, species: any, age: number, healthStatus: any, diet: any) {
    animals.push({ id, name, species, age, healthStatus, diet });
    console.log(`Added animal: ${name}`);
  }

  removeAnimal(id: number) {
    const index = animals.findIndex((animal) => animal.id === id);
    if (index !== -1) {
      const removed = animals.splice(index, 1);
      console.log(`Removed animal: ${removed[0].name}`);
    } else {
      console.log("Animal not found.");
    }
  }

  changeHealthStatus(id: number, healthStatus: string) {
    const animal = animals.find((animal) => animal.id === id);
    if (animal) {
      animal.healthStatus = healthStatus;
      console.log(`Updated health status of ${animal.name} to ${healthStatus}`);
    } else {
      console.log("Animal not found.");
    }
  }

  filterByHealthStatus(status: string) {
    const filteredAnimals = animals.filter(
      (animal) => animal.healthStatus === status
    );
    if (filteredAnimals.length === 0) {
      console.log(`No animals with health status: ${status}`);
    } else {
      console.log(`Animals with health status ${status}:`);

      filteredAnimals.forEach((animal) => {
        console.log(
          `- ID: ${animal.id} | Name: ${animal.name} | Species: ${animal.species} | Age: ${animal.age}`
        );
      });
    }
  }

  filterBySpecies(species: string) {
    const filteredAnimals = animals.filter(
      (animal) => animal.species === species
    );
    if (filteredAnimals.length === 0) {
      console.log(`No animals of species: ${species}`);
    } else {
      console.log(`Animals of species ${species}:`);

      filteredAnimals.forEach((animal) => {
        console.log(
          `- ID: ${animal.id} | Name: ${animal.name} | Age: ${animal.age}`
        );
      });
    }
  }

  sortByAge(ascending = true) {
    const sortedAnimals = [...animals].sort((a, b) =>
      ascending ? a.age - b.age : b.age - a.age
    );
    console.log(
      `Animals sorted by age (${ascending ? "ascending" : "descending"}):`
    );

    sortedAnimals.forEach((animal) => {
      console.log(
        `- ID: ${animal.id} | Name: ${animal.name} | Age: ${animal.age}`
      );
    });
  }

  sortByName() {
    const sortedAnimals = [...animals].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    console.log("Animals sorted by name:");

    sortedAnimals.forEach((animal) => {
      console.log(`- ID: ${animal.id} | Name: ${animal.name}`);
    });
  }

  showDiets = () => {
    console.log('Animal Diets:');
  
    animals.forEach(animal => {
      console.log(`- Name: ${animal.name} | Diet: ${animal.diet}`);
    });
  };
  
  // Calculate total food required (for simplicity, assume each animal eats 10kg of food per day)
  totalFoodRequired = () => {
    const total = animals.length * 10; // 10kg per animal
    console.log(`Total food required for all animals: ${total}kg per day`);
  };
}

export default Zoo
