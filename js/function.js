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
    $('.favorite_list dl').animate( { paddingLeft: '30px', }, 'fast' );
    $('.favorite').addClass('edit');
    $(".favorite_check").prop("disabled", false);
  });
  $('.favorite_btn #btn_cancel').click(function() {
    $('.favorite_list dl').animate( { paddingLeft: '0', }, 'fast' );
    $('.favorite').removeClass('edit');
    $(".favorite_check").prop("disabled", true);
  });
  // $('.favorite_lists  .favorite_check').click(function(){
  //   var check_count = $('.favorite_list :checked').length;
  //   if (check_count == 0 ){
  //     $('.btn_delete').hide();
  //     $('.btn_cancel').show();
  //   }
  //   else {
  //     $('.btn_delete').show();
  //     $('.btn_cancel').hide();
  //   }
  // });
  $('.favorite_lists .favorite_check').click(function(){
    $(this).toggleClass('checked');
    if($('.favorite_lists input').hasClass('checked')){
        $('.btn_delete').show();
        $('.btn_cancel').hide();
    }
    else {
      $('.btn_delete').hide();
      $('.btn_cancel').show();
    }
  });
  $('.favorite_btn #btn_delete').click(function(){
    $('.btn_cancel').show();
    $('.btn_delete').hide();
    if($('.favorite_lists input').hasClass('checked')){
      $('.favorite_lists input').removeClass('checked');
    }
  });
});
