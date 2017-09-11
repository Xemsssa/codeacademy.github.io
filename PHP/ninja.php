<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Scop it out!</title>
</head>
<body>
	<?php 

		/**
		* Person
		*/
		class Person {

		}

		class Ninja extends Person {
			const stealth = "MAXIMUM";
		} 

		echo Ninja :: stealth;
	 ?>
	
</body>
</html>