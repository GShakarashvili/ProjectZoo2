import prompt_fn from 'prompt-sync';
const prompt = prompt_fn();

const getUserInput = (message: string) => {
  return prompt(message);
};

export default getUserInput;
