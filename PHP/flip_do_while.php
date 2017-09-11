<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="style.css">
	<title>More Coin Flips</title>
</head>
<body>
	<p>We will keep flipping a coin as long as result is head!</p>
	<?php 

		$flipCount = 0;
		do {
			$flip = rand(0,1);
			$flipCount ++;
			if ($flip) {
				# code...
				echo "<div class = \"coin\">H</div>";
			} else {
				# code...
				echo "<div class = \"coin\">T</div>";
			}
		}
		while ($flip);
		$verb = "were";
		$last = "flip";
		if ($flipCount == 1) {
			# code...
			$verb = "was";
			$last = "flip";
		}
		echo "<p>There {verb} {$flipCount} {$last}</p>";
	 ?>
	
</body>
</html>