// Получаем элемент выпадающего списка
var dropdown = document.getElementById("выпадающий_список");

// Добавляем обработчик события изменения значения списка
dropdown.addEventListener("change", function() {
  var selectedOptions = Array.from(this.selectedOptions);

  // Сбрасываем все чекбоксы
  selectedOptions.forEach(function(option) {
    option.removeAttribute("selected");
    option.selected = false;
  });

  // Устанавливаем "selected" для выбранных опций
  var checkboxes = Array.from(this.querySelectorAll("option:checked"));
  checkboxes.forEach(function(checkbox) {
    checkbox.setAttribute("selected", "selected");
    checkbox.selected = true;
  });
});