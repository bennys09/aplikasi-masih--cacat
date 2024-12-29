function hitungHarga() {
    const tujuan = document.getElementById("tujuan").value;
    const penumpang = document.getElementById("penumpang").value;
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
    }

    const totalHarga = hargaPerPenumpang * penumpang;
    document.getElementById("totalHarga").innerText = "Rp " + totalHarga.toLocaleString();
}
