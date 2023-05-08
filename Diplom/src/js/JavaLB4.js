const $btn = document.querySelector('#mybutton') // Определяем нашу кнопку
const list = document.querySelector("#list"); // Наш список
const items = document.querySelectorAll("li"); // Наши элементы списка

function sortID() {
  let clearArr = []; // создаем временный массив
  
  items.forEach(function(item) {
    clearArr.push(item.innerText); // пушим ТЕКСТ каждого li элемента в временный массив
  });
  
  clearArr.sort(); // теперь сортируем
  
  list.innerHTML = '' // и чистим список в dom-e, чтобы то что мы дальше вставим не сдублировалось
  
  clearArr.forEach(item => {
    let li = document.createElement('li') // создаем новый LI
    li.innerHTML = item; // у которого ставим innerHTML равный элементу массива
    
    list.append(li) // и добавляем в старый почищенный список этот элемент
  });
}
   
$btn.onclick = sortID;