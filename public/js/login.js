
// 点击短信验证码登录
$(".colorF").on("click",function () {
    $("#passForm").css("display","none");
    $("#msgForm").css("display","block")

});

// 点击账号密码登录
$(".floatLl").on("click",function () {
    $("#msgForm").css("display","none");
    $("#passForm").css("display","block")

});


// 点击去注册跳转页面
$(".register").on("click",function () {
  window.location.href="register.html"
});

// 点击忘记密码跳转页面：
$(".forget").on("click",function () {
    window.location.href="passpore.html"
});

// 电话号码框的正则表达式
$("#telphone").on("blur",function () {
    var telphone=document.getElementById("telphone").value;
    var reg=/^[0-9]{11}$/;
    if(reg.test(telphone)==false){
        document.getElementById("append").innerHTML="请输入正确的电话号码";
    }
});


$("#msg").on("focus",function () {
    var telphone=document.getElementById("telphone").value;
    if (telphone==""){
        document.getElementById("append").innerHTML="请输入正确的电话号码";
    }

})



