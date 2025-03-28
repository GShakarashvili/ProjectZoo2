import Animal from "./animal.js";

class Elephant extends Animal {
    constructor(id: number, name: string, age: number, healthStatus: string) {
        super(id, name, "Elephant", age, healthStatus, "herbivore");
    }
}

export default Elephant;