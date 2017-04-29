
$(function(){
    var carouselList = $("#carousel ul");
    var dots = $(".dots");
    var prev = $(".glyphicon-chevron-left");
    var next = $(".glyphicon-chevron-right");
    var current = 0,
        offset = -400;

    function initDots() {
        var k = carouselList.find('li').length-1;
        for (var c = 0; c < k ; c++) {

            var element = $('<button>o</button>');
            element.on('click', changeSlide.bind(this, c));


            dots.append(element)
        }
    }
    
    prev.click( function () {
        current--;
        if (current < 0){
            current = carouselList.find('li').length-2;
        }
        carouselList.css({marginLeft: current*offset });
    }) ;

    next.click( function () {
        current++;
        if (current == carouselList.find('li').length-1){
            current = 0;
        }
        carouselList.css({marginLeft: current*offset });
    }) ;

    function changeSlide(selected) {

        if (selected != undefined) {
            current = selected;
        } 
        else {
            current++;
        }

        if (current >= carouselList.find('li').length - 1) {

            carouselList.animate({marginLeft: current*offset }, 500, function() {

              current = 0;
              carouselList.css({marginLeft: current*offset });
            });

        }
        else {

            carouselList.animate({marginLeft: current*offset }, 500);
        }
    }
    initDots();

    setInterval(changeSlide, 2000)
});
