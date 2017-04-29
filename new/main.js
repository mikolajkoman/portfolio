    $(document).ready(function(){
        $(document.body).fadeIn(5500);
        $(".slogan").fadeIn(10000);
        return 0;
});

$( window ).scroll(function() {
     console.log(document.body.scrollTop);
  if ( 600 <= document.body.scrollTop && document.body.scrollTop <= 900) {

 console.log(document.body.scrollTop);
    $(document).ready(function(){
        $(".diva").animate({left: '-200px'}, (1000)),
        $(".diva1").fadeIn(3600);
        return 0;
    });
 console.log("Great!");
    }
 //  else if ( document.body.scrollTop >= 901) {

 // console.log(document.body.scrollTop);
 //        $(".diva").fadeOut(100),
 //        $(".diva1").fadeOut(1000),
 //        $(".diva").fadeOut(100),
 // console.log("Hi");
 //    }

// document.documentElement.scrollTop


});

$(function() {
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