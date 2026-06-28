const upload = document.getElementById("photoUpload");

const gallery = document.getElementById("galleryGrid");

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
        
        card.querySelector(".gallery-image").onclick = function(){

document.getElementById("imageModal").style.display="flex";

document.getElementById("previewImg").src=e.target.result;

document.getElementById("previewName").innerText=file.name;

};
        const photo={

title:file.name,

image:e.target.result,

date:new Date().toLocaleDateString()

};

savePhoto(photo);

    }

    reader.readAsDataURL(file);

});

// ===========================
// SAVE PHOTO
// ===========================

function savePhoto(photo){

let photos = JSON.parse(localStorage.getItem("gallery")) || [];

photos.push(photo);

localStorage.setItem("gallery", JSON.stringify(photos));

}

// ===========================
// LOAD PHOTO
// ===========================

function loadGallery(){

let photos = JSON.parse(localStorage.getItem("gallery")) || [];

photos.forEach(photo=>{

const card=document.createElement("div");

card.className="photo-card";

card.innerHTML=`

<img src="${photo.image}" class="gallery-image">

<div class="photo-info">

<h3>${photo.title}</h3>

<p>${photo.date}</p>

<button class="delete-btn">Delete</button>

</div>

`;

gallery.appendChild(card);

});

}

// ===========================

window.onload = loadGallery;
document.getElementById("closeImage").onclick=function(){

document.getElementById("imageModal").style.display="none";

};

window.addEventListener("click",function(e){

if(e.target==document.getElementById("imageModal")){

document.getElementById("imageModal").style.display="none";

}

});
