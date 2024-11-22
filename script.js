// Konfigurasi
let counter = 0; // Menghitung jumlah klik
const changeCredentials = 1; // Ganti kredensial setiap 1 klik
let credentialsIndex = 0; // Indeks kredensial aktif

// Array kredensial
const credentials = [
  {
    service: "service_cp9a8vk",
    template: "template_cxxhwhf",
    publicKey: "zxhVg7gZptZ0Lx8Gj",
  },
  {
    service: "service_47yv3ru",
    template: "template_59eyxxb",
    publicKey: "kHhIxJiu0pyawV67C",
  },
  {
    service: "service_tr4jj04",
    template: "template_rlk8vbb",
    publicKey: "5B1jWOqTqpgrbrQOc",
  },
];

// Inisialisasi EmailJS dengan kredensial pertama
(function () {
  const initialCredentials = credentials[credentialsIndex];
  emailjs.init(initialCredentials.publicKey); // PublicKey pertama
  console.log(`Initialized with:`, initialCredentials);
})();

// Fungsi mengirim email
function sendmail() {
  // Ambil data dari input form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Validasi input
  if (!name || !email) {
    alert("Please fill out all fields!");
    return;
  }

  // Ambil kredensial aktif
  const currentCredentials = credentials[credentialsIndex];

  // Parameter untuk EmailJS
  const params = { name, email };

  // Kirim email
  emailjs
    .send(currentCredentials.service, currentCredentials.template, params)
    .then((res) => {
      alert(`Success! Email sent. Status: ${res.status}`);
      counter++; // Tambahkan counter setelah sukses

      // Perbarui kredensial jika memenuhi syarat
      if (counter >= changeCredentials) {
        credentialsIndex = (credentialsIndex + 1) % credentials.length; // Ganti ke indeks berikutnya
        const newCredentials = credentials[credentialsIndex];
        emailjs.init(newCredentials.publicKey); // Inisialisasi ulang publicKey
        console.log(`Switched to credentials:`, newCredentials);
        counter = 0; // Reset counter
      }
    })
    .catch((err) => {
      alert(`Failed to send email. Error: ${err}`);
    });

  // Debug log untuk memantau status
  console.log(`Counter: ${counter}`);
  console.log(`Current Credentials Index: ${credentialsIndex}`);
}
