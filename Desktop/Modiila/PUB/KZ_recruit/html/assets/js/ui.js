
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

    $(".btnTop .btn").on('click',function(){
        $.fn.fullpage.moveTo(1);

        var timer = setInterval(function() {
           $(".header").removeClass("reverse");
           clearInterval(timer);
         }, 1000);
    });

});
