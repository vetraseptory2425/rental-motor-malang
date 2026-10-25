// Mengatur tahun otomatis di footer
document.getElementById('tahun').textContent = new Date().getFullYear();

// Memberikan aksi pada tombol "Pesan Sekarang"
const tombolPesan = document.querySelectorAll('.btn-pesan');

// Memberikan aksi pada tombol "Pesan Sekarang" untuk langsung ke WhatsApp
const tombolPesan = document.querySelectorAll('.btn-pesan');
const nomorWA = "6281234567890"; // Ganti dengan nomor WhatsApp kamu

tombolPesan.forEach(tombol => {
    tombol.addEventListener('click', function() {
        const namaMotor = this.getAttribute('data-motor');
        // Membuat teks pesan, spasi akan otomatis diubah (encode) oleh browser
        const pesan = `Halo min, saya tertarik untuk menyewa motor ${namaMotor}. Apakah tersedia?`;
        
        // Mengubah teks menjadi format URL
        const pesanURL = encodeURIComponent(pesan);
        
        // Membuka tab baru ke link WhatsApp
        window.open(`https://wa.me/${nomorWA}?text=${pesanURL}`, '_blank');
    });
});

// === FITUR DARK MODE ===
const toggleBtn = document.getElementById('toggle-dark');
const body = document.body;

// Cek apakah user sebelumnya sudah mengaktifkan dark mode (disimpan di browser)
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Light Mode';
}

// Fungsi ketika tombol diklik
toggleBtn.addEventListener('click', function() {
    // Tambah/hapus class 'dark-mode' pada tag <body>
    body.classList.toggle('dark-mode');
    
    // Ubah teks tombol dan simpan pilihan ke localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙 Dark Mode';
    }
});