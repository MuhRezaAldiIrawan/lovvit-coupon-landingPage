function outletCode(act) {
    if (act === "open") {
        console.log("button tukar kupon ditekan");
        $(".numberpad").css('display', ''); 
        $(".couponpage").css('display', 'none');

        // document.getElementById('couponpage').classList.add('out');
        // document.getElementById('numberpad').classList.add('active');
        // document.getElementById('numberpad').classList.remove('out');

        setTimeout(function() {
            $("#numberpad").css('transform', 'translateX(0)');  // Mulai animasi
        }, 100);

    } else if (act === "back"){
        $(".numberpad").css('display', 'none');
        $(".couponpage").css('display', ''); 

        // document.getElementById('couponpage').classList.remove('out');
        // document.getElementById('numberpad').classList.remove('active');
        // document.getElementById('couponpage').classList.add('active');

        setTimeout(function() {
            $("#numberpad").css('transform', 'translateX(100%)');  // Mulai animasi
        }, 100);

    }
    
}
// script.js
// script.js
// script.js
// script.js
// script.js
// script.js

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('couponpage').classList.add('active');
// });

// document.getElementById('gotoNumberpad').addEventListener('click', function() {
//     document.getElementById('couponpage').classList.add('out');
//     document.getElementById('numberpad').classList.add('active');
//     document.getElementById('numberpad').classList.remove('out');
// });

// document.getElementById('gotoCouponpage').addEventListener('click', function() {
//     document.getElementById('couponpage').classList.remove('out');
//     document.getElementById('numberpad').classList.remove('active');
//     document.getElementById('couponpage').classList.add('active');
// });

// document.addEventListener('DOMContentLoaded', function() {
//     // Initially activate the coupon page
//     var couponPage = document.getElementById('couponpage');
//     var numberPad = document.getElementById('numberpad');

//     couponPage.classList.add('active');
//     numberPad.style.display = 'none'; // Initially hide numberpad

//     // Handle transition to number pad
//     document.getElementById('gotoNumberpad').addEventListener('click', function() {
//         couponPage.classList.add('out');
//         couponPage.addEventListener('transitionend', function() {
//             couponPage.classList.remove('active');
//             numberPad.style.display = 'block'; // Make numberpad visible before sliding in
//             numberPad.classList.add('active');
//         }, { once: true });
//     });

//     // Handle transition back to coupon page
//     document.getElementById('gotoCouponpage').addEventListener('click', function() {
//         numberPad.classList.remove('active');
//         numberPad.addEventListener('transitionend', function() {
//             numberPad.style.display = 'none'; // Hide numberpad after it slides out
//             couponPage.classList.remove('out');
//             couponPage.classList.add('active');
//         }, { once: true });
//     });
// });


// script.js












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


