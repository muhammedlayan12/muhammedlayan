let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.nav-bar`);


menuIcon.onclick = () => {
    menuIcon.classList.toggle(`fa-xmark`);
    navbar.classList.toggle(`active`);

}


let sections = document.querySelectorAll(`section`);
let navLinks = document.querySelectorAll(`header nav a`);

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(`id`);

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove(`active`);
                document.querySelector(`header nav a[href*=` + id + `]`).classList.add(`active`);
            });
        };

    }); 

    let header = document.querySelector(`header`);
    header.classList.toggle(`sticky`, window.scrollY > 100);


    menuIcon.classList.remove(`fa-xmark`);
    navbar.classList.remove(`active`);

}

document.addEventListener('DOMContentLoaded', () => {
    let navItems = document.querySelectorAll('header nav a');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all nav items
            navItems.forEach(i => i.classList.remove('active'));
            
            // Add 'active' class to the clicked nav item
            item.classList.add('active');
        });
    });
});


let submit_btn = document.getElementById("submit-btn");

submit_btn.addEventListener("click", () => {
    const name = document.getElementById("fName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("mobileNumber").value;
    const cityCountry = document.getElementById("cityCountry").value;

    if (name && email && number && cityCountry) {
        alert("Thank you for contacting me!");
        document.getElementById("fName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobileNumber").value = "";
        document.getElementById("cityCountry").value = "";
        document.getElementById("msg").value = "";
    } else {
        alert("Please fill in all required Things !");
    }
});


function expButtonScroll() {
    const button = document.querySelector(".expbtn");
    button.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 2000,
            behavior: "smooth"
        });
    });
}

expButtonScroll();
