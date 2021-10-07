function fileValidation() {
    var fileInput =
        document.getElementById('file');

    var filePath = fileInput.value;

    // Allowing file type
    var allowedExtensions =
        /(\.jpg)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');

        return false;

    } else {

        // Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').style.backgroundImage = "url(" + reader.result + ")";

            };

            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}
