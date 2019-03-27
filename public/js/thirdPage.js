var arr = [];
// var isCheckAll = false;
$(function () {
  $(".check-box-Dad").find('input[type=checkbox]').bind('click', function () {
    if (this.checked) {
      $(this).parent().siblings().children().attr("checked", false);
    }//checkbox点击切换


    var a = $(this).parent().parent().prev().find("big").text()//单位价格

    var b = $(this).val() //蛋糕的重量
    // console.log(b)
    b = Number(b)
    a = Number(a)
    var c=0;
      c= a * b //蛋糕的总价格
    var d=0;
    console.log(c)
    // console.log(c);

    arr.push(c);
    // console.log(arr)

    var sum = 0;
    if (this.checked == true) {
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
    }
    else{
      sum=sum-c;
    }
    console.log(sum)







    /*=========================判断换购条件是否满足=============================*/
    // if (sum > 200) {
    //   $("#tiaojian").show()
    // } else {
    //   $("#tiaojian").hide()
    // }
    /*=========================/判断换购条件是否满足=============================*/

  })
})
// var a = $(".check-box-Dad").find('input[type=checkbox]').parent().parent().prev().find("big").text().split("198.00","298.00","198.00","198.00","298.00","198.00","198.00","198.00","458.00","238.00","45.00","10.00","36.00","36.00","10.00","36.00");
var arr2 = $(".check-box-Dad").find('input[type=checkbox]').parent().parent().prev().find("big").text().split('.00')

console.log(arr2)
// console.log(a)




