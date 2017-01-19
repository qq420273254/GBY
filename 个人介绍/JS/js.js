/**
 * Created by 420273254 on 2017/1/9.
 */

/*自我介绍*/
$(function(){
    setTimeout(function(){
        $(".fir").show(900).animate({"line-height":"90px"},500)},700);
    setTimeout(function(){
        $(".sec").show(1000).animate({"line-height":"90px"},500)},900);
    setTimeout(function(){
        $(".thi").show(1000).animate({"line-height":"90px"},500)},1100);
    setTimeout(function(){
        $(".fou").show(1000).animate({"line-height":"90px"},500)},1300);
});

/*过渡条*/


$(function(){

    setTimeout(function(){
        $(".JianBian").show(1000)
            .animate({"line-height":"70px"},500)
    },500);
});


/*照片过度条*/
$(function(){
    $(".JianBian2").hide();
    setTimeout(function(){
        $(".JianBian2").show(1000)
            .animate({"line-height":"90px"},900)
    },1500);

});


/*导航栏*/
$(function(){
    $(".DaoHang ul li:last").hover(function(){
            $(".XingQuAiHao").toggleClass("hid").mouseover(function(){
                $(".DaoHang ul li:last").css("background-color","#61a9d0");
            }).mouseout(function(){
                $(".DaoHang ul li:last").css("background-color","#87c3d9");
            });
        }
    );
    $(".XingQuAiHao").hover(function(){
        $(this).toggleClass("hid");
    });
});



/*照片*/
var n=0;
var t=null;
var count;
$(function(){
    count=$(".Zhaopian a").length;
    $(".Zhaopian a:not(:first-child)").hide();

    $(".XuanXiang span").click(function(){
        var index=$(this).attr("id")-1;
        n=index;
        $(".Zhaopian a").filter(":visible").fadeOut(1200).parent().children().eq(index).fadeIn(1000);
        $(this).addClass("Active");
        $(this).siblings().removeClass("Active");
    });
    setTimeout(function(){ t=setInterval("autoMove()",3000);},1000);
    $(".XuanXiang span").hover(function(){clearInterval(t)},function(){t=setInterval("autoMove()",2500);});
    $(".Zhaopian").hover(function(){clearInterval(t)},function(){t=setInterval("autoMove()",2500);});


});
function autoMove(){
    if(n>=(count-1)){
        n=0;
    }else{
        ++n;
    }
    $(".XuanXiang div span").eq(n).trigger("click");
}

/*底部介绍*/
$(function() {
    var $arr = $(".LianXiFangShi p");

    var $len = $arr.length;
    $(".DiBu").hover(function(){
        for (var i = 0; i < $len; i++) {
            $arr.eq(i).show(1500);
        }
    });
});

