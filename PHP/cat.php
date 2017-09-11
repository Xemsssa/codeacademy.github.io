<!DOCTYPE html>
<html>
    <head>
	  <title> Challenge Time! </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        <?php
            // Your code here
            class Cat {
              
                public $isAlive = true;
                public $numLegs = 4;
                public $name;
              
                public function __construct() { 
                  $name = $this -> name;  
                  }
                  
                public function meow() {
                    return "Meow meow";
                    }  
              
              }
              
            $codeCat = new Cat();
            $codeCat -> name = "CodeCat";
            
            echo $codeCat -> meow();
            
            
          
        ?>
      </p>
    </body>
</html>