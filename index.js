// Assuming tutorials is a global variable containing an array of tutorial names
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  // Check if tutorials is defined and is an array
  if (!Array.isArray(tutorials)) {
    console.error("Error: 'tutorials' is not defined or not an array.");
    return [];
  }

  // Function to capitalize the first letter of a word
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Iterate through each tutorial and modify its name
  const titleCasedTutorials = tutorials.map(tutorial => {
    // Split the tutorial name into individual words
    const words = tutorial.split(' ');

    // Capitalize the first letter of each word
    const titleCasedWords = words.map(word => capitalizeFirstLetter(word));

    // Join the title-cased words back into a single string
    const titleCasedTutorial = titleCasedWords.join(' ');

    return titleCasedTutorial;
  });

  return titleCasedTutorials;
}

// Example usage:
// Call the function and log the result
console.log(titleCased());
