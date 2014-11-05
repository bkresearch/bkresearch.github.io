$( document ).ready(function() {
    console.log( "ready!" );
	
	$('#myTab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})
});