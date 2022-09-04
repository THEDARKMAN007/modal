const modal_btn = document.querySelector(".modal-btn");
const delete_btn = document.querySelector(".close-btn");
const section2 = document.querySelector(".open-modal");

function create() {
    section2.style.visibility = `visible`
    section2.style.zIndex = `10`;
}

function remove() {
    section2.style.visibility = `hidden`;
    section2.style.zIndex = `-10`;
}

modal_btn.addEventListener('click', create)
delete_btn.addEventListener('click', remove)
