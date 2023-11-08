<?php
error_reporting(0);
$ip = "127.0.0.1";
$name = "root";
$pas = "";
$db = "proba";
$induction = mysqli_connect($ip, $name, $pas, $db);
if ($induction == false) {
	echo "Ошибка подключения";
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Проверяем, был ли выбран элемент из выпадающего списка
    if (isset($_POST['selectedData'])) {
        $selectedOption = $_POST['selectedData'];
        echo "Выбранный элемент: " . $selectedOption . "<br>";
    } else {
        echo "Ничего не выбрано";
    }
}
$result = mysqli_query($induction,"SELECT * FROM `numberinjuries`");
while ($food = mysqli_fetch_assoc($result))
{
	$ye[] = $food['Years'];
	$a[] = $food['Countries'];
	if ($food['Countries'] == $selectedOption) {
		$years[] = $food['Years'];
		echo "Года ", $food['Years'],", Пострадавших ", $food['Injuries'], "<br>";
		$injuries[] = $food['Injuries'];		
	}
}
$y=[];//переменная, которая будет вместо стран в выпадающем списке
foreach($ye as $drom){ //цикл, в котором убираются повторяющиеся элементы и переставляются последовательно
	if(!in_array($drom,$y)){
		$y[] = $drom;//исключение повторяющихся стран
	}
}
$u=[];
foreach($a as $number){//создание элементов для выпадающего списка
	if(!in_array($number,$u)){
		$u[] = $number;
	}
}
$result = mysqli_query($induction,"SELECT * FROM `numberinjuries`");
while ($food = mysqli_fetch_assoc($result))
{
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
		echo "Года ", $y[$i], " пострадавших ", $injuries[$i], "<br>";
	}
}
?>