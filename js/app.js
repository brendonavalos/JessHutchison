


var home = $('.container')

$('.data').click(function(event) {

    var project = $('.project.'+this.id);
    

    $(project).css("display", "flex");
    $('.wrap').css("display", "none");
    $(home).css("display", "none");
    window.scrollTo(0, 0);
});







$('.close').on('click', function(){

	 


    $('#video1').attr('src', $('#video1').attr('src'));
    $('#video2').attr('src', $('#video2').attr('src'));
    $('#video3').attr('src', $('#video3').attr('src'));
    $('#video4').attr('src', $('#video3').attr('src'));
    $('.project').css("display", "none");
    $('.wrap').css("display", "flex");
    $(home).css("display", "flex");
  	window.scrollTo(0, 0);
  	
 }); 




