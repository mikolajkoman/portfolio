    $(document).ready(function(){
        $(document.body).fadeIn(3000);
        // $(".slogan").fadeIn(10000);
//start animation    

});
    var dis = document.querySelector("#dis"); 
 // dis.classList.add("disabled");
 // add disable class for en lang for this time

$( window ).scroll(function scrollAnimations() {
    var scrollA = document.body.scrollTop;
     // console.log(scrollA);
     var naviStyle = document.querySelector("nav").style;
    if (scrollA != 0){
        naviStyle.backgroundColor = "rgba(0, 0, 0, 0.6)";
        naviStyle.boxShadow = "-3px 3px 3px 0 rgba(0, 0, 0, 0.9)";
        naviStyle.transform = "scale(1,0.8)";
        naviStyle.top = "-5px";

    }
    else{

        naviStyle.backgroundColor = "rgba(0, 0, 0, 0.0)";
        naviStyle.boxShadow = null;
        naviStyle.transform = null;
        naviStyle.top = null;
    }
  if ( 600 <= scrollA && scrollA <= 1000) {


        $(".diva").animate({left: '-200px'}, (1000)),
        $(".diva1").fadeIn(3600);
        return 0;
    }
      if ( 855 <= scrollA && scrollA ) {

   console.log(scrollA);
        $(".know").fadeIn(3600);
        $(".prog").fadeIn(7200);
        $(".want").fadeIn(8400);
        return 0;
    }

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