// Toogle and Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

// HADIAH
function openGift() {
    document.querySelector('.explosion').style.display = 'block';
    setTimeout(function () {
        alert("Terimakasih sudah datang kesini, semoga hari mu menyenang kan 😊");
        document.querySelector('.explosion').style.display = 'none';
    }, 500);
}
