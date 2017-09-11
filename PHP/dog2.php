<!DOCTYPE html>
<html>
    <head>
      <title> Practice makes perfect! </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
    </head>
    <body>
      <p>
        <?php
            class Dog {
                
                public $numLegs = 4;
                
                // TODO problem with name
                public $name;
                
                public function __construct($name) {
                    
                    $this -> name = $name;
                    
                    }
                    
                public function bark() {
                    return "Woof!";
                    }    
                
                public function greet() {
                    
                    return "Hello,i am a " . $this -> name . "!";
                    
                    }
                
                }
                
            $dog1 = new Dog("Barker");
            $dog2 = new Dog("Amigo");
            
            $dog1 -> name = "Barker";
            $dog2 -> name = "Amigo";
            
            //echo $dog1 -> name;
            //echo $dog1 -> name;
            
            //echo $dog1 -> greet();
            //echo $dog2 -> bark();
            
            echo $dog1 -> bark();
            echo $dog2 -> greet();
            
        ?>    
      </p>
    </body>
</html>