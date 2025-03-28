import Animal from "./animal.js";
import animalsInterface from "../interfaces/animalsInterface";
import ZooInterface from "../interfaces/zooInterface";

class Zoo implements ZooInterface {
  private animals: animalsInterface[];

  constructor(animals: animalsInterface[]) {
    this.animals = animals;
  }

  displayAnimals(): void {
    if (this.animals.length === 0) {
      console.log("No animals available.");
      return;
    }

    console.log("Animal List:");
    this.animals.forEach((animal) => console.log(animal.getInfo()));
  }

  addAnimal(
    id: number,
    name: string,
    species: string,
    age: number,
    healthStatus: string,
    diet: string
  ): void {
    const newAnimal = new Animal(id, name, species, age, healthStatus, diet);
    this.animals.push(newAnimal);
    console.log(`Added animal: ${name}`);
  }

  removeAnimal(id: number): void {
    const index = this.animals.findIndex((animal) => animal.id === id);

    if (index !== -1) {
      const removed = this.animals.splice(index, 1);
      console.log(`Removed animal: ${removed[0].name}`);
    } else {
      console.log("Animal not found.");
    }
  }

  changeHealthStatus(id: number, healthStatus: string): void {
    const animal = this.animals.find((animal) => animal.id === id);

    if (animal) {
      animal.healthStatus = healthStatus;
      console.log(`Updated health status of ${animal.name} to ${healthStatus}`);
    } else {
      console.log("Animal not found.");
    }
  }

  filterByHealthStatus(status: string) {
    const filteredAnimals = this.animals.filter(
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
    const filteredAnimals = this.animals.filter(
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
    const sortedAnimals = [...this.animals].sort((a, b) =>
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
    const sortedAnimals = [...this.animals].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    console.log("Animals sorted by name:");

    sortedAnimals.forEach((animal) => {
      console.log(`- ID: ${animal.id} | Name: ${animal.name}`);
    });
  }

  showDiets = () => {
    console.log("Animal Diets:");

    this.animals.forEach((animal) => {
      console.log(`- Name: ${animal.name} | Diet: ${animal.diet}`);
    });
  };

  // Calculate total food required (for simplicity, assume each animal eats 10kg of food per day)
  totalFoodRequired = () => {
    const total = this.animals.length * 10; // 10kg per animal
    console.log(`Total food required for all animals: ${total}kg per day`);
  };
}

export default Zoo;