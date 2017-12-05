$(document).ready(function() {
	var open_right_panel;
	var open_left_panel;

	// Expand Name
	$(".expand").delay(1500).show(1000);

	// Slide down about section
	$('#aboutme').click(function () {
                $('.about-div').slideToggle(300);
                $( ".grid" ).fadeToggle( "4000", "linear" );
                if ($("#aboutme").text() == 'PROJECTS') {
                   $(this).text('ABOUT ME');
               } else {
                   $(this).text('PROJECTS');
               }
            });

	// Panel open
	$(".grid-item").click(function(){
		console.log('here');
		var contentPanelId = $(this).attr("id");
		console.log(contentPanelId);
		var right_id_string = "#" + contentPanelId +"right-panel";
		var left_id_string = "#" + contentPanelId + "left-panel";
        $(right_id_string).animate({width: 'toggle'}, 1000);
        $(right_id_string).css("display", "flex")
  //       // $( ".grid" ).fadeToggle( "4000", "linear" );
        $( left_id_string ).fadeToggle( "4000", "linear" );
        $(left_id_string).css("display", "flex")
        open_right_panel = right_id_string;
        open_left_panel = left_id_string;

        $( "#aboutme" ).fadeToggle( "4000", "linear" );
        // $("#aboutme").replaceWith($( "#back" ).show());
        $(this).toggleClass("active"); return false;
    });

    // Panel close
    $(".back").click(function(){
    	console.log('hi');
        $(open_right_panel).animate({width: 'toggle'});
        $( "#aboutme" ).fadeToggle( "4000", "linear" );
        // $( ".grid" ).fadeToggle( "4000", "linear" );
        $(open_left_panel).fadeToggle( "4000", "linear" );
        
        $(this).toggleClass("active"); return false;
    });
});