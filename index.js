$('.page.home').show();
$('.info').click(function(event) {
  event.preventDefault();
  let name = this.dataset.page;
  $('.page').hide();
  $('.'+name).show();
})