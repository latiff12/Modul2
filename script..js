// Fungsi untuk mencari dosen berdasarkan nama
function FilterDosen() {
    // Ambil nilai input pencarian
    var input = document.getElementById("searchInput");
    var filter = input.value.toLowerCase();  // Ubah menjadi huruf kecil
    var table = document.querySelector("table");
    var rows = table.getElementsByTagName("tr");

    // Loop untuk mengecek setiap baris dalam tabel
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var nameCell = cells[1]; // Kolom nama dosen ada di kolom kedua (index 1)

        // Jika nama dosen ditemukan dan sesuai dengan filter, tampilkan baris
        if (nameCell) {
            var nameText = nameCell.textContent || nameCell.innerText;
            if (nameText.toLowerCase().indexOf(filter) > -1) {
                rows[i].style.display = ""; // Tampilkan baris jika cocok
            } else {
                rows[i].style.display = "none"; // Sembunyikan baris jika tidak cocok
            }
        }
    }
}
