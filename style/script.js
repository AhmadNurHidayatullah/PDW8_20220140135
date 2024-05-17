document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    
    var alertText = "Data yang Anda masukkan:\n\n";
    for (var pair of formData.entries()) {
        alertText += pair[0] + ": " + pair[1] + "\n";
    }
    // Menampilkan alert dengan data yang telah diisi
    alert(alertText);
    // Mengatur ulang form setelah pengiriman
    this.reset();
});

document.getElementById('resetOrderBtn').addEventListener('click', function() {
    document.getElementById('orderForm').reset();
});