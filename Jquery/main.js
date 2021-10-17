$(function(){

    $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();
 
        var firstImg = currentImg.prevAll().last();
 
        if(nextImg.length > 0){
             currentImg.removeClass('active').css('z-index','-10');
             nextImg.addClass('active').css('z-index','10');
        }
        else{
             currentImg.removeClass('active').css('z-index','-10');
             firstImg.addClass('active').css('z-index','10');
        }
    })
 
 
    $('.back').on('click', function(){
     var currentImg = $('.active');
     var prevImg = currentImg.prev();
     var firstImg = currentImg.nextAll().last();
     if(prevImg.length > 0){
          currentImg.removeClass('active').css('z-index','-10');
          prevImg.addClass('active').css('z-index','10');
     }
     else{
         currentImg.removeClass('active').css('z-index','-10');
         firstImg.addClass('active').css('z-index','10');
         
     }
 
    })

    $('#kungfuPanda1').click(function() {
        window.location.href = 'event.html#kungfuPanda';
    })

    $('#artEvent').click(function() {
        window.location.href = 'event.html#artShow';
    })

    $('#kungfuPanda2').click(function() {
        window.location.href = 'event.html#pandaCrossover';
    })
 });