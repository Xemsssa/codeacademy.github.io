<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Iteration Nation</title>
</head>
<body>
	<p>
		<?php 

			$food = array('pizza', 'salad', 'burger');
			$salad = array('lettuce' => 'with', 'tomato' => 'without', 'onions' => 'with');

			$length = count($food);

			for ($i=0; $i < $length; $i++) { 
			 	# code...
			 	echo $food[$i] . '<br />';
			 } 

			 echo '<br /> <br />I want my salad: <br />';

			 foreach ($salad as $key => $value) {
			 	# code...
			 	echo $value . ' ' . $key . '<br />';

			 	echo '<br /><br />';
			 }
		 ?>
	</p>
</body>
</html>