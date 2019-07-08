(function($) {
 
  var app = $.sammy('#app', function() {
    this.get('#/', function() {
      $('#main').text();
    })
  })
  
 })(jQuery);