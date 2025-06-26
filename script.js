// Menampilkan nilai input ke layar
function appendValue(value) {
  document.getElementById("display").value += value;
}

// Menghapus semua isi layar
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Menghitung hasil ekspresi matematika
function calculateResult() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    alert("Ekspresi tidak valid!");
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
