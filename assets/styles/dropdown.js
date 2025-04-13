document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");

        dropdown.addEventListener("mouseover", function () {
            dropdownMenu.style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            dropdownMenu.style.display = "none";
        });
    });
});
