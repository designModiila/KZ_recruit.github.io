
$(document).ready(function(){
  //console.log('시작');
  $('#fullpage').fullpage({
    verticalCentered: true,
    autoScrolling: false,
    //paddingTop: 100,

    onLeave : function (index, nextIndex, direction){
      //console.log('아래');
        if (index == 1 && direction == 'down'){
          //console.log('aaa-1');
            $(".header").addClass("reverse");
            $(".btnTop").show();
        }else if (index == 2 && direction == 'up'){
            //console.log('aaa-2');
            $(".header").removeClass("reverse");
            $(".btnTop").hide();

        }
    },
    afterLoad: function (anchorLink, index) {
      //console.log('aaa-3');
      if (index == 1){
        $("#header").removeClass("reverse");
        $.fn.fullpage.setAllowScrolling(true);
        $(".btnTop").hide();

      }
    }

  });
    // fullpage


$(".sortOption button").click(function() {
    $(this).siblings().removeClass('active');  
    $(this).addClass('active');

  // if ($(this).siblings().removeClass("active")) {
  //   $(".announceList.cardTypeR").removeClass("cardTypeR");
  //   $(".announceList").addClass("listTypeR");

  
  // }
  // else {
  //   $(".announceList.listTypeR").removeClass("listTypeR");
  //   $(".announceList").addClass("cardTypeR");

    

});



$( ".listTypeR li" ).each(function() {
  var total = position + positionW + positionW2 + 25;
  var position = $(".listTypeR .articleWrap .badge").position().left;
  var positionW = $(".listTypeR .articleWrap .badge").outerWidth();
  var positionW2 = $(".listTypeR .articleWrap .companyName").outerWidth();

  $(".tagBox").css("left", total);
  // var percent = 20 * (i+1) +'%'; 
  // $( this ).css( "left", "+=" + percent ); 
});



// $(".listTypeR li").each(function(index) { 
//   var position = $(".listTypeR .articleWrap .badge").position().left;
//   var positionW = $(".listTypeR .articleWrap .badge").outerWidth();
//   var positionW2 = $(".listTypeR .articleWrap .companyName").outerWidth();

//   $(".tagBox").css("left", position + positionW + positionW2 + 25);
// });
  // $(".btnTop .btn").on('click',function(){
  //     $.fn.fullpage.moveTo(1);
  //     $(".btnTop").hide();

      // var timer = setInterval(function() {
      //     $(".header").removeClass("reverse");
      //     clearInterval(timer);
      //   }, 1000);
  // });



});
