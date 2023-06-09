function allowDrop(event) {
    event.preventDefault();
}

function dropImage(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const image = document.getElementById("uploadedImage");
        image.src = e.target.result;
        image.classList.remove("hidden");
        document.getElementById("drag-text").style.display = "none";
    };
    reader.readAsDataURL(file);
}

document.getElementById("upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const image = document.getElementById("uploadedImage");
        image.src = e.target.result;
        image.classList.remove("hidden");
        document.getElementById("drag-text").style.display = "none";
    };
    reader.readAsDataURL(file);
});

function selectFilter(filter) {
    // Lógica para selecionar e aplicar filtro
}