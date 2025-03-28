import animalsInterface from "../interfaces/animalsInterface";

class Animal implements animalsInterface {
    constructor(
        public id: number,
        public name: string,
        public species: string,
        public age: number,
        public healthStatus: string,
        public diet: string
    ) {}

    getInfo(): string {
        return `ID: ${this.id} | Name: ${this.name} | Species: ${this.species} | Age: ${this.age} | Health Status: ${this.healthStatus}`;
    }
}

export default Animal;