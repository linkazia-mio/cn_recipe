$(document).ready(function(){
  $('#btn_clear').click(function () {
    $('.baby_search ul li').removeClass('checked');
    $('.recipe_search ul li').removeClass('checked');
  });
  $('.baby_search ul li').click(function () {
    $(this).toggleClass('checked');
  });
  $('.recipe_search ul li').click(function () {
    $(this).toggleClass('checked');
  });
  $('.narrowing_search .btn_baby').click(function() {
    $('.baby_search').animate( { opacity: 'toggle' , height: 'toggle' }, 'fast' );
    $('.search_btn').animate( { height: 'toggle' }, 'fast' );
    $(this).toggleClass('active');
  });
  $('.narrowing_search .btn_recipe').click(function() {
    $('.recipe_search').animate( { opacity: 'toggle' , height: 'toggle' }, 'fast' );
    $('.search_btn').animate( { height: 'toggle' }, 'fast' );
    $(this).toggleClass('active');
  });
  //favorite_btn
  $('.favorite_btn #btn_edit').click(function() {
    $('.favorite_list').animate( { paddingLeft: '30px', }, 'fast' );
    $('.favorite').addClass('edit');
    $(".favorite_check").prop("disabled", false);
  });
  $('.favorite_btn #btn_cancel').click(function() {
    $('.favorite_list').animate( { paddingLeft: '0', }, 'fast' );
    $('.favorite').removeClass('edit');
    $(".favorite_check").prop("disabled", true);
  });
});
