document.querySelectorAll(".questions__info").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
        const header = item.querySelector("h4");
        if (item.classList.contains("active")) {
            header.textContent = header.textContent.replace('+', '-');
        } else {
            header.textContent = header.textContent.replace('-', '+');
        }
    });
});
