
// Navbar Menu 
let barMenu = document.getElementsByClassName("icon-menu");
let menu = document.getElementsByClassName("nav-menu");

let isClicked = false;

barMenu[0].addEventListener("click", function () {
    if (isClicked == false) {
        menu[0].style.display = "block";
        isClicked = true;
    } else {
        menu[0].style.display = "none";
        isClicked = false;
    }
})


// Show Aside Menu
let menuBtn = document.getElementById("show-menu");
let aside = document.getElementsByTagName("aside"); 
let conBox = document.getElementsByClassName("box-content");
let MenuClicked = true;

menuBtn.onclick = function () {

    if (MenuClicked == false){
        aside[0].style.display = "block";
        MenuClicked = true;


        if (window.innerWidth >= 1200){
            for (let y = 0; y < conBox.length; y++) {
                conBox[y].style.width = "70%";
            }
            
        }
        
    }
    else if (MenuClicked == true) {
        aside[0].style.display = "none";
        MenuClicked = false;


        if (window.innerWidth >= 1200){
            for (let y = 0; y < conBox.length; y++) {
                conBox[y].style.width = "100%";
            }
            
        }

    }

}

// Aside Menu
let sideMenu = document.getElementsByClassName("side-menu");
let isHide = true;

sideMenu[0].addEventListener("click", function(e) {
    // console.log(e.target);


    for (let i = 0; i < sideMenu[0].children.length; i++){

        // if has active class romove it
        if (sideMenu[0].children[i].children[0].classList.contains("active") && e.target.tagName !== "LI"){
            sideMenu[0].children[i].children[0].classList.remove("active");
            sideMenu[0].children[i].children[0].children[0].style.transform = "rotate(180deg)";

            sideMenu[0].children[i].children[1].style.display = "none"

        }

        
    }

    // add active class to object when i click on it
    let sub = e.target.parentElement;
    if (e.target.tagName == "SPAN" && isHide == true) {
        e.target.className = "active";
        e.target.children[0].style.transform = "rotate(0deg)";
        sub.children[1].style.display = "block";
        isHide = false;
        
        
    } else if (e.target.tagName == "SPAN" && isHide == false) {
        sub.children[1].style.display = "none";
        isHide = true;
        
    }


    if (e.target.tagName == "IMG" && isHide == true){
        e.target.parentElement.className = "active";
        e.target.style.transform = "rotate(0deg)";
        e.target.parentElement.parentElement.children[1].style.display = "block";
        isHide = false;
    } else if (e.target.tagName == "IMG"){
        e.target.parentElement.parentElement.children[1].style.display = "none";
        isHide = true;
    }

})


/* 
    Add active when i click the li
    Hide All content Box
    Show 
*/
let menuLinks = document.getElementById("aside-links");

menuLinks.addEventListener('click', function(e){
    
    let classValue = e.target.classList[0];

    if (e.target.hasAttribute("class")) {
        for (let z = 0; z < menuLinks.children.length; z++){

            if (menuLinks.children[z].classList.contains("activeted")) {

                menuLinks.children[z].classList.remove("activeted");
            }
            
        }

        for (let c = 0; c < conBox.length; c++){
            conBox[c].style.display = "none";
            
        }
    
        // e.target.style.color = "#ffb620";
        // e.target.style.paddingLeft = "10px";
        e.target.classList.add("activeted");

        document.getElementsByClassName(classValue)[1].style.display = "block";
        document.getElementsByClassName(classValue)[1].style.transform = "scale(1)";
    }
    
})



window.onscroll = function () {
    console.log(window.scrollY.valueOf());

    let scrollPos = window.scrollY.valueOf();

    if (scrollPos <= 110) {
        console.log(scrollPos);
        aside[0].style.top = `calc(110px - ${scrollPos}px)`;
        aside[0].style.height = `calc(110vh - ${scrollPos}px)`;
        
        if (window.innerWidth < 1200){
            menu[0].style.top = `calc(110px - ${scrollPos}px)`;
            menu[0].style.height = `calc(110vh - ${scrollPos}px)`;
        }
        
    } else {
        aside[0].style.top = "0px";
        aside[0].style.height = "100vh";

        if (window.innerWidth < 1200){
            menu[0].style.top = "0px";
        menu[0].style.height = "100vh";
        }
        
    }

    
}