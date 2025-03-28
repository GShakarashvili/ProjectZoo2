import animalsInterface from "./animalsInterface";

interface ZooInterface {
    displayAnimals(): void;
    addAnimal(id: number, name: string, species: string, age: number, healthStatus: string, diet: string, animal: animalsInterface): void
    removeAnimal(id: number): void;
    changeHealthStatus(id: number, healthStatus: string): void;
}

export default ZooInterface