<?php 

	/**
	* 
	*/
	class Fruit
	{
		public $count = 3;
		public $type;

	}

	$apple = new Fruit();
	$apple -> type = "apple";
	print $apple -> count;
	print $apple -> type;

 ?>