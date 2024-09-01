   // Функция для обновления общей суммы
   function updateTotalPrice(counterWrapper) {
    const counterElement = counterWrapper.querySelector('[data-counter]');
    const totalPriceElement = counterWrapper.nextElementSibling;
    const itemPrice = parseInt(totalPriceElement.getAttribute('data-price'));
    const currentCount = parseInt(counterElement.textContent);
    const newTotalPrice = itemPrice * currentCount;
    totalPriceElement.textContent = newTotalPrice + ' сом';
}

// Получаем все обертки счетчиков
const counterWrappers = document.querySelectorAll('.counter__wrapper');

// Навешиваем обработчики кликов на каждый счетчик
counterWrappers.forEach(counterWrapper => {
    counterWrapper.addEventListener('click', (event) => {
        const action = event.target.getAttribute('data-action');
        const counterElement = counterWrapper.querySelector('[data-counter]');
        
        if (action === 'plus') {
            counterElement.textContent = parseInt(counterElement.textContent) + 1;
        }
        
        if (action === 'minus') {
            const currentCount = parseInt(counterElement.textContent);
            if (currentCount > 1) { // Предотвращаем уменьшение ниже 1
                counterElement.textContent = currentCount - 1;
            }
        }
        
        // Обновляем общую сумму
        updateTotalPrice(counterWrapper);
    });
    
    // Изначально устанавливаем правильную сумму
    updateTotalPrice(counterWrapper);
});