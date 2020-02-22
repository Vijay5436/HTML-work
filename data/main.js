

$('nav a').on('click',function(e)
{ e.preventDefault();
    var url =this.href;
    $('#container').remove();
    $('#contant').load(url+'#container').hide().fadeIn('slow');




});