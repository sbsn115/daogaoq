// ==============================第一部分===========================
$(".img1").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy6.jpg");
});
$(".img2").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy10.jpg");
});
$(".img3").mouseenter(function () {
    $(".sec1-left img").attr("src","../images/lmy8.jpg");
});

// ================================第二部分===========================
$(".bt1").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy95.jpg");
    $(".size span").text("13x13cm");
    $(".people span").text("适合3-4人分享");
    $(".tool span").text("含5套餐具");
    $(".time span").text("最早今天 20:30配送");
    $(".price span:nth-of-type(1)").text("¥198.00");
    $(".price span:nth-of-type(2)").text("/1.0磅");
    $(".size i").css("display","inline-block");
    $(".people").css("display","block");
    $(".tool").css("display","block");
    $(".time").css("display","block");
    $(".price span:nth-of-type(1)").css("display","inline-block");
    $(".price span:nth-of-type(2)").css("display","inline-block");
});
$(".bt2").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy94.jpg");
    $(".size span").text("16x16cm");
    $(".people span").text("适合5-6人分享");
    $(".tool span").text("含5套餐具");
    $(".time span").text("最早今天 20:30配送");
    $(".price span:nth-of-type(1)").text("¥258.00");
    $(".price span:nth-of-type(2)").text("/1.5磅");
    $(".size i").css("display","block");
    $(".size i").css("display","inline-block");
    $(".people").css("display","block");
    $(".tool").css("display","block");
    $(".time").css("display","block");
    $(".price span:nth-of-type(1)").css("display","block");
    $(".price span:nth-of-type(2)").css("display","block");
    $(".price span:nth-of-type(1)").css("display","inline-block");
    $(".price span:nth-of-type(2)").css("display","inline-block");
});
$(".bt3").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy18.jpg");
    $(".size span").text("17x17cm");
    $(".people span").text("适合7-8人分享");
    $(".tool span").text("含10套餐具");
    $(".time span").text("最早今天 20:30配送");
    $(".price span:nth-of-type(1)").text("¥298.00");
    $(".price span:nth-of-type(2)").text("/2.0磅");
    $(".size i").css("display","block");
    $(".size i").css("display","inline-block");
    $(".people").css("display","block");
    $(".tool").css("display","block");
    $(".time").css("display","block");
    $(".price span:nth-of-type(1)").css("display","block");
    $(".price span:nth-of-type(2)").css("display","block");
    $(".price span:nth-of-type(1)").css("display","inline-block");
    $(".price span:nth-of-type(2)").css("display","inline-block");
});
$(".bt4").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy93.jpg");
    $(".size span").text("23x23cm");
    $(".people span").text("适合11-12人分享");
    $(".tool span").text("含15套餐具");
    $(".time span").text("最早今天 20:30配送");
    $(".price span:nth-of-type(1)").text("¥458.00");
    $(".price span:nth-of-type(2)").text("/3.0磅");
    $(".size i").css("display","block");
    $(".size i").css("display","inline-block");
    $(".people").css("display","block");
    $(".tool").css("display","block");
    $(".time").css("display","block");
    $(".price span:nth-of-type(1)").css("display","block");
    $(".price span:nth-of-type(2)").css("display","block");
    $(".price span:nth-of-type(1)").css("display","inline-block");
    $(".price span:nth-of-type(2)").css("display","inline-block");
});
$(".bt5").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy92.jpg");
    $(".size span").text("30x30cm");
    $(".people span").text("适合15-20人分享");
    $(".tool span").text("含20套餐具");
    $(".time span").text("最早明天 09:30配送");
    $(".price span:nth-of-type(1)").text("¥758.00");
    $(".price span:nth-of-type(2)").text("/5.0磅");
    $(".size i").css("display","block");
    $(".size i").css("display","inline-block");
    $(".people").css("display","block");
    $(".tool").css("display","block");
    $(".time").css("display","block");
    $(".price span:nth-of-type(1)").css("display","block");
    $(".price span:nth-of-type(2)").css("display","block");
    $(".price span:nth-of-type(1)").css("display","inline-block");
    $(".price span:nth-of-type(2)").css("display","inline-block");
});
$(".bt6").click(function () {
    $(".sec2-tl img").attr("src","../images/lmy91.jpg");
    $(".size span").text("需订购“更多磅数”，请与客服人员联系。\n" +
        "订购电话：400 650 2121").css({
        width:"170px"
    }).addClass("more");
    $(".size i").css("display","none");
    $(".people").css("display","none");
    $(".tool").css("display","none");
    $(".time").css("display","none");
    $(".price span:nth-of-type(1)").css("display","none");
    $(".price span:nth-of-type(2)").css("display","none");
});
$(".mid button").click(function () {
    $(this).css({
        outline:"1px solid #684029"
    }).siblings().css("outline","none");
    $(this).children().css("display","block");
    $(this).siblings().children().css("display","none");
});

$((function () {
    $(".mid button:nth-of-type(3)").css({
        outline:"1px solid #684029",
    }).children().css("display","block");
    $(".sec1-right li:nth-of-type(1) img").css({
        outline:"1px solid #c69c6d"
    });
    var btArry=[];
    var c=$(".left-content2 button").length;
    console.log(c);
    for(var i=0;i<c;i++){
        var b="";
        var m=i+1;
        b=$(".left-content2 button:nth-of-type("+m+")").text();
        console.log(b);
        btArry.push(b)
    }
    console.log(btArry);
    for(var k=0;k<btArry.length;k++){
        var m=k+1;
        if(btArry[k]==""){
            console.log(btArry[k]);
            $(".left-content2 button:nth-of-type("+m+")").css("display","none");
        }
    }
    $(document).scroll(function() {   //页面加载时，获取滚动条初始高度
        var distance = $(document).scrollTop();  //获取滚动条初始高度的值 ：0
        // console.log(distance); //打印滚动条不同高度的位置的值
        if(distance>889){
            // $(".clearfix").text("");
            // $(".clearfix").innerHTML();
        }
    });

    }));
$(".sec1-right li img").mouseenter(function () {
    $(this).css({
        outline:"1px solid #c69c6d"
    });
    $(this).parent().siblings().children().css({
        outline:"none"
    })

});

var a=1;
$(".mid1 img").click(function () {
    $(".mid1 i").toggle();
    if(a==0){
        $(".exchangeImg").css("outline","none");
        a=1;
    }else if(a==1){
        $(".exchangeImg").css("outline"," 1px solid #684029");
        a=0;
    };
    $(".exchangeText").toggle();
});
$(".floatL1").mouseenter(function () {
    // console.log( $(this).children(0).children(1));
    // $(this).children(0).children(1).css("display","block");
        $(this).children(0).children(1).fadeIn(500);
}).mouseleave(function () {
    $(this).children(0).find(".hidden").css("display","none");
});
$(".hidden i").click(function () {
    $(".backGround").fadeIn(0);
    setTimeout(function () {
        $(".backGround").fadeOut(0);
    },2000)
});

$(".bottom button:nth-of-type(2)").click(function () {
    $(".shopMall").fadeIn(0);
    $(".shopMall i").fadeIn(0);
    setTimeout(function () {
        $(".shopMall").fadeOut(1000);
        $(".shopMall i").fadeOut(1000);
    },4000)
});

$(".floatL1 img").click(function () {
    window.location.href=("goods-description.html");
});

$(".left-content2 button").click(function(){
    console.log("89078");
    window.location.href=("child.html");
});
$(".bottom button:nth-of-type(1)").click(function () {
    window.location.href = ("shopCar.html");
});
$(".shopMall button").click(function () {
    window.location.href=("shopCar.html");
})