export interface animalsInterface {
    id: number;
    name: string;
    species: string;
    age: number;
    healthStatus: string;
    diet: string;
    getInfo(): string;
}

export default animalsInterface