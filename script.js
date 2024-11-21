// Credentials data
const credentials = [
  { keyEmail: "key1", template: "template1", publicKey: "publicKey1" },
  { keyEmail: "key2", template: "template2", publicKey: "publicKey2" },
  { keyEmail: "key3", template: "template3", publicKey: "publicKey3" },
  { keyEmail: "key4", template: "template4", publicKey: "publicKey4" },
  { keyEmail: "key5", template: "template5", publicKey: "publicKey5" },
  { keyEmail: "key6", template: "template6", publicKey: "publicKey6" },
  { keyEmail: "key7", template: "template7", publicKey: "publicKey7" },
  { keyEmail: "key8", template: "template8", publicKey: "publicKey8" },
  { keyEmail: "key9", template: "template9", publicKey: "publicKey9" },
  { keyEmail: "key10", template: "template10", publicKey: "publicKey10" },
];

// Variables for counter and credentials management
let counter = 0; // Tracks total button clicks
let credentialsIndex = 0; // Tracks current credentials
const changeCredentials = 2; // Change credentials every X clicks (set to any number)

// Button element
const button = document.querySelector(".gantiNamaClass");
const counterOutput = document.getElementById("counterOutput");
const credentialsOutput = document.getElementById("credentialsOutput");

// Event listener for button click
button.addEventListener("click", () => {
  counter++; // Increment counter

  // Change credentials when counter reaches multiple of changeCredentials
  if (counter % changeCredentials === 0) {
    credentialsIndex++;
    if (credentialsIndex >= credentials.length) {
      credentialsIndex = 0; // Reset to first credentials if exceeds limit
    }
  }

  // Update displayed output on page
  counterOutput.textContent = `Counter: ${counter}`;
  credentialsOutput.textContent = `Credentials: ${JSON.stringify(credentials[credentialsIndex])}`;

  // Log current state (for debugging purposes)
  console.log(`Counter: ${counter}`);
  console.log(`Credentials Index: ${credentialsIndex}`);
  console.log(`Credentials: ${JSON.stringify(credentials[credentialsIndex])}`);
});
