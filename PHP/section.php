
<!-- <?php php info(); ?> -->

<?php 
	date_default_timezone_get('US/Eastern');
	$time = date('H:i:s', time());
 ?>


<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Current time in Cambridge</title>
	</head>
	<body>
		The current time in Cambridge is <?= $time ?>.
	</body>
</html>
