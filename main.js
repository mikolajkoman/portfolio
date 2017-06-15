    $(document).ready(function(){
        $(document.body).fadeIn(6000);
        // $(".slogan").fadeIn(10000);
//start animation    

});
    var dis = document.querySelector("#dis"); 
 // dis.classList.add("disabled");
 // add disable class for en lang for this time

    var card = document.querySelector(".card"),
        row = document.querySelector(".row"),
        button  =   card.querySelector("button"),
        buttonB  =   row.querySelector("button"),
        article  =   card.querySelector("article");

function createButton(){
    var button1 = document.createElement("button");
         i = document.createElement("i");

    button1.classList.add("backToTop", "hidden");
    
    document.body.appendChild(button1);
    button1.appendChild(i);
    i.style.fontSize = "40px";
    i.classList.add("fa", "fa-chevron-circle-up");
    // button1.addEventListener("mouseover",  function () {
    //     button1.textContent = "Do góry" ;
    // });
    // button1.addEventListener("mouseout",  function () {
    //     button1.textContent = " " ;
    //     button1.appendChild(i);
    // });
    return button1;
}
var button1 = createButton();

function animateScroll() {
    if (document.body.scrollTop > 0) {
        window.scrollBy(0, -5);
        setTimeout(animateScroll, 10);
    } 
}

button1.addEventListener("click", function (e) {
    // e.stopPropagation();
    animateScroll();
}, false);
window.addEventListener("scroll", function (e) {
    if(document.body.scrollTop >= 100){
        button1.classList.remove("hidden");
    }
    else {
        button1.classList.add("hidden");
    }
}, false);


$( window ).scroll(function scrollAnimations() {
    var scrollA = document.body.scrollTop;
     // console.log(scrollA);
     var naviStyle = document.querySelector("nav").style;
    if (scrollA != 0){
        naviStyle.backgroundColor = "rgba(0, 0, 0, 0.6)";
        naviStyle.boxShadow = "-3px 3px 3px 0 rgba(0, 0, 0, 0.9)";
        naviStyle.transform = "scale(1,0.8)";
        naviStyle.top = "-10px";

    }
    else{

        naviStyle.backgroundColor = "rgba(0, 0, 0, 0.0)";
        naviStyle.boxShadow = null;
        naviStyle.transform = null;
        naviStyle.top = null;
    }
  if ( 600 <= scrollA && scrollA <= 1000) {
        
        $(".card").fadeIn(3600);
    }
      if ( 855 <= scrollA && scrollA ) {

   console.log(scrollA);
        $(".know").fadeIn(3600);
        $(".prog").fadeIn(7200);
        $(".want").fadeIn(8400);
        return 0;
    }
    button.addEventListener("click", function(){
        article.classList.add("hidden");
        row.classList.remove("hidden");
        $(".diva").fadeIn(3600),
        document.querySelector(".diva1").style.backgroundColor = "rgba(0, 0, 0, 0.6)",
        $(".diva1").fadeIn(3600);
            buttonB.addEventListener("click", function(){
                row.classList.add("hidden");
                article.classList.remove("hidden");
                $(".article").fadeIn(3600);
                function animateScrolli() {
                    if (document.body.scrollTop > 900) {
                        window.scrollBy(0, -5);
                        setTimeout(animateScrolli, 20);
                    } 
                }
                animateScrolli();

            });
    });
    return 0;
});





$(function myContactForm() {
    var check_1 = (Math.floor(Math.random() * 9) + 1).toString(),
        check_2 = (Math.floor(Math.random() * 9) + 1).toString(),
        check = check_1 + check_2;

    $('#contactform span.form_check_1').text(check_1);
    $('#contactform span.form_check_2').text(check_2);
    $('#contactform input[name="contact_check_data"]').val(check);

    var sending = false;
    $('#contactform').on('submit', function(e) {
        var $form = $(this), $submit = $('input[type="submit"]', $form);

        e.preventDefault();

        if (sending) {
            return false;
        }

        $('.form-error', $form).remove();

        $('input, textarea', $form).prop('readonly', true);
        $submit.val('Wysyłam…');
        sending = true;

        $.post($form.attr('action'), $form.serialize(), function(data) {
            if (data === 'ok') {
                $form.slideUp('fast', function() {
                    $form.after('<div class="form-success">Wiadomość została wysłana! Skontaktuję się z Tobą jak tylko będzie to możliwe.</div>');
                });

                return true;
            }

            $form.prepend('<div class="form-error">Wystąpił błąd podczas wysyłania formularza. Upewnij się, że wypełniłeś wszystkie pola i poprawnie rozwiązałeś działanie.</div>');
            $('input, textarea', $form).prop('readonly', false);
            $submit.val('Wyślij wiadomość');
            sending = false;

            return false;
        }, 'text');
    });
});