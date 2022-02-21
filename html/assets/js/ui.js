
$(document).ready(function(){

  var header = $(".header");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
  
      if (scroll >= 500) {
          header.addClass("reverse");
          $(".btnTop").show();
      } else {
          header.removeClass("reverse");
          $(".btnTop").hide();
      }
  });
  
  $(".btnTop").hide()
    $(window).scroll(function(){
      var WScrollTop = $(window).scrollTop();
      var val = ($(document).height() - $(window).height() - $(".footer_wrap").outerHeight());
  
      if ($(this).scrollTop() > 10) {
        $(".btnTop").fadeIn();
      } else {
        $(".btnTop").fadeOut();
      }
  
      if(WScrollTop > val){
        $(".btnTop").css({bottom:((WScrollTop-val)+50)+"px"})
      }
    });
    $(".btnTop").click(function(){
      $("body,html").animate({scrollTop:0}, 300);
    });
  
  var video = document.getElementById('video');
  var source = document.createElement('source');
  
  source.setAttribute('src', '../assets/images/main/recruit.mp4');
  source.setAttribute('type', 'video/mp4');
  
  //video.appendChild(source);
  video.play();
  console.log({
    src: source.getAttribute('src'),
    type: source.getAttribute('type'),
  });
  
  // setTimeout(function() {
  //   video.pause();
  
  //   source.setAttribute('src', '../assets/images/main/recruit.webm');
  //   source.setAttribute('type', 'video/webm');
  
  //   video.load();
  //   video.play();
  //   console.log({
  //     src: source.getAttribute('src'),
  //     type: source.getAttribute('type'),
  //   });
  // }, 3000);

  const swiper = new Swiper('.swiper-container', { 
    //기본 셋팅 //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평 
     direction: 'horizontal', 
     //한번에 보여지는 페이지 숫자 
     slidesPerView: 3, //페이지와 페이지 사이의 간격 
     spaceBetween: 30, //드레그 기능 true 사용가능 false 사용불가 
     debugger: true, //마우스 휠기능 true 사용가능 false 사용불가 
     mousewheel: true, //반복 기능 true 사용가능 false 사용불가 
     loop: true, //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 
    centeredSlides: true, // 페이지 전환효과 slidesPerView효과와 같이 사용 불가 // 
    effect: 'fade', //자동 스크를링 
    autoplay: { //시간 1000 이 1초 
      delay: 2500, disableOnInteraction: false, }, //페이징 
      pagination: { //페이지 기능 
        el: '.swiper-pagination', //클릭 가능여부 
        clickable: true, }, //방향표 
        navigation: { //다음페이지 설정 
          nextEl: '.swiper-button-next', //이전페이지 설정 
          prevEl: '.swiper-button-prev', }, });


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
