
$(document).ready(function(){
 

$(".accordionHeader").on("click", function() {
  if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".accordionContent").slideUp(200);
  } else {
      $(".accordionHeader").removeClass("active");
      $(this).addClass("active");
      $(".accordionContent").slideUp(200);
      $(this).siblings(".accordionContent").slideDown(200);
  }
});    

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


let selectCustomFlag;
$('.customSelectBox').on('click', function() {
  $(this).toggleClass('selected');
  if($(this).hasClass('selected')) {
    $('.customSelectList').show();
  } else {
    $('.customSelectList').hide();
  }
})

$('.customSelectBox').on('focusin', function() {
  $('.customSelectList').show();
});

$('.customSelectBox').on('focusout', function() {
  if(!selectCustomFlag) {
    $('.customSelectList').hide();
  }
  $(this).removeClass('selected');
});

$('.customSelectOption').on('mouseenter', function() {
  selectCustomFlag = true;
 
});

$('.customSelectOption').on('mouseout', function() {
  selectCustomFlag = false;
});

$('.customSelectOption').on('click', function() {
  let value = $(this).attr('value');
  $(".customSelectOption").removeClass("selected");
  $(this).addClass("selected");
  $('.customSelectText').text($(this).text());
  $('.selectOrigin').val(value);
  $('.customSelectList').hide();

  $('.selectOrigin').find('option').each(function(index, el) {
    if($(el).attr('value') == value) {
      $(el).attr('selected', 'selected');
    } else {
      $(el).removeAttr('selected');
    }
  });
});

$('.inputFile').on('click', 'button',function() {
  $(this).closest('.inputFile').find('input[type="file"]').click(); 
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


   //console.log('시작');
  //  $('#fullpage').fullpage({
  //   verticalCentered: true,
  //   autoScrolling: false,
  //   //paddingTop: 100,

  //   onLeave : function (index, nextIndex, direction){
  //     //console.log('아래');
  //       if (index == 1 && direction == 'down'){
  //         //console.log('aaa-1');
  //           $(".header").addClass("reverse");
  //           $(".btnTop").show();
  //       }else if (index == 2 && direction == 'up'){
  //           //console.log('aaa-2');
  //           $(".header").removeClass("reverse");
  //           $(".btnTop").hide();

  //       }
  //   },
  //   afterLoad: function (anchorLink, index) {
  //     //console.log('aaa-3');
  //     if (index == 1){
  //       $("#header").removeClass("reverse");
  //       $.fn.fullpage.setAllowScrolling(true);
  //       $(".btnTop").hide();

  //     }
  //   }

  // });
    // fullpage


});
