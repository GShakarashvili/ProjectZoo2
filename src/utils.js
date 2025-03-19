import prompt_fn from 'prompt-sync';
const prompt = prompt_fn();

const getUserInput = (message) => {
  return prompt(message);
};

export default getUserInput;
