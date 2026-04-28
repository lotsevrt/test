// Знаходимо кнопку за її ID
const themeButton = document.getElementById('theme-btn');

// Додаємо слухача подій (Event Listener) на клік
themeButton.addEventListener('click', function() {
    // Перемикаємо клас 'light-mode' на тегу <body>
    document.body.classList.toggle('light-mode');
    
    // Міняємо текст на кнопці залежно від теми
    if (document.body.classList.contains('light-mode')) {
        themeButton.textContent = '🌙 Темна тема';
        console.log('Увімкнено світлу тему');
    } else {
        themeButton.textContent = '☀️ Світла тема';
        console.log('Увімкнено темну тему');
    }
});