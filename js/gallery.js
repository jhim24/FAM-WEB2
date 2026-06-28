const upload = document.getElementById("photoUpload");

const gallery = document.querySelector(".gallery-grid");

upload.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        const card = document.createElement("div");

        card.className = "photo-card";

        card.innerHTML = `

        <img src="${e.target.result}" class="gallery-image">

        <div class="photo-info">

            <h3>${file.name}</h3>

            <p>${new Date().toLocaleDateString()}</p>

        </div>

        `;

        gallery.prepend(card);

    }

    reader.readAsDataURL(file);

});
