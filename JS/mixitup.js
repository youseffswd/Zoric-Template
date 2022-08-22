var containerEl = document.querySelector(".filter-container");

var mixer = mixitup(containerEl);
let controlLastActive = document.querySelector(".controls .control.active");
document.querySelectorAll(".controls .control").forEach(btn => {
    btn.onclick = () => {
        controlLastActive.classList.remove("active");
        btn.classList.add("active");
        controlLastActive = btn;
    };
});
