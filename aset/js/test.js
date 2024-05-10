

function outletCode(act) {
    if (act === "open") {
        console.log("button tukar kupon ditekan");
        $("#couponpage").show().animate({ left: '-100%' }, 300, function() {
            $(this).hide();
        });
        $("#numberpad").css('left', '100%').show().animate({ left: '0' }, 300);
    } else if (act === "back") {
        $("#numberpad").animate({ left: '100%' }, 300, function() {
            $(this).hide();
        });
        $("#couponpage").css('left', '-100%').show().animate({ left: '0' }, 300);
    }
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


