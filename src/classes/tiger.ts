import Animal from "./animal.js";

class Tiger extends Animal {
    constructor(id: number, name: string, age: number, healthStatus: string) {
        super(id, name, "Tiger", age, healthStatus, "carnivore");
    }
}

export default Tiger;