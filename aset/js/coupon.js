
$( document ).ready(function() {
    $('.trigger-loc-penukaran').on('click', function() {
        $('.modal-loc-penukaran').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        return false;
    });
});

$( document ).ready(function() {
    $('.trigger-term-condition').on('click', function() {
        $('.modal-term-condition').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        return false;
    });
});

$( document ).ready(function() {
    $('.trigger-btn-redeemed-kupon').on('click', function() {
        $('.modal-btn-redeem-kupon').toggleClass('open');
        dataLayer.push({'event': 'dLTukarKupon', 'button':'button-tukar-coupon', 'location':'main-landing-page', 'desc':'dataLayer-tukar-coupon'})
        $('.page-wrapper').toggleClass('blur-it');
        return false;
    });
});

$(document).ready(function(){
    $('#satu').on('click', function() {
        const kode = $('#nmbr-container').val()
        $('#nmbr-container').val(kode + '1')
    });
    $('#dua').on('click', function() {
        const kode = $('#nmbr-container').val()
        $('#nmbr-container').val(kode + '2')
    });
    $('#tiga').on('click', function() {
        const kode = $('#nmbr-container').val()
        $('#nmbr-container').val(kode + '3')
    });
    $('#empat').on('click', function() {
        const kode = $('#nmbr-container').val()
        $('#nmbr-container').val(kode + '4')
    });
    $('#lima').on('click', function() {
        const kode = $('#nmbr-container').val()
        $('#nmbr-container').val(kode + '5')
    });
    $('#enam').on('click', function() {
        const kode = $('#nmbr-container').val()
        $('#nmbr-container').val(kode + '6')
    });
    $('#tujuh').on('click', function() {
        const kode = $('#nmbr-container').val()
        $('#nmbr-container').val(kode + '7')
    });
    $('#delapan').on('click', function() {
        const kode = $('#nmbr-container').val()
        $('#nmbr-container').val(kode + '8')
    });
    $('#sembilan').on('click', function() {
        const kode = $('#nmbr-container').val()
        $('#nmbr-container').val(kode + '9')
    });
    $('#nol').on('click', function() {
        const kode = $('#nmbr-container').val()
        $('#nmbr-container').val(kode + '0')
    });
    $('#delete').on('click', function() {
        const kode = $('#nmbr-container').val()
        const del = kode.slice(0, -1);
        $('#nmbr-container').val(del)
    });
    $('.send').on('click', function() {
        if($('#nmbr-container').val() == ''){
            $('#nmbr-container').attr('placeholder', '* Silahkan isi kode')
            $('#nmbr-container').addClass('input-kode')
        }else if($('#nmbr-container').val() != '1234'){
            $('#nmbr-container').val('')
            $('#nmbr-container').attr('placeholder', '* Kode tidak valid')
            $('#nmbr-container').addClass('input-kode')
        }
        else{
            // const kodeO = $('#nmbr-container').val()
            // Lakukan pengecekan apakah kode outlet sudah benar
            let code_outlet =  $('#nmbr-container').val()
            $('.modal-btn-redeem-kupon').hide();
            $('.modal-apa-lanjut').toggleClass('open');
            $('.page-wrapper').toggleClass('blur-it');
            dataLayer.push({'event': 'dLValidasiOutlet', 'location':'modal-validasi-code-outlet', 'button':'button-validasi-code-outlet', 'codeOutlet':code_outlet, 'desc':'proses-validasi-code-outlet'})
        }
        
        return false;
    });
})
$('#btn-lanjut').click(function (e) {
    e.preventDefault()
    let outlet = $('#nmbr-container').val()
    location.href = 'tel:*200*:outlet%23'.replace(':outlet', outlet)
    dataLayer.push({'event': 'dLLanjutTukar', 'location':'modal-lanjut-tukar-kupon', 'button':'button-lanjutkan-tukar-coupon', 'desc':'melajutkan-proses-ke-aplikasi-telpon'})
})

let acc = $('.accordion')
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
}