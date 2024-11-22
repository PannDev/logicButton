// Struct untuk menyimpan credentials
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
  {
    service: "service_83yxuqw",
    template: "template_eh36j4b",
    publicKey: "lcHpgE6SlYwRQQIMc",
  },
  {
    service: "service_6tdpjqb",
    template: "template_bjy2b6b",
    publicKey: "Jl5YJTURk6EWw-nCD",
  },
  {
    service: "service_irlp9sl",
    template: "template_nk39k0r",
    publicKey: "eu-fwhV2EeW664ath",
  },
  {
    service: "service_4euqcg9",
    template: "template_jmuy8yr",
    publicKey: "tk9eUkV5TApVlCyEJ",
  },
  {
    service: "service_1r6jgqm",
    template: "template_lnnwudr",
    publicKey: "d3rsImo_itqnHMzal",
  },
  {
    service: "service_smaff5g",
    template: "template_6b5yr4pr",
    publicKey: "j9zPdTG122xMlOoLF",
  },
  {
    service: "service_nah9eqo",
    template: "template_ymxjfz7",
    publicKey: "sEsfhcAZVD70iI1hU",
  },
  {
    service: "service_mi40ygj",
    template: "template_hg8ci7h",
    publicKey: "NmNYFhIh-J2BHCa9A",
  },
  {
    service: "service_ra2ns9v",
    template: "template_c3pu3as",
    publicKey: "rQajSzbvnQjsQGMsl",
  },
  {
    service: "service_wvkm7du",
    template: "template_dff3c2p",
    publicKey: "2Dc71Z60Ko52cJmB1",
  },
  {
    service: "service_oq60f9v",
    template: "template_qykiwzb",
    publicKey: "KT5wafqd9OejBx2X1",
  },
  {
    service: "ervice_j2vhosh",
    template: "template_7betx9g",
    publicKey: "EY-KWyO78Xf_ij8Yy",
  },
];

let currentIndex = 0; // Indeks awal credentials
let counter = 0; // Counter klik
const changeCredentials = 1; // Ubah credentials setelah setiap 1 klik

// Inisialisasi EmailJS
function initEmailJS() {
  const { publicKey } = credentials[currentIndex];
  emailjs.init(publicKey);
  console.log(`EmailJS initialized with Public Key: ${publicKey}`);
}

// Kirim email
function sendmail() {
  const { service, template } = credentials[currentIndex];

  // Ambil data dari form
  const parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };

  // Validasi input
  if (!parms.name || !parms.email) {
    alert("Harap isi semua field!");
    return;
  }

  // Kirim email
  emailjs
    .send(service, template, parms)
    .then(() => {
      alert("Email berhasil dikirim!");
      counter++;
      checkAndChangeCredentials();
    })
    .catch((error) => {
      console.error("Gagal mengirim email:", error);
      alert("Terjadi kesalahan saat mengirim email.");
    });
}

// Periksa dan ubah credentials berdasarkan counter
function checkAndChangeCredentials() {
  if (counter > changeCredentials - 1) {
    currentIndex = (currentIndex + 1) % credentials.length;
    counter = 0;
    initEmailJS(); // Inisialisasi ulang dengan credentials baru
  }
}

// Inisialisasi awal
initEmailJS();
