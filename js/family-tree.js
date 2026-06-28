// =====================================
// FAMILY TREE
// Version 2.0
// =====================================

const members = document.querySelectorAll(".member-card");

members.forEach(member => {

    member.addEventListener("click", function(){

        const name = this.querySelector("h3").innerText;

        const relation = this.querySelector("span").innerText;

        alert(

`Name : ${name}

Relationship : ${relation}

More information coming soon.`

        );

    });

});

// Hover Effect

members.forEach(member=>{

member.addEventListener("mouseenter",()=>{

member.style.transform="translateY(-12px) scale(1.03)";

});

member.addEventListener("mouseleave",()=>{

member.style.transform="translateY(0px) scale(1)";

});

});
