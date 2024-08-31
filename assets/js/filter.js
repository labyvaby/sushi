const list = document.querySelector(".catalog__list");
const items = document.querySelectorAll('.catalog__set');

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id;
        

        if (!targetId) return;

        console.log(targetId);
        getItems(targetId);
    });
}

filter();

function getItems(className) {
    items.forEach(item => {

        if (className === 'all') {
            item.style.display = 'block';
        } else {

            if (item.classList.contains(className)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}
