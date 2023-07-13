// Fungsi hitung
const hitung = () => {
  const angka1 = document.getElementById("angka1").value;
  const angka2 = document.getElementById("angka2").value;
  const sistem = document.getElementById("sistem").value;
  
  let hasil = "";

  if (sistem === "biner") {
    hasil = parseInt(angka1, 2) + parseInt(angka2, 2);
  } else if (sistem === "desimal") {
    hasil = parseInt(angka1, 10) + parseInt(angka2, 10);
  } else if (sistem === "hexadesimal") {
    hasil = (parseInt(angka1, 16) + parseInt(angka2, 16)).toString(16);
  }

  document.getElementById("hasil").value = hasil;
};
