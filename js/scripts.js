

 $(document).ready(function () {

   $('.main-menu ul a.opener').click(function () {
     $(this).parent().find("ul:first").slideToggle();
     $(this).parent().toggleClass('active');
     return false;
   });

   $('ul.accordion a.opener').click(function () {
     $(this).parent().find("ul:first").slideToggle();
     $(this).parent().toggleClass('active');
     return false;
   });

   $('.mobile-policy-btn,.policy__side a').click(function () {
    if ($('.policy__side,.mobile-policy-btn,body').hasClass('open-policy')) {
      $('.policy__side,.mobile-policy-btn,body').removeClass('open-policy');
    } else {
      $('.policy__side,.mobile-policy-btn,body').addClass('open-policy');
    }
  });

   $('.burger').click(function () {
     if ($('.main-menu,.burger,body').hasClass('open')) {
       $('.main-menu,.burger,body').removeClass('open');
     } else {
       $('.main-menu,.burger,body').addClass('open');
     }
   });


   $('.cookie-policy__close').click(function () {
     if ($('.cookie-policy').hasClass('close')) {
       $('.cookie-policy').removeClass('close');
     } else {
       $('.cookie-policy').addClass('close');
     }
   });

   $('.input-number').each(function () {
     var spinner = $(this),
       input = spinner.find('input[type="number"]'),
       btnUp = spinner.find('.order-up'),
       btnDown = spinner.find('.order-down'),
       min = input.attr('min'),
       max = input.attr('max');

     btnUp.click(function () {
       var oldValue = parseFloat(input.val());

       var newVal = oldValue + 1;

       spinner.find("input").val(newVal);
       spinner.find("input").trigger("change");
     });

     input.change(function () {
       console.log(input.val());

       if (input.val() > 9 && input.val() <= 99) {
         btnDown.css('right', 57);
       } else if (input.val() > 99 && input.val() <= 999) {
         btnDown.css('right', 74);
       } else if (input.val() > 999) {
         btnDown.css('right', 90);
       } else {
         btnDown.css('right', 45);
       }
     });

     btnDown.click(function () {
       var oldValue = parseFloat(input.val());
       if (oldValue <= min) {
         var newVal = oldValue;
       } else {
         var newVal = oldValue - 1;
       }
       spinner.find("input").val(newVal);
       spinner.find("input").trigger("change");
     });

   });

   $('.tabgroup > div').hide();
   $('.tabgroup > div:first-of-type').show();
   $('.tabs a').click(function (e) {
     e.preventDefault();
     var $this = $(this),
       tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
       others = $this.closest('li').siblings().children('a'),
       target = $this.attr('href');
     others.removeClass('active');
     $this.addClass('active');
     $(tabgroup).children('div').hide();
     $(target).show();

   });

   function moveElement(selector, target) {
     var homeSelector = selector + '-home';
     var home = document.querySelector(homeSelector);
     if (home) {
       return;
     }

     var element = document.querySelector(selector);
     var oldParent = element.parentElement;
     var newParent = document.querySelector(target);
     if (element && newParent) {
       newParent.appendChild(element);
       oldParent.classList.add(homeSelector.slice(1));
     }
   }

   function moveElementBack(selector) {
     var homeSelector = selector + '-home';
     var home = document.querySelector(homeSelector);
     if (!home) {
       return;
     }

     var element = document.querySelector(selector);
     if (element) {
       home.appendChild(element);
       home.classList.remove(homeSelector.slice(1));
     }
   }

   function handleResize() {
     var width = window.innerWidth;


     if (width < 992) {
       moveElement(".main-header__right", ".main-menu");

       return;
     }


     moveElementBack(".main-header__right");
   }



   window.addEventListener("resize", handleResize);
   handleResize();



   $(function () {
     // This will select everything with the class smoothScroll
     // This should prevent problems with carousel, scrollspy, etc...
     $('.smoothScroll').click(function () {
       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
           $('html,body').animate({
             scrollTop: target.offset().top
           }, 1000); // The number here represents the speed of the scroll in milliseconds
           return false;
         }
       }
     });
   });

 });