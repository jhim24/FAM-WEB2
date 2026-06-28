const modal = document.getElementById("memberModal");

const openBtn = document.querySelector(".add-btn");

const closeBtn = document.querySelector(".close");

openBtn.onclick = () => {

modal.style.display = "flex";

}

closeBtn.onclick = () => {

modal.style.display = "none";

}

window.onclick = (e)=>{

if(e.target==modal){

modal.style.display="none";

}

}
