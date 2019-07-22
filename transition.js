// $(function(){
//   $('#nodel1').on('click', function(){
//     console.log(this);
//     console.log('asasdasdasdasdasd');
//   });
// })

$(document).ready(function(){
  $('svg').click(function() {
    $('#node2').on('click', function(e){
      if (e.handled != true) {
        console.count('nodel1_____________________________!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        alert('asdasdasdasdsd');
        e.handled = true;
      }
    })
  })
});
