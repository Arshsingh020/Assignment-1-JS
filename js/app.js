// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

// creating new consts
// JavaScript arrays with random words

const nouns = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', 'does not like' , 'kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking' , 'a fat'];
const places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass' , 'in my shoes'];

let textToSpeak = ''; // Variable to hold the concatenated text


// Function to generate random phrase and concatenate to textToSpeak
function gPhrase(index) {
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomPlace = places[Math.floor(Math.random() * places.length)];

  const phrase = `${randomNoun} ${randomVerb} ${randomAdjective} ${randomPlace}`;

  textToSpeak = phrase; 

  // I have used here another textToSpeak because I need to concatenate the phrase to the textToSpeak variable with a space
  textToSpeak1 += phrase + ' '; 
}


// Function to generate a random story
function generateStory() {
  textToSpeak1 = ''; // Reset textToSpeak1

  // Generate random phrases to form a story
  gPhrase();
  gPhrase();
  gPhrase();
  gPhrase();
  gPhrase();
  gPhrase();

  // Display the story in the text format
  const sText = textToSpeak1.trim();
 

  // Speak the story aloud
  speakNow(sText);
}

// Function to reset the story
function resetStory() {
  textToSpeak1 = ''; // Reset textToSpeak
  storyContainer.textContent = ''; // Clear the story text
}



// Function to pass the value to textToSpeak and trigger speakNow()
function passValueAndSpeak() {
  textToSpeak = textToSpeak.trim(); // Remove any leading or trailing spaces

  if (textToSpeak !== '') {
    speakNow(textToSpeak); // Call the speakNow() function with the value of textToSpeak
  } else {
    console.log('No text to speak.'); // Print an error message if textToSpeak is empty
  }
}

// Function to speak the text aloud
function speakNow(text) {
  const speechSynthesis = window.speechSynthesis;

  // Create a new SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(text);

  // Speak the text
  speechSynthesis.speak(utterance);
}


