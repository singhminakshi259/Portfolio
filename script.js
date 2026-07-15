// ================================
// Typing Effect
// ================================

const typingText = document.querySelector(".typing");

const words = [
    "B.Tech CSE Student",
    "Aspiring Full Stack Developer",
    "Frontend Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    let currentWord = words[wordIndex];

    if(isDeleting){

        typingText.textContent =
        currentWord.substring(0,charIndex--);

    }

    else{

        typingText.textContent =
        currentWord.substring(0,charIndex++);

    }

    let speed = isDeleting ? 60 : 120;

    if(!isDeleting && charIndex===currentWord.length+1){

        isDeleting=true;

        speed=1200;

    }

    if(isDeleting && charIndex===0){

        isDeleting=false;

        wordIndex++;

        if(wordIndex===words.length){

            wordIndex=0;

        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect();


// ================================
// Active Navbar
// ================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


// ================================
// Back To Top Button
// ================================

const topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ================================
// Scroll Reveal
// ================================

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",reveal);

function reveal(){

    reveals.forEach(section=>{

        const windowHeight=window.innerHeight;

        const revealTop=section.getBoundingClientRect().top;

        if(revealTop<windowHeight-100){

            section.classList.add("show");

        }

    });

}

reveal();