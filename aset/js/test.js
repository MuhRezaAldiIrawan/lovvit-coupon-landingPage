// function outletCode(act) {
//     if (act === "open") {
//         // $(".numberpad").css('display', ''); 
//         // $(".couponpage").css('display', 'none');

//         // setTimeout(function() {
//         //     $("#numberpad").css('transform', 'translateX(0)');  // Mulai animasi
//         // }, 100);

//     // } else if (act === "back"){
//     //     $(".numberpad").css('display', 'none');
//     //     $(".couponpage").css('display', ''); 

//         // setTimeout(function() {
//         //     $("#numberpad").css('transform', 'translateX(100%)');  // Mulai animasi
//         // }, 100);

//     }
    
// }
// script.js
// script.js
document.getElementById('gotoNumberpad').addEventListener('click', function() {
    const couponPage = document.getElementById('couponpage');
    const numberPad = document.getElementById('numberpad');
    couponPage.classList.add('out');
    numberPad.classList.add('active');
    setTimeout(() => {
        couponPage.classList.remove('active');
    }, 500); // Tunggu animasi selesai, lalu hapus 'active' dari couponPage
});

document.getElementById('gotoCouponpage').addEventListener('click', function() {
    const couponPage = document.getElementById('couponpage');
    const numberPad = document.getElementById('numberpad');
    numberPad.classList.remove('active');  // Langsung hapus 'active' dari numberPad
    numberPad.style.transform = 'translateX(100%)';  // Reset posisi numberPad
    couponPage.classList.remove('out');
    couponPage.classList.add('active');
    setTimeout(() => {
        numberPad.style.transform = '';  // Reset transform supaya kembali ke state semula
    }, 500); // Tunggu animasi selesai
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('couponpage').classList.add('active');
    document.getElementById('numberpad').classList.remove('active');
});





// $(document).ready(function () {
//     $("#satu").on("click", function () {
//         const kode = $("#nmbr-container").val();
//         $("#nmbr-container").val(kode + "1");
//     });
//     $("#dua").on("click", function () {
//         const kode = $("#nmbr-container").val();
//         $("#nmbr-container").val(kode + "2");
//     });
//     $("#tiga").on("click", function () {
//         const kode = $("#nmbr-container").val();
//         $("#nmbr-container").val(kode + "3");
//     });
//     $("#empat").on("click", function () {
//         const kode = $("#nmbr-container").val();
//         $("#nmbr-container").val(kode + "4");
//     });
//     $("#lima").on("click", function () {
//         const kode = $("#nmbr-container").val();
//         $("#nmbr-container").val(kode + "5");
//     });
//     $("#enam").on("click", function () {
//         const kode = $("#nmbr-container").val();
//         $("#nmbr-container").val(kode + "6");
//     });
//     $("#tujuh").on("click", function () {
//         const kode = $("#nmbr-container").val();
//         $("#nmbr-container").val(kode + "7");
//     });
//     $("#delapan").on("click", function () {
//         const kode = $("#nmbr-container").val();
//         $("#nmbr-container").val(kode + "8");
//     });
//     $("#sembilan").on("click", function () {
//         const kode = $("#nmbr-container").val();
//         $("#nmbr-container").val(kode + "9");
//     });
//     $("#nol").on("click", function () {
//         const kode = $("#nmbr-container").val();
//         $("#nmbr-container").val(kode + "0");
//     });
//     $("#delete").on("click", function () {
//         const kode = $("#nmbr-container").val();
//         const del = kode.slice(0, -1);
//         $("#nmbr-container").val(del);
//     });
//     $(".send").on("click", function () {
//         // let codeO = <?php echo json_encode($codeOutlet) ?>;
//         if ($("#nmbr-container").val() == "") {
//             $("#nmbr-container").attr("placeholder", "* Silahkan isi kode");
//             $("#nmbr-container").addClass("input-kode");
//         }
//         if (codeO.includes($("#nmbr-container").val())) {
//             let code_outlet = $("#nmbr-container").val();
//             $(".modal-apa-lanjut").removeClass("close").addClass("open");
//             $(".modal-btn-redeem-kupon").removeClass("open").addClass("close");
//             $(".page-wrapper").toggleClass("blur-it");
//             dataLayer.push({
//                 event: "dLValidasiOutlet",
//                 location: "modal-validasi-code-outlet",
//                 button: "button-validasi-code-outlet",
//                 codeOutlet: code_outlet,
//                 valid: "valid",
//                 desc: "proses-validasi-code-outlet",
//             });
//         } else {
//             $("#nmbr-container").val("");
//             $("#nmbr-container").attr("placeholder", "* Kode tidak valid");
//             $("#nmbr-container").addClass("input-kode");
//             dataLayer.push({
//                 event: "dLValidasiOutlet",
//                 location: "modal-validasi-code-outlet",
//                 button: "button-validasi-code-outlet",
//                 valid: "invalid",
//                 desc: "proses-validasi-code-outlet",
//             });
//         }
//         return false;
//     });
// });


