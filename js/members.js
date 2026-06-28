// ===============================
// FAMILY MEMBERS SYSTEM - PART 1
// ===============================

// ELEMENTS
const modal = document.getElementById("memberModal");
const viewModal = document.getElementById("viewModal");

const openBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close");
const closeViewBtn = document.querySelector(".close-view");

const form = document.getElementById("memberForm");
const membersGrid = document.getElementById("membersGrid");

// LOCAL STORAGE
let members = JSON.parse(localStorage.getItem("members")) || [];

// ===============================
// MODAL
// ===============================

openBtn.onclick = () => {
    modal.style.display = "flex";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

closeViewBtn.onclick = () => {
    viewModal.style.display = "none";
};

window.onclick = function (e) {

    if (e.target === modal) {

        modal.style.display = "none";

    }

    if (e.target === viewModal) {

        viewModal.style.display = "none";

    }

};

// ===============================
// SAVE MEMBER
// ===============================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const member = {

        id: Date.now(),

        firstName: document.getElementById("firstName").value,

        lastName: document.getElementById("lastName").value,

        relationship: document.getElementById("relationship").value,

        birthday: document.getElementById("birthday").value,

        phone: document.getElementById("phone").value,

        email: document.getElementById("email").value

    };

    members.push(member);

    saveMembers();

    renderMembers();

    form.reset();

    modal.style.display = "none";

});

// ===============================
// SAVE LOCAL STORAGE
// ===============================

function saveMembers(){

    localStorage.setItem(

        "members",

        JSON.stringify(members)

    );

}

// ===============================
// RENDER MEMBERS
// ===============================

function renderMembers(){

    membersGrid.innerHTML = "";

    members.forEach(member=>{

        membersGrid.innerHTML += `

<div class="member-card">

<div class="avatar">

<i class="fa-solid fa-user"></i>

</div>

<h2>${member.firstName} ${member.lastName}</h2>

<p>${member.relationship}</p>

<p>Birthday : ${member.birthday}</p>

<p>Phone : ${member.phone}</p>

<p>Email : ${member.email}</p>

<div class="actions">

<button
class="view"
data-id="${member.id}">

View

</button>

<button
class="edit"
data-id="${member.id}">

Edit

</button>

<button
class="delete"
data-id="${member.id}">

Delete

</button>

</div>

</div>

`;

    });

}

renderMembers();
// ===============================
// DELETE • VIEW • SEARCH
// ===============================

// DELETE MEMBER
document.addEventListener("click", function (e) {

    // DELETE
    if (e.target.classList.contains("delete")) {

        const id = Number(e.target.dataset.id);

        if (confirm("Delete this family member?")) {

            members = members.filter(member => member.id !== id);

            saveMembers();

            renderMembers();

        }

    }

    // VIEW
    if (e.target.classList.contains("view")) {

        const id = Number(e.target.dataset.id);

        const member = members.find(m => m.id === id);

        if (!member) return;

        document.getElementById("viewName").textContent =
            member.firstName + " " + member.lastName;

        document.getElementById("viewRelationship").textContent =
            member.relationship;

        document.getElementById("viewBirthday").textContent =
            member.birthday || "-";

        document.getElementById("viewPhone").textContent =
            member.phone || "-";

        document.getElementById("viewEmail").textContent =
            member.email || "-";

        viewModal.style.display = "flex";

    }

});

// ===============================
// SEARCH MEMBER
// ===============================

const searchInput = document.querySelector(".search-area input");

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    const cards = document.querySelectorAll(".member-card");

    cards.forEach(card => {

        const name = card.querySelector("h2").textContent.toLowerCase();

        const relationship = card.querySelector("p").textContent.toLowerCase();

        if (
            name.includes(keyword) ||
            relationship.includes(keyword)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});

// ===============================
// INITIAL LOAD
// ===============================

window.onload = function () {

    renderMembers();

};
