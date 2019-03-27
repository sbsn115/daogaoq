/*隐藏为空的标签*/
let mya=$(".dangao-li .biaoqian a");
// console.log(mya.innerText);
for (i=0;i<mya.length;i++) {
    if (mya[i].innerText==""){
        $(mya[i]).css({
            display:"none"
        })
    }
}

/*==================================企业定制============================*/
/*=========蛋糕规格=========*/
// console.log($(".active"));
$(".active").bind("click",function () {
    $(this).children().css({
        border:"1px solid #684029",
    });
    $(this).children().children().css({
        display:"block"
    });
    $(this).siblings().children().css({
        border:"1px solid #e7e0dd"
    });
    $(this).siblings().children().children().css({
        display:"none"
    });
});
/*===================点击变幻字体======================*/
$("#bang10").bind("click",function () {
    // console.log($(".qiyedz-4-1")[0]);
    $(".qiyedz-4-1")[0].innerHTML="";
    $(".qiyedz-4-1")[0].innerHTML="¥<span>1500.00</span>/10.0磅";
    $(".qiyedz-4-2-3")[0].innerHTML="";
    $(".qiyedz-4-2-3")[0].innerHTML=" <li class=\"qiyedz-4-2-3one\">\n" +
        "                                    <i></i>35x35cm\n" +
        "                                </li>\n" +
        "                                <li class=\"qiyedz-4-2-3two\">\n" +
        "                                    <i></i>适合30-40人享用\n" +
        "                                </li>\n" +
        "                                <li class=\"qiyedz-4-2-3three\">\n" +
        "                                    <i></i>含40套餐具\n" +
        "                                </li>\n" +
        "                                <li class=\"qiyedz-4-2-3four\">\n" +
        "                                    <i></i>最早2018-11-08 16:00配送\n" +
        "                                </li>";
    $(".gouWuAnNiu-gouWuC").css({
        backgroundColor:"#684029",
        cursor:"pointer",
        color:"#fff"
    });
    $(".gouWuAnNiu-gouMai").css({
        backgroundColor:"#F4F4F4",
        cursor:"pointer",
        color:"#7A5844"
    })
});
$("#bang20").bind("click",function () {
    // console.log($(".qiyedz-4-1")[0]);
    $(".qiyedz-4-1")[0].innerHTML="";
    $(".qiyedz-4-1")[0].innerHTML="¥<span>3000.00</span>/20.0磅";
    $(".qiyedz-4-2-3")[0].innerHTML="";
    $(".qiyedz-4-2-3")[0].innerHTML=" <li class=\"qiyedz-4-2-3one\">\n" +
        "                                    <i></i>55x55cm\n" +
        "                                </li>\n" +
        "                                <li class=\"qiyedz-4-2-3two\">\n" +
        "                                    <i></i>适合70-80人享用\n" +
        "                                </li>\n" +
        "                                <li class=\"qiyedz-4-2-3three\">\n" +
        "                                    <i></i>含80套餐具\n" +
        "                                </li>\n" +
        "                                <li class=\"qiyedz-4-2-3four\">\n" +
        "                                    <i></i>最早2018-11-08 16:00配送\n" +
        "                                </li>";
    $(".gouWuAnNiu-gouWuC").css({
        backgroundColor:"#684029",
        cursor:"pointer",
        color:"#fff"
    });
    $(".gouWuAnNiu-gouMai").css({
        backgroundColor:"#F4F4F4",
        cursor:"pointer",
        color:"#7A5844"
    })
});
$("#bang30").bind("click",function () {
    // console.log($(".qiyedz-4-1")[0]);
    $(".qiyedz-4-1")[0].innerHTML="";
    $(".qiyedz-4-1")[0].innerHTML="¥<span>4500.00</span>/30.0磅";
    $(".qiyedz-4-2-3")[0].innerHTML="";
    $(".qiyedz-4-2-3")[0].innerHTML=" <li class=\"qiyedz-4-2-3one\">\n" +
        "                                    <i></i>70x70cm\n" +
        "                                </li>\n" +
        "                                <li class=\"qiyedz-4-2-3two\">\n" +
        "                                    <i></i>适合100-120人享用\n" +
        "                                </li>\n" +
        "                                <li class=\"qiyedz-4-2-3three\">\n" +
        "                                    <i></i>含120套餐具\n" +
        "                                </li>\n" +
        "                                <li class=\"qiyedz-4-2-3four\">\n" +
        "                                    <i></i>最早2018-11-08 16:00配送\n" +
        "                                </li>";
    $(".gouWuAnNiu-gouWuC").css({
        backgroundColor:"#684029",
        cursor:"pointer",
        color:"#fff"
    });
    $(".gouWuAnNiu-gouMai").css({
        backgroundColor:"#F4F4F4",
        cursor:"pointer",
        color:"#7A5844"
    })
});
$("#gengduo").bind("click",function () {
    // console.log($(".qiyedz-4-1")[0]);
    $(".qiyedz-4-1")[0].innerHTML="";
    // $(".qiyedz-4-1")[0].innerHTML="¥<span>4500.00</span>/30.0磅";
    $(".qiyedz-4-2-3")[0].innerHTML="";
    $(".qiyedz-4-2-3")[0].innerHTML="需订购“更多磅数”，请与客服人员联系。<br><span>订购电话：400 650 2121</span>";
    $(".gouWuAnNiu-gouWuC").css({
        backgroundColor:"#b6b6b6",
        cursor:"not-allowed",
        color:"#fff"
    });
    $(".gouWuAnNiu-gouMai").css({
        backgroundColor:"#F4F4F4",
        cursor:"not-allowed",
        color:"#b6b6b6"
    })
});
/*===============================加入购物车===========================*/
$(".gouWuAnNiu-gouWuC").bind("click",function () {
    $(".tianjia").css({
        display:"block"
    });
    function xiaoshi() {
        $(".tianjia").css({
            display:"none"
        });
    }
    setTimeout(xiaoshi,3000)
});
/*======================+-号隐藏显示===========================*/
var jian=$(".sec5 h2 span");
jian.bind(
    "click",function () {
        if (jian[0].innerHTML=="-") {
            // $(".recommend-list").css({
            //     display: "none"
            // });
            $(".recommend-list").slideUp(600);
            // $(".recommend-list").hide(600);
            // jian.remove()
            jian[0].innerHTML = "";
            jian[0].innerHTML = "+";
        }else {
        //     $(".recommend-list").css({
        //     display: "block"
        // });
            $(".recommend-list").slideDown(600);
            // $(".recommend-list").show(600);
        jian[0].innerHTML = "";
        jian[0].innerHTML = "-";
        }
});
/*===========================================滚动条事件===============================*/
$(window).scroll(function () {
    console.log($(window).scrollTop())
});
