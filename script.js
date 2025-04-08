// Получаем элементы модального окна
var modal = document.getElementById("registerModal");
var btn = document.getElementById("registerBtn");
var span = document.getElementsByClassName("close")[0];

// Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на "x"
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обработка формы регистрации
document.getElementById("registrationForm").onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    var username = document.getElementById("username").value;
    
   // Добавляем игрока в рейтинг
   var li = document.createElement("li");
   li.textContent = username + " - Рейтинг: " + Math.floor(Math.random() * 100); // Генерируем случайный рейтинг
   document.getElementById("ratingList").appendChild(li);

   // Закрываем модальное окно
   modal.style.display = "none";

   // Очищаем форму
   this.reset();
}
