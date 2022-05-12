$(document).ready(function () {
  // GNB
  $('.dropdown.item').click(function (e) {
    e.stopPropagation();

    if ($(window).width() >= 1181) {
      $(this).toggleClass('active');
      $(this).children('.menu').toggleClass('visible');
      $(this).siblings('.item').removeClass('active');
      $(this).siblings('.item').children('.menu').removeClass('visible');
    }
    if ($(window).width() < 1181) {
      $(this).children('.menu').addClass('visible');
      $('.dim-bg-dropdown').show();
      $('body').addClass('overflown');
    }
  });

  $(document).click(function () {
    $('.dropdown.item').removeClass('active');
    $('.dropdown.item > .menu').removeClass('visible');
    $('.dim-bg-dropdown').hide();
    $('body').removeClass('overflown');
  });

  $('.signout-btn').click(function () {
    $('.dim-bg-dropdown').hide();
  });

  // GNB mobile
  $('.mob-nav-icon').click(function () {
    $('body').toggleClass('overflown');
    $('header').toggleClass('white');
    $(this).toggleClass('open');
    $('.menu.mobile').slideToggle();
    $('.menu.right').toggleClass('hidden');
  });

  $('.title.has-subnav').click(function () {
    $(this).toggleClass('open');
    $(this).next('.content').slideToggle(200);
  });

  $('.menu.mobile .content a').click(function () {
    $('header').removeClass('white');
    $('.menu.mobile').hide();
    $('.mob-nav-icon').removeClass('open');
    $('.menu.right').removeClass('hidden');
    $('.title.has-subnav').removeClass('open');
    $('.menu.mobile .content').hide();
  });

  // Language select
  $('.selection').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).find('.selection-menu').slideToggle(300);
  });

  $('.selection').focusout(function () {
    $(this).find('.selection-menu').slideUp(300);
  });

  $('.selection .selection-menu li').click(function () {
    $(this).parents('.selection').find('span').text($(this).text());
    $(this).parents('.selection').find('input').attr('value', $(this).attr('value'));

    if ($("input[name='lang']").val() === 'en') {
      $('.selection-item-en').delay(300).hide(0);
      $('.selection-item-ko').delay(300).show(0);
    } else if ($("input[name='lang']").val() === 'ko') {
      $('.selection-item-ko').delay(300).hide(0);
      $('.selection-item-en').delay(300).show(0);
    }
  });

  // Language select mobile
  $('.lng-select-item').click(function () {
    $(this).addClass('active');
    $(this).siblings('.lng-select-item').removeClass('active');
    $('header').removeClass('white');
    $('.menu.mobile').hide();
    $('.mob-nav-icon').removeClass('open');
    $('.menu.right').removeClass('hidden');
  });

  // Footer mobile
  $('footer .nav-title.has-subnav').click(function () {
    if ($(window).width() < 1181) {
      $(this).toggleClass('active');
      $(this).next('.footer-sub-nav').slideToggle();
    }
  });

  // Accordion toggle
  $('.accordion-title').click(function () {
    $(this).next('.accordion-detail').slideToggle(300);
    $(this).children('.accordion-arrow').toggleClass('spin');
  });

  // Modal
  $('a[href="#signout"]').click(function (e) {
    e.preventDefault();
    $('#signout')
      .modal({
        closable: false,
        selector: {
          close: '.modal-close',
        },
      })
      .modal('show');
  });
  $('a[href="#terms"]').click(function (e) {
    e.preventDefault();
    $('#terms')
      .modal({
        closable: false,
        selector: {
          close: '.modal-close',
        },
      })
      .modal('show');
  });
  $('a[href="#policy"]').click(function (e) {
    e.preventDefault();
    $('#policy')
      .modal({
        closable: false,
        selector: {
          close: '.modal-close',
        },
      })
      .modal('show');
  });
});

// Fixed header
$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $('header').addClass('fixed-header');
  } else {
    $('header').removeClass('fixed-header');
  }
});
