// Struct untuk menyimpan daftar kredensial
const credentials = [
{ service: "service_mbvt21f", template: "template_up9540b", publicKey: "EXM1NtCxfimV6531g" },
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
  { service: "service_mi40ygj", template: "template_hg8ci7h", publicKey: "NmNYFhIh-J2BHCa9A" },
  { service: "service_ra2ns9v", template: "template_c3pu3as", publicKey: "rQajSzbvnQjsQGMsl" },
  { service: "service_wvkm7du", template: "template_dff3c2p", publicKey: "2Dc71Z60Ko52cJmB1" },
  { service: "service_oq60f9v", template: "template_qykiwzb", publicKey: "KT5wafqd9OejBx2X1" },
  { service: "ervice_j2vhosh", template: "template_7betx9g", publicKey: "EY-KWyO78Xf_ij8Yy" },
];

// Inisialisasi variabel
let currentIndex = 0; // Indeks awal kredensial
let counter = 0; // Counter klik
const changeCredentials = 1; // Ubah kredensial setelah setiap 1 klik

// Fungsi untuk mengirim email
function sendmail() {
  const { service, template, publicKey } = credentials[currentIndex];

  // Ambil data form
  const parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  // Validasi input
  if (!parms.name || !parms.email) {
    alert("Harap isi semua field!");
    return;
  }

  // Update EmailJS publicKey sebelum mengirim
  emailjs.init(publicKey);

  // Kirim email
  emailjs
    .send(service, template, parms)
    .then(() => {
      alert("Email berhasil dikirim!");
      updateCredentials(); // Panggil untuk ganti kredensial
    })
    .catch((error) => {
      console.error("Error mengirim email:", error);
      alert("Terjadi kesalahan saat mengirim email.");
    });
}

// Fungsi untuk update kredensial berdasarkan klik
function updateCredentials() {
  counter++;

  if (counter >= changeCredentials) {
    // Update kredensial
    currentIndex = (currentIndex + 1) % credentials.length; // Rotate kredensial
    console.log(`Switching to credentials ${currentIndex + 1}: ${JSON.stringify(credentials[currentIndex])}`);
    counter = 0; // Reset counter
  }
}