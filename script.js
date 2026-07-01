const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const siteNav = document.getElementById("siteNav");

menuBtn.addEventListener("click", function () {
    siteNav.classList.add("open");
    document.body.classList.add("no-scroll");
    menuBtn.setAttribute("aria-expanded", "true");
});

closeBtn.addEventListener("click", function () {
    siteNav.classList.remove("open");
    document.body.classList.remove("no-scroll");
    menuBtn.setAttribute("aria-expanded", "false");
});