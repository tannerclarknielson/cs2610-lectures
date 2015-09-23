$(document).ready(function(){
  $('.search').click(function(e){
    e.preventDefault();
    e.stopPropagation();

    var query = $('.search-input').val();

    if (query === '') {
      $('.search-input').addClass('error');
    } else if (query.indexOf('#') !== -1){
      $('.search-input').addClass('error');
    } else {
      $('.search-input').removeClass('error');
    }
  });

  $('.toggler').click(function(e){
    e.preventDefault();
    e.stopPropagation();

    $('.sidebar').hide('slide', {direction: 'left'}, 1000);
  });
});
