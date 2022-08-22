// Navbar code

const burgerBtn = document.querySelector(".burger-btn");
const nav = document.querySelector("header nav");
const navLinks = document.querySelectorAll("header nav li a");

burgerBtn.onclick = () => {
    burgerBtn.classList.toggle("active");
    nav.classList.toggle("active");
    const checkforElements = document.querySelectorAll(
        "header nav.active li a"
    );
    if (checkforElements.length != 0) {
        addOrRemoveTransitionDelay(navLinks, 0.05);
    } else {
        addOrRemoveTransitionDelay(navLinks, 0);
    }
};
window.onresize = () => {
    if (window.innerWidth >= 992) {
        burgerBtn.classList.remove("active");
        nav.classList.remove("active");
        addOrRemoveTransitionDelay(navLinks, 0);
    }
};
function addOrRemoveTransitionDelay(items, int) {
    items.forEach((item, ind) => {
        item.style.transitionDelay = `${ind * int}s`;
    });
}
//  progress bars js
const bars = document.querySelectorAll(".skills .progress .bar");
const skills = document.querySelector(".skills");
const numbers = document.querySelectorAll(
    ".achievments .content-container .box h3"
);
const achievments = document.querySelector(".achievments");
// Ask Ahmed
// will Be commented
numbers.forEach(number => {
    number.textContent = number.dataset.num;
});
// end Will be commented
window.onscroll = () => {
    if (isVisible(skills)) {
        bars.forEach(item => {
            item.firstElementChild.style.width =
                item.firstElementChild.dataset.percentage;
        });
    }
    if (scrollY > Home.offsetHeight) {
        document.getElementById("go-up").classList.add("active");
    } else {
        document.getElementById("go-up").classList.remove("active");
    }
    // if (isVisible(achievments)) {
    //     numbers.forEach(number => {
    //         countUp(number);
    //     });
    // }
};
// achievments numbers

// function countUp(ele) {
//     const number = ele.dataset.num;

//     if (parseInt(ele.textContent) === 000) {
//         let counterUp = setInterval(() => {
//             if (parseInt(ele.textContent) < number) {
//                 ele.textContent = parseInt(ele.textContent) + 10;
//             } else {
//                 clearInterval(counterUp);
//                 ele.textContent = number;
//             }
//         }, 1);
//     }
// }
//  slider js
const persons = document.querySelectorAll(".testimonials .persons .person");
let lastActive = document.querySelector(
    ".testimonials .persons .person.active"
);
const slider = document.querySelector(
    ".testimonials .slider-container .slider"
);
const duration = 5000;
const sliderTimingFunction = () => {
    let slideNumber = parseInt(lastActive.dataset.slide);
    let whichSlide = slideNumber == 3 ? 0 : slideNumber + 1;

    const newActive = document.querySelector(
        `.testimonials .persons .person[data-slide="${
            whichSlide === 3 ? 0 : whichSlide
        }"]`
    );

    resignActive(newActive);
    slider.style.transform = `translateX(${-whichSlide * (100 / 4)}%)`;
    setTimeout(() => {
        if (whichSlide === 3) {
            infinitLoopSlider();
        }
    }, 300);
};
let sliderTiming = setInterval(sliderTimingFunction, duration);
persons.forEach(person => {
    person.onclick = () => {
        resignActive(person);
        slider.style.transform = `translateX(${
            -person.dataset.slide * (100 / 4)
        }%)`;
        clearInterval(sliderTiming);
        sliderTiming = setInterval(sliderTimingFunction, duration);
    };
});
function resignActive(newActive) {
    lastActive.classList.remove("active");
    newActive.classList.add("active");
    lastActive = newActive;
}
function infinitLoopSlider() {
    slider.style.transition = "initial";
    slider.style.transform = "translateX(0)";
    setTimeout(() => {
        slider.style.transition = ".3s ease-in-out";
    }, 100);
}
// Global Function
function isVisible(elem) {
    let vwTop = window.pageYOffset;
    let vwBottom = window.pageYOffset + window.innerHeight;
    let elemTop = elem.offsetTop;
    let elemHeight = elem.offsetHeight;

    if (
        (vwBottom - vwTop) * 0.65 + vwTop > elemTop &&
        vwTop - elemHeight < elemTop
    ) {
        return true;
    } else {
        return false;
    }
}
//  go up functionality
document.getElementById("go-up").onclick = () => window.scrollTo(0, 0);
