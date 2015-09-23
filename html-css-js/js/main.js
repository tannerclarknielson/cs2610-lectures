$(document).ready(function(){
  $('.search').click(function(e){
    e.preventDefault();
    e.stopPropagation();

    var query = $('.search-input').val();

    if (query === '') {
      $('.search-input').addClass('error');
    } else {
      $('.search-input').removeClass('error');
    }
  })
});
