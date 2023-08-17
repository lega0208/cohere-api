import cohere from "../dist/cohere.js";

cohere.init("8Qv7AeM44e6Y6DSRNYxWY6A33iu4LCfKZ3WnUH0S");
const response = await cohere.generate({
  model: 'large',
  prompt:
    "Greetings wise one. I have an inquiry of utmost importance for you to answer. Here it is: What is the most important thing to consider when studying philosophy?",
  max_tokens: 300,
  temperature: 1,
});

console.log(JSON.stringify(response, null, 2));