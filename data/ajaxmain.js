$('nav a').on('click',function(e)
{ e.preventDefault();
    var $contant=(' #contant');
    var url =this.href;
    Console.log(url);
$.ajax(
    {
        method:"GET",
        url=url,

        beforeSend:function(){
            $contant.append('<div id="load">Loading</div>');
        },
        complete:function(){
            $('#load').remove();
            
        },
       Success:function(data){
           $contant.html($(data).find(' #container1')).hide().fadeIn('slow');
       }
        
    });

});
