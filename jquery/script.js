$(document).ready(function() {
	$('div').mouseenter(function() {
		$(this).animate({
			height: '+=10px'
		});
	});

	$('div').mouseleave(function() {
		$(this).animate({
			height: '-=10px'
		});
	});

	$('div').click(function() {
		$(this).toggle(1000);
	});
});



$(document).ready(function(){
    //alert("Ready!");
    function() {
        $('div').slideDowm('slow');
        };
});




$(document).ready(function() {
	$('div').fadeout(1000);
});



$(document).ready(function() {
    $('#green').fadeOut(1000);
});



$(document).ready(function() {
    $('div#notready').fadeOut(1000);
});



$(document).ready();



$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
        });
    });



$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
        });
        
    $('div').mouseleave(function() {
        $('div').fadeTo('fast', 0.5);
        });    
    });



$(document).ready(function() {
    $('div').hide();
    });


$(document).ready(function() {
	$('div').click(function) {
		$('div').fadeOut('slow');
	};
});



// Write your jQuery code on line 3!
$(document).ready(function() {
    var $target = $('li:last-child')
    $target.fadeOut('fast');
});



// Write your jQuery code below!
var $div = $('div');



$(document).ready(function() {
    $('div').fadeIn('slow');
    });
            


$(document).ready(function () {
	$('button').click(function (){
		$('div#blue').fadeOut('slow');
	});
});



$(document).ready(function() {
    $('.pink, .red').fadeTo('slow', 0);
    });



$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});



$(document).ready(function() {
    $('.pull-me').click(function () {
        $('.panel').slideToggle('slow');
        });
    });



var $h1 = $('<h1>Hello</h1>');



$('.info').append("<p>Stuff!</p>");
$('.info').prepend("<p>Stuff!</p>");

$("<p>Stuff!</p>").appendTo('.info');
$("<p>Stuff!</p>").prependTo('.info');



$(document).ready(function () {
    $("body").append("<p>I'm a paragraph!</p>");
    });



$(document).ready(function() {
    $("div#one").after("<p>I'm added!</p>");
    });


var $paragraph = $("p");
$('div').after($paragraph);
// Same as:
$('div').after($("p"));



$(document).ready(function() {
    $("#one").after("<p>I'm added!</p>");
    var $div = $("p");
    $("#two").after($div);
    });



$(document).ready(function() {
    $("#one").after("<p>I'm added!</p>");
    var $div = $("p");
    $("div#two").after($div);
    $("p").remove();
    });
    


$('selector').addClass('className');
$('selector').removeClass('className');



$(document).ready(function () {
    $('#text').addClass('highlighted');
    });



$(document).ready(function () {
    $('#text').toggleClass('highlighted');
    });



$('div').height('100px');
$('div').width('50px');

$('div').css('background-color', '#008800');



$(document).ready(function() {
    $('div').height('200px');
    $('div').width('200px');
    $('div').css('border-radius', '10px');
    });



$('div').html();
$('div').html('I love jQuery!');

$('input:checkbox:checked').val();


$(document).ready(function() {
    $('p').html("jQuery magic in action!");
    });



// $('.button').click( function () {
//     $('list').append($('input'));
//     });
$(document).ready(function () {
    var input = $('input[name=checkListItem]').val();
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val());
        $('div.list').append('item'); 
        });   
    });



$(document).on('event', 'selector', function() {
    Do something!
});

// $(document).ready(function () {
// 	$('button').click(function () {
// 		$('thingToAffect').effect();
// 	});
// });

// $(document).ready(function() {
// 	$('thingToAffect').effect;
// });
 
 $(document).ready(function() {
 	$('button').click(function () {
 		var toAdd = $("input[name=message]").val();
 		$('#message').append("<p>" + toAdd + "</p>")
 	});
 });



$(document).ready(function() {
    $('div').fadeOut('fast');
    });



$(document).ready(function () {
    $('div').click(function () {
        $(this).fadeOut('fast');
        });
    });

// $(document).ready(function () {
// 	$('div').hover(function () {
// 		$('div').addClass('green');
// 	})
// });

$(document).ready(function () {
    $('div').click(function () {
        $(this).fadeOut('fast');
        });
    $('div').hover(function () {
        $(this).addClass('red');
        });    
    });



$(document).ready(function () {
    $('div').dblclick(function () {
        $(this).fadeOut('fast');
        });
    });




// $('div').hover (
// 	function () {
// 		$(this).addClass('highlighted');
// 	},
// 	function () {
// 		$(this).removeClass('highlighted');
// 	}
// })

$(document).ready(function(){

  $('div').hover(
    function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    }
  );

});


$(document).ready(function () {
    $('input').focus(function () {
        $(this).css('outline-color', '#FF0000');
        }); 
    });




// $(document).ready(function () {
// 	$('div').animate({left:'+=10'}, 500);
// })
$(document).ready(function () {
    $(document).keydown(function () {
        $('div').animate({left:'+=10px'}, 500);
        })
    });


$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				// Put our code here
				$('img').animate({top: "-=10px"}, 'fast'); 
				break;
			// Right Arrow Pressed
			case 39:
				// Put our code here
				$('img').animate({left: "+=10px"}, 'fast'); 
				break;
			// Down Arrow Pressed
			case 40:
				// Put our code here
				$('img').animate({top: "+=10px"}, 'fast'); 
				break;
		}
	});
});



$(document).ready(function () {
    $('div').hide();
    });



$(document).ready(function(){

    // Fill in the blanks!
    $('img').animate({ top: '+=100px'}, 1000 );
});



$(document).ready(function () {
    $('div').click(function () {
        $(this).effect('explode'); 
        });
    });


$(document).ready(function () {
    $('div').click(function () {
        $(this).effect('bounce', {times:3}, 500); 
        });
    });


$(document).ready(function () {
    $('div').click(function () {
        $(this).effect('slide'); 
        });
    });




$(document).ready(function () {
	$(#menu).accordion({collapsible: true, active: false});
});



$(document).ready(function () {
    $('#car').draggable();
    });



$(document).ready(function () {
    $('div').resizable();
    });



$(document).ready(function () {
    $('ol').selectable();
    });



$(document).ready(function () {
    $('ol').sortable();
    });



$(document).ready(function () {
    $('#menu').accordion();
    }); 
























