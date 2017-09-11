<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="style.css">
	<title>Introduction to Object-Orinted PROGRAMMING</title>
</head>
<body>
	<p>
	<?php 

		/**
		* Person
		*/
		class Person
		{
			// properties
			public $isAlive = true;
			public $firstname;
			public $lastname;
			public $age;

			// assigning the value
			public function __construct($firstname, $lastname, $age)
			{
				# code...
				$this -> firstname = $firstname;
				$this -> lastname = $lastname;
				$this -> age = $age;
			}

			public function greet() {
				return "Hello , my name is" $this -> firstname . " " . $this -> lastname . ". Nice to meet you! :-)";
			}
		}

		$me = new Person("boring", "12345", 12345);
		echo $me -> greet();

	 ?>	


	</p>
	
</body>
</html>