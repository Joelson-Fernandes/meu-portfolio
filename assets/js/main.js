import {menu} from './menu.js';
import {startScrollreveal} from "./scrollreveal.js";
import  './swiper.js';
import {skillDescription} from "./skillDescription.js"

menu();
startScrollreveal();

//Botão que volta a página ao inicio
$(document).on('scroll', () => {
    if($('html, body').scrollTop() >= 700){
       $('#btnUp').fadeIn('slow')
    } else {
        $('#btnUp').fadeOut('slow')
    }
})
// Faz animação para subir página
 $('#btnUp').click( e => {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
})

// animação texto s-home
function typeWriper(e) {
    const text = e.innerHTML.split('');
    e.innerHTML = '';
    text.forEach((element, i) => {
    setTimeout(() => { e.innerHTML += element; }, 70 * i)
    });
}
setTimeout(() => {
    typeWriper(document.querySelector('p.line3'));
}, 500)


//ENVIO DO E-MAIL

//validação do formulario com Plugin JQuery
$(document).ready(function(){
    $('#form').validate({
        rules: {
            email: {required: true},
            nome: {required: true},
            mensagem: {required: true}
        },

        messages: {
            email: {required: 'Informe seu e-mail', email: 'Informe um email válido'},
            nome: {required: 'Informe seu nome'},
            mensagem: {required: 'Informe sua mensagem'}
        },

        submitHandler: function(form) {
            var dados = $(form).serialize();

            //requisição ajax com script para envio do email
            $.ajax({
                type: 'POST',
                url: 'assets/php/envia_email.php',
                data: dados,
                success: () => location.replace('views/success.php?view=success'),
                error: () => location.replace('views/success.php?view=error')
            })

        }
    })
})
