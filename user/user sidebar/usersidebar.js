
const body = document.body;
const sidebar = document.getElementById("sidebar");
const profileMenu = document.getElementById("profileMenu");
const submenu = profileMenu.querySelector(".submenu");
sidebar.addEventListener("click", (e) => {
    if (profileMenu.contains(e.target)) return;

    const isExpanded = sidebar.classList.contains("expanded");

    if (isExpanded) {
        sidebar.classList.remove("expanded");
        body.classList.remove("sidebar-expanded");

        profileMenu.classList.remove("open");
        submenu.style.display = "none";
    } else {
        sidebar.classList.add("expanded");
        body.classList.add("sidebar-expanded");
    }
});
profileMenu.addEventListener("click", (e) => {
    e.stopPropagation(); 

    const isExpanded = sidebar.classList.contains("expanded");

    if (!isExpanded) {
        sidebar.classList.add("expanded");
        body.classList.add("sidebar-expanded");
    }
    profileMenu.classList.toggle("open");

    submenu.style.display = profileMenu.classList.contains("open") ? "flex" : "none";
});
