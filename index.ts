import animalsInterface from './src/interfaces/animalsInterface';
import Zoo from './src/classes/zoo.js';
import Elephant from './src/classes/elephant.js';
import Lion from './src/classes/lion.js';
import Tiger from './src/classes/tiger.js';
import getUserInput from './src/utils.js';

let action: string | number = -1;
const animals: animalsInterface[] = [
    new Tiger(1, "Tigger", 5, "healthy"),
    new Lion(2, "Leo", 8, "sick"),
    new Elephant(3, "Ellie", 2, "quarantine"),
];

const NewZoo = new Zoo(animals);

while (action != 0) {
  console.log('Welcome to the Zoo Management System!');
  console.log('1. Display all animals');
  console.log('2. Add a new animal');
  console.log('3. Remove an animal by ID');
  console.log('4. Change an animal\'s health status');
  console.log('5. Filter animals by health status');
  console.log('6. Filter animals by species');
  console.log('7. Sort animals by age');
  console.log('8. Sort animals by name');
  console.log('9. Show animals\' diets');
  console.log('0. Exit');
  
  action = getUserInput('Select an action: ');

  switch(action) {
    case '1':
      NewZoo.displayAnimals();
      break;
    case '2':
      const id = parseInt(getUserInput('Enter ID: '));
      const name = getUserInput('Enter name: ');
      const species = getUserInput('Enter species: ');
      const age = parseInt(getUserInput('Enter age: '));
      const healthStatus = getUserInput('Enter health status: ');
      const diet = getUserInput('Enter diet: ');

      NewZoo.addAnimal(id, name, species, age, healthStatus, diet);
      break;
    case '3':
      const removeId = parseInt(getUserInput('Enter ID to remove: '));
      NewZoo.removeAnimal(removeId);
      break;
    case '4':
      const changeId = parseInt(getUserInput('Enter ID to update: '));
      const newHealthStatus = getUserInput('Enter new health status: ');
      NewZoo.changeHealthStatus(changeId, newHealthStatus);
      break;
    case '5':
      const healthStatusFilter = getUserInput('Enter health status to filter by: ');
      NewZoo.filterByHealthStatus(healthStatusFilter);
      break;
    case '6':
      const speciesFilter = getUserInput('Enter species to filter by: ');
      NewZoo.filterBySpecies(speciesFilter);
      break;
    case '7':
      const ascending = getUserInput('Sort by ascending or descending? (a/d): ') === 'a';
      NewZoo.sortByAge(ascending);
      break;
    case '8':
      NewZoo.sortByName();
      break;
    case '9':
      NewZoo.showDiets();
      NewZoo.totalFoodRequired();
      break;
    case '0':
      console.log('Goodbye!');
      break;
    default:
      console.log('Invalid option, try again.');
  }
}
