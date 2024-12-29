<?php
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $telepon = $_POST['telepon'];
    $tujuan = $_POST['tujuan'];
    $tanggal = $_POST['tanggal'];
    $penumpang = $_POST['penumpang'];

    $hargaPerPenumpang = 0;
    switch ($tujuan) {
        case "Tungkal":
            $hargaPerPenumpang = 100000;
            break;
        case "Singkut":
            $hargaPerPenumpang = 150000;
            break;
        case "Tebing-tinggi":
            $hargaPerPenumpang = 80000;
            break;
        case "Hokaido":
            $hargaPerPenumpang = 4250000;
            break;
        default:
            $hargaPerPenumpang = 0;
    }

    $totalHarga = $hargaPerPenumpang * $penumpang;

    $query = "INSERT INTO pemesanan (nama, telepon, tujuan, tanggal, penumpang, total_harga) 
              VALUES ('$nama', '$telepon', '$tujuan', '$tanggal', '$penumpang', '$totalHarga')";

    if (mysqli_query($koneksi, $query)) {
        echo "Pemesanan berhasil disimpan!";
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($koneksi);
    }

    mysqli_close($koneksi);
}
?>
