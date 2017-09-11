<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>BlackJack!</title>
</head>
<body>
	<p>
		
		<?php 

			$deck = array(array('2 of Diamonds', 2),
					array('5 of Diamonds', 5),
					array('7 of Diamonds', 7));

			echo "You have" . $deck[2][0] . "!";	

		 ?>

	</p>
	
</body>
</html>