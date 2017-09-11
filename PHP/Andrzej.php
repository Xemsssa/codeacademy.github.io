<html>
    <p>
    <?php
    // Use rand() to print a random number to the screen
    $rand = rand(1, 10);
    print $rand;
    
    ?>
    </p>
    <p>
    <?php
    // Use your knowledge of strlen(), substr(), and rand() to
    // print a random character from your name to the screen.
    $name = "Andrzej";
    //print $name;
    $len = strlen($name);
    //print $len;
    $rand = rand(0, $len);
    //print $rand;
    $str = substr($name, $rand,1);
    print $str;
    ?>
    </p>
</html>