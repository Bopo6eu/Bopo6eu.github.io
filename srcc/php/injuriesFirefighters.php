<?php
error_reporting(0);
$ip = "127.0.0.1";
$name = "root";
$pas = "";
$db = "proba";
//подключение к серверу mysql
$induction = mysqli_connect($ip, $name, $pas, $db);
if ($induction == false) {
	echo "Ошибка подключения";//проверка подключения
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Проверяем, был ли выбран элемент из выпадающего списка
    if (isset($_POST['selectedData'])) {//получаем значение элемента из выпадающего списка
        $selectedOption = $_POST['selectedData'];//передаем это значение в переменную
        echo "Выбранный элемент: " . $selectedOption . "<br>";//проверка на то, что из списка элемент выбран
    } else {
        echo "Ничего не выбрано";
    }
}
$result = mysqli_query($induction,"SELECT * FROM `numberinjuriesfierfighters`");//выбор таблицы и просмотр каждого его элемента, работа с ними
while ($food = mysqli_fetch_assoc($result))//просмотр по отдельности каждый элемент массива по строкам
{
	$ye[]=$food['Years'];
	$a[] = $food['Countries'];	//переменная, которая получает все значения стран
	if ($food['Countries'] == $selectedOption) {//получение данных по отдельным страннам из выпадающего списка
		$years[] = $food['Years'];//получение годов в один массив по этой странне
		echo "Года ", $food['Years'],", ранений пожарных ", $food['Injuries'], "<br>";//вывод этих элементов для проверки
		$injuries[] = $food['Injuries'];		//получение и запись количества звонков по отдельным странам 
	}	
}
$y=[];//переменная, которая будет вместо стран в выпадающем списке
foreach($ye as $drom){ //цикл, в котором убираются повторяющиеся элементы и переставляются последовательно
	if(!in_array($drom,$y)){
		$y[] = $drom;//исключение повторяющихся стран
	}
}
$u=[];//переменная, которая будет вместо стран в выпадающем списке
foreach($a as $number){ //цикл, в котором убираются повторяющиеся элементы и переставляются последовательно
	if(!in_array($number,$u)){
		$u[] = $number;//исключение повторяющихся стран
	}
}
$result = mysqli_query($induction,"SELECT * FROM `numberinjuriesfierfighters`");//выбор таблицы и просмотр каждого его элемента, работа с ними
while ($food = mysqli_fetch_assoc($result)){//просмотр по отдельности каждый элемент массива по строкам
	if ($selectedOption == 'World') {//при выборе из выпадающего списка World происходит сумма по годам
		for ($i=0; $i < count($y); $i++) { //поочередно выбирается год от 1993 до 2019 и суммируются все значения в одну ячейку на год
			if ($y[$i] == $food['Years']) {
				$injuries[$i] += (float)$food['Injuries'];
				$years[$i] = $y[$i];
			}
		}
	}
}
if ($selectedOption == 'World') {
	for ($i=0; $i < count($y) ; $i++) { //цикл вывода значений по всем странам по годам
		echo "Года ", $y[$i], " ранений пожарных ", $injuries[$i], "<br>";
	}
}
?>