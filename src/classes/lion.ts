import Animal from "./animal.js";

class Lion extends Animal {
    constructor(id: number, name: string, age: number, healthStatus: string) {
        super(id, name, "Lion", age, healthStatus, "carnivore");
    }
}

export default Lion;