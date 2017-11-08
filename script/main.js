// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// })


$(document).ready(function () {
    showLogoInMenu($(document).scrollTop());
    setMenuStyle($(document).scrollTop());

    $(document).on("scroll", onScroll);
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
          })
          if($(this).attr("id") != "logo-button"){
            $(this).addClass('active');
          }

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");

            if($(this).attr("id") != "logo-button"){
            currLink.addClass("active");
          }
        }
        else{
            currLink.removeClass("active");
        }
    });

    setMenuStyle(scrollPos);
    showLogoInMenu(scrollPos);
}

function showLogoInMenu(scrollPos) {
    if (scrollPos + document.getElementById('menu').offsetHeight < window.innerHeight) {
        $('.logo-button').addClass('hide');
        //$('.logo-button').addClass('show');
    }
    else {
        //$('.logo-button').removeClass('show');
        $('.logo-button').removeClass('hide');
    }
}

function setMenuStyle(scrollPos) {
  if (scrollPos + document.getElementById('menu').offsetHeight < window.innerHeight){
    $('.menu').addClass('menu-splash');
  }
  else {
    $('.menu').removeClass('menu-splash');
  }
}
