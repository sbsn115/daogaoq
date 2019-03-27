$(function () {

    /*============登录用=============*/
    $("#loginAndReg").css({
        display: localStorage.getItem("myZT1")
    });
    $(".dengLu-success").css({
        display: localStorage.getItem("myZT2")
    });
    $(".redDian").css({
        display: localStorage.getItem("myZT2")
    });
    $(".user").children().eq(4).click(function () {
        localStorage.clear();
        history.go(0);
        $.ajax({
            url: "/deleteLogin.do",
        })
    });

});