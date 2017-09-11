<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="style.css">
		<title>Coin flip</title>
	</head>
	<body>
		<p>We are going to flip coin</p>
		<?php 

		$headCount = 0;
		$flipCount = 0;

		while ($headCount <  3) {
			$flip = rand(0,1);
			$flipCount ++;
			if ($flip) {
				# code...
				$headCount ++;
				echo "<div class = \" coin\">H</div>";
			} else {
				# code...
				$headCount = 0;
				echo "<div class = \" coin\">T</div>";
			}
			
		}
		echo "<p> took {$flipCount} flip!</p>";

		 ?>
	</body>
</html>