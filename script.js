// Script untuk menghilangkan splash screen setelah 3 detik
setTimeout(function() {
    document.getElementById("splashScreen").style.opacity = "0"; // Mengatur opacity menjadi 0
    setTimeout(function() {
        document.getElementById("splashScreen").style.display = "none"; // Menyembunyikan splash screen
    }, 1000); // Delay 1 detik untuk efek transisi
}, 3000); // Delay 3 detik sebelum mulai menghilang

// Fungsi untuk tombol kembali ke atas
$(document).ready(function() {
    // Menampilkan atau menyembunyikan tombol saat scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { // Jika scroll lebih dari 100px
            $('#backToTop').fadeIn(); // Tampilkan tombol
        } else {
            $('#backToTop').fadeOut(); // Sembunyikan tombol
        }
    });

    // Fungsi untuk kembali ke atas saat tombol diklik
    $('#backToTop').click(function() {
        $('body,html').animate({
            scrollTop: 0 // Mengatur scroll ke posisi 0 (atas)
        }, 800); // Durasi animasi 800ms
        return false; // Mencegah aksi default
    });
});