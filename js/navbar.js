const menuBtn = document.getElementById("menuBtn");

const sidebar = document.getElementById("sidebar");

const overlay = document.getElementById("overlay");

const closeMenu = document.getElementById("closeMenu");

menuBtn.onclick = function(){

sidebar.classList.add("active");

overlay.classList.add("active");

}

closeMenu.onclick = function(){

sidebar.classList.remove("active");

overlay.classList.remove("active");

}

overlay.onclick = function(){

sidebar.classList.remove("active");

overlay.classList.remove("active");

}
