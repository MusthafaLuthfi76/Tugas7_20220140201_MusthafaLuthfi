function preOrder() {
    var response = window.prompt("Apakah Anda ingin melakukan pre-order untuk Ghost of Tsushima? (Yes/No)");

    if (response !== null) {
        if (response.toLowerCase() === "yes") {
            alert("Terima kasih atas pre-order Anda!");
        } else if (response.toLowerCase() === "no") {
            alert("Anda memilih untuk tidak melakukan pre-order.");
        } else {
            alert("Silakan jawab dengan 'Yes' atau 'No'.");
        }
    }
}

document.getElementById("video").addEventListener("click", function() {
    alert("Ini video Trailer Ghost of Tsushima");
});

document.getElementById("audio").addEventListener("click", function() {
    alert("Ini audio Kanashi Uta (Fanmade) | Ghost of Tsushima");
});

document.getElementById("gambar").addEventListener("click", function() {
    alert("Ini gambar Gameplay Ghost of Tsushima");
});