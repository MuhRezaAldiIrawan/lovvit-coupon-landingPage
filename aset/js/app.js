function outletCode(act) {
    $("#nmbr-container").val("");
    $("#nmbr-container").attr("placeholder", "");
    if (act === "open") {
        $(".modal-btn-redeem-kupon").css('display', ''); // remove style display none
        $(".modal-btn-view-kupon").css('display', 'none');
        dataLayer.push({
            event: "dLTukarKupon",
            button: "button-tukar-coupon",
            location: "main-landing-page",
            desc: "klik-button-tukar-coupon",
        });
    } else {
        $(".modal-btn-redeem-kupon").css('display', 'none');
    }
}

function validationCode(act) {
    $("#nmbr-container").val("");
    $("#nmbr-container").attr("placeholder", "");
    if (act === "open") {
        $(".modal-apa-lanjut").removeClass("close").addClass("open");
    } else {
        $(".modal-apa-lanjut").removeClass("open");
    }
}

function infoPenukaran(act) {
    if (act === "open") {
        $(".modal-loc-penukaran").toggleClass("open");
    } else {
        $(".modal-loc-penukaran").toggleClass("close");
    }
    // $('.page-wrapper').toggleClass('blur-it');
}

function tnC(act) {
    if (act === "open") {
        $(".modal-term-condition").removeClass("close").addClass("open");
    } else {
        $(".modal-term-condition").toggleClass("close");
    }
    // $('.page-wrapper').toggleClass('blur-it');
}

$(document).ready(function () {
    $("#satu").on("click", function () {
        const kode = $("#nmbr-container").val();
        $("#nmbr-container").val(kode + "1");
    });
    $("#dua").on("click", function () {
        const kode = $("#nmbr-container").val();
        $("#nmbr-container").val(kode + "2");
    });
    $("#tiga").on("click", function () {
        const kode = $("#nmbr-container").val();
        $("#nmbr-container").val(kode + "3");
    });
    $("#empat").on("click", function () {
        const kode = $("#nmbr-container").val();
        $("#nmbr-container").val(kode + "4");
    });
    $("#lima").on("click", function () {
        const kode = $("#nmbr-container").val();
        $("#nmbr-container").val(kode + "5");
    });
    $("#enam").on("click", function () {
        const kode = $("#nmbr-container").val();
        $("#nmbr-container").val(kode + "6");
    });
    $("#tujuh").on("click", function () {
        const kode = $("#nmbr-container").val();
        $("#nmbr-container").val(kode + "7");
    });
    $("#delapan").on("click", function () {
        const kode = $("#nmbr-container").val();
        $("#nmbr-container").val(kode + "8");
    });
    $("#sembilan").on("click", function () {
        const kode = $("#nmbr-container").val();
        $("#nmbr-container").val(kode + "9");
    });
    $("#nol").on("click", function () {
        const kode = $("#nmbr-container").val();
        $("#nmbr-container").val(kode + "0");
    });
    $("#delete").on("click", function () {
        const kode = $("#nmbr-container").val();
        const del = kode.slice(0, -1);
        $("#nmbr-container").val(del);
    });
    $(".send").on("click", function () {
        // let codeO = <?php echo json_encode($codeOutlet) ?>;
        if ($("#nmbr-container").val() == "") {
            $("#nmbr-container").attr("placeholder", "* Silahkan isi kode");
            $("#nmbr-container").addClass("input-kode");
        }
        if (codeO.includes($("#nmbr-container").val())) {
            let code_outlet = $("#nmbr-container").val();
            $(".modal-apa-lanjut").removeClass("close").addClass("open");
            $(".modal-btn-redeem-kupon").removeClass("open").addClass("close");
            $(".page-wrapper").toggleClass("blur-it");
            dataLayer.push({
                event: "dLValidasiOutlet",
                location: "modal-validasi-code-outlet",
                button: "button-validasi-code-outlet",
                codeOutlet: code_outlet,
                valid: "valid",
                desc: "proses-validasi-code-outlet",
            });
        } else {
            $("#nmbr-container").val("");
            $("#nmbr-container").attr("placeholder", "* Kode tidak valid");
            $("#nmbr-container").addClass("input-kode");
            dataLayer.push({
                event: "dLValidasiOutlet",
                location: "modal-validasi-code-outlet",
                button: "button-validasi-code-outlet",
                valid: "invalid",
                desc: "proses-validasi-code-outlet",
            });
        }
        return false;
    });
});
$("#btn-lanjut").click(function (e) {
    e.preventDefault();
    let outlet = $("#nmbr-container").val();
    location.href = "tel:*200*1*:outlet%23".replace(":outlet", outlet);
    dataLayer.push({
        event: "dLLanjutTukar",
        location: "modal-lanjut-tukar-kupon",
        button: "button-lanjutkan-tukar-coupon",
        desc: "melajutkan-proses-ke-aplikasi-telpon",
    });
    $(".modal-apa-lanjut").toggleClass("close");
});

