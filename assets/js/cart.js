function addToCart(catalogSet) {
    const item = {
        imageSrc: catalogSet.querySelector('img').src,
        name: catalogSet.querySelector('h2').textContent,
        details: catalogSet.querySelector('h3').textContent,
        description: catalogSet.querySelector('p').textContent,
        quantity: parseInt(catalogSet.querySelector('[data-counter]').textContent),
        price: parseInt(catalogSet.querySelector('h4').getAttribute('data-price'))
    };

    // Получаем текущие данные корзины из localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Проверяем, есть ли уже товар с таким же именем в корзине
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);

    if (existingItemIndex > -1) {
        // Если товар уже есть, увеличиваем его количество
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        // Если товара еще нет, добавляем его в корзину
        cart.push(item);
    }

    // Сохраняем обновленную корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Товар добавлен в корзину!');
}

document.querySelectorAll('.order-button').forEach(button => {
    button.addEventListener('click', () => {
        const catalogSet = button.closest('.catalog__set');
        addToCart(catalogSet);
    });
});







function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.cart-total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    // Очищаем контейнер перед добавлением новых элементов
    cartItemsContainer.innerHTML = '';

    // Отрисовка каждого товара в корзине
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const itemTotalPrice = item.price * item.quantity;
        total += itemTotalPrice;

        cartItem.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p>${item.details}</p>
            <p>${item.description}</p>
            <p>${item.quantity} шт. x ${item.price} сом</p>
            <p class="item-total">${itemTotalPrice} сом</p>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    // Обновление общей суммы
    cartTotalElement.textContent = 'Итого: ' + total + ' сом';
}

// Функция для очистки корзины
function clearCart() {
    localStorage.removeItem('cart'); // Удаляем корзину из localStorage
    renderCart(); // Перерисовываем пустую корзину
}

// Обработчик клика для кнопки очистки корзины
document.querySelector('.clear-cart').addEventListener('click', clearCart);

// Вызываем функцию для отрисовки корзины при загрузке страницы
document.addEventListener('DOMContentLoaded', renderCart);