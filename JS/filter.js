let controlLastActive = document.querySelector(".controls .control.active");
const filterContainer = document.querySelector(".filter-container");
const filterItems = filterContainer.querySelectorAll(".mix");
document.querySelectorAll(".controls .control").forEach(btn => {
    btn.onclick = btnClickHandler
});


function btnClickHandler(e){
    const btn = e.target
    controlLastActive.classList.remove("active");
    btn.classList.add("active");
    controlLastActive = btn;
    filterItems.forEach(item => {
        if(btn.dataset.filter === "all"){
            item.classList.remove("shrink")
        }else if(item.classList.contains(btn.dataset.toggle)){
            item.classList.remove("shrink")
        }else{
            item.classList.add("shrink")
        }
    })
}
