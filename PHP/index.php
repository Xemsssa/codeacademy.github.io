<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="stylesheet.css"/>
	<title>Codeacadey Languages</title>
</head>
<body>
	<h1>Languages you learn ob Codeacademy:</h1>
	<div class="wrapper">
		<ul>
			<?php 

				$lang = array("Javascript", "HTML\CSS", "PHP", "Python", "Ruby");

				foreach ($langs in $lang) {
					echo "<li>$lang</li>";
				}

				uset($lang);

			 ?>
		</ul>
	</div>
	
</body>
</html>