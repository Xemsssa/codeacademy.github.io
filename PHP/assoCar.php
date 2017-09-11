<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Making the Connection</title>
</head>
<body>
	<p>
		<?php 

			$car = array(2012, 'blue', 5, 'BMW');

			$assocCar = array('year' => 2012, 'colour' => 'blue', 'doors' = 5, 'make' => 'BMW');
			//array_push($car, 'make' => 'BMW');

			echo $car[3];
			echo <br />;

			echo $assocCar['make']
		 ?>
	</p>
	
</body>
</html>