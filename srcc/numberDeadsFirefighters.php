<?php
#error_reporting(0);
include 'php/deathsFirefighters.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Смерти</title>
	<link rel="stylesheet" href="css/proba.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js"></script>
	
</head>
<body>
	<h1>Ппроект с проверкой работоспособности СМЕРТЕЙ ПОЖАРНЫХ</h1>
	<a href="stat.html">Назад</a>
	<form method="POST">
	    <select name="selectedData">
	    	<option value="World">World</option>
	    	<?php
	    		foreach ($u as $item) {
	    			echo "<option value='$item'>$item</option>";
	    		}
	    	?>
	    </select>
    	<input type="submit" value="Отправить">
	</form>
	<div class="d">
		<canvas id="myChart" height="400" class="chartCanvas"></canvas>
	</div>
	<script type="text/javascript" >
		var year = <?php echo json_encode($years); ?>; 
		var injuries = <?php echo json_encode($injuries); ?>;
		var name = <?php echo json_encode($selectedOption); ?>;
	</script>
	<script type="text/javascript" src="js/index.js"></script>
</body>
</html>