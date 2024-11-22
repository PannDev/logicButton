// Credentials data array
const credentials = [
  { service: "service_cp9a8vk", template: "template_cxxhwhf", publicKey: "zxhVg7gZptZ0Lx8Gj" },
  { service: "service_47yv3ru", template: "template_59eyxxb", publicKey: "kHhIxJiu0pyawV67C" },
  { service: "service_tr4jj04", template: "template_rlk8vbb", publicKey: "5B1jWOqTqpgrbrQOc" },
  { service: "service_83yxuqw", template: "template_eh36j4b", publicKey: "lcHpgE6SlYwRQQIMc" },
  { service: "service_6tdpjqb", template: "template_bjy2b6b", publicKey: "Jl5YJTURk6EWw-nCD" },
  { service: "service_irlp9sl", template: "template_nk39k0r", publicKey: "eu-fwhV2EeW664ath" },
  { service: "service_4euqcg9", template: "template_jmuy8yr", publicKey: "tk9eUkV5TApVlCyEJ" },
  { service: "service_1r6jgqm", template: "template_lnnwudr", publicKey: "d3rsImo_itqnHMzal" },
  { service: "service_smaff5g", template: "template_6b5yr4pr", publicKey: "j9zPdTG122xMlOoLF" },
  { service: "service_nah9eqo", template: "template_ymxjfz7", publicKey: "sEsfhcAZVD70iI1hU" },
];

// Counter and change credentials after `n` clicks
let counter = 0;
const changeCredentials = 3; // Change credentials after every `n` clicks
let credentialsIndex = 0;

// EmailJS initialization
(function () {
  emailjs.init(credentials[0].publicKey); // Initialize with the first publicKey
})();

// SendMail function
function sendmail() {
  // Increment counter
  counter++;

  // Get form inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Validate inputs
  if (!name || !email) {
    alert("Please fill out all fields!");
    return;
  }

  // Update credentials index based on the number of clicks
  if (counter % changeCredentials === 0) {
    credentialsIndex = (credentialsIndex + 1) % credentials.length; // Cycle through credentials array
    const currentCredentials = credentials[credentialsIndex];

    // Reinitialize EmailJS with new publicKey
    emailjs.init(currentCredentials.publicKey);
  }

  // Parameters to send
  const params = { name, email };

  // Sending email
  emailjs
    .send(credentials[credentialsIndex].service, credentials[credentialsIndex].template, params)
    .then(function (res) {
      alert(`Success! Email sent. Status: ${res.status}`);
    })
    .catch(function (err) {
      alert(`Failed to send email. Error: ${err}`);
    });

  // Debug logs
  console.log(`Counter: ${counter}`);
  console.log(`Using Credentials Index: ${credentialsIndex}`);
  console.log(`Current Credentials: ${JSON.stringify(credentials[credentialsIndex])}`);
}
