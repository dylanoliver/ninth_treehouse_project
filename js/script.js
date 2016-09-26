//make the dot class disappear when close class is clicked

$(document).ready(function(){
	$(".close").click(function(){
		$(".dot").hide();
	});
});

//change class of li element to active when clicked

$('ul.navigation li a').click(
function(e) {
	e.preventDefault();
	e.stopPropagation;
	$(this).closest('ul').find('.active').removeClass('active');
	$(this).parent().addClass('active');
});