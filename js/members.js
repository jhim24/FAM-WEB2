const modal = document.getElementById("memberModal");

const openBtn = document.querySelector(".add-btn");

const closeBtn = document.querySelector(".close");

const form = document.getElementById("memberForm");

const membersGrid = document.getElementById("membersGrid");

// Open Modal
openBtn.onclick = function () {
    modal.style.display = "flex";
};

// Close Modal
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Close kapag nag-click sa labas ng modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Save Member
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const firstName = document.getElementById("firstName").value;

    const lastName = document.getElementById("lastName").value;

    const relationship = document.getElementById("relationship").value;

    const birthday = document.getElementById("birthday").value;

    const phone = document.getElementById("phone").value;

    const email = document.getElementById("email").value;

    const newCard = `
    
    <div class="member-card">

        <div class="avatar">

            <i class="fa-solid fa-user"></i>

        </div>

        <h2>${firstName} ${lastName}</h2>

        <p>${relationship}</p>

        <p>Birthday : ${birthday}</p>

        <p>Phone : ${phone}</p>

        <p>Email : ${email}</p>

        <div class="actions">

            <button class="view">View</button>

            <button class="edit">Edit</button>

            <button class="delete">Delete</button>

        </div>

    </div>

    `;

   membersGrid.insertAdjacentHTML("beforeend", newCard);

// Hanapin ang huling card na naidagdag
const lastCard = membersGrid.lastElementChild;

// Delete Button
lastCard.querySelector(".delete").addEventListener("click", function(){

    if(confirm("Delete this family member?")){

        lastCard.remove();

    }

});

form.reset();

modal.style.display = "none";
});
