function hitungHarga() {
    const tujuan = document.getElementById("tujuan").value;
    const penumpang = parseInt(document.getElementById("penumpang").value) || 0;
    let hargaPerPenumpang = 0;

    switch (tujuan) {
        case "Tungkal":
            hargaPerPenumpang = 100000;
            break;
        case "Singkut":
            hargaPerPenumpang = 150000;
            break;
        case "Tebing-tinggi":
            hargaPerPenumpang = 80000;
            break;
        case "Hokaido":
            hargaPerPenumpang = 4250000;
            break;
        default:
            hargaPerPenumpang = 0;
            break;
    }

    const totalHarga = hargaPerPenumpang * penumpang;
    document.getElementById("totalHarga").textContent = "Rp " + totalHarga.toLocaleString();
}

document.getElementById("tujuan").addEventListener("change", hitungHarga);
document.getElementById("penumpang").addEventListener("input", hitungHarga);

hitungHarga();
