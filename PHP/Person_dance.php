<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Class and Object Methods</title>
</head>
<body>
	<p>
		<?php 

			/**
			* 
			*/
			class Person 
			{
				public $isAlive = true;

				function __construct($name)
				{
					# code...
					$this -> name = $name;
				}

				public function dance() {
					return "I'm dacing!";
				}
			}

			$me = new Person("Shane");
			if (is_a($me, "Person")) {
				# code...
				echo "I'm a person, ";
			}

			if (property_exists($me, "name")) {
				# code...
				echo "I have a name, ";
			}

			if (method_exists($me, "dance")) {
				# code...
				echo "and I know how to dance!";
			}

		 ?>
	</p>
</body>
</html>