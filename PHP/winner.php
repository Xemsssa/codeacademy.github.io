
<?php
	// Create an array and push on the names
    // of your closest family and friends
	$my = array();
	
	array_push($my, "Alex");
	array_push($my, "Victor");
	array_push($my, "John");
	array_push($my, "Mike");
	array_push($my, "Jack");
    
	// Sort the list
	sort($my);
	
	//print join($my);
	$count = count($my);
	//print $count;

	// Randomly select a winner!
	$number = rand(0, $count);
	//print $number;
	
	// Print the winner's name in ALL CAPS
    print $winner = strtoupper($my[$number]);
?>
	