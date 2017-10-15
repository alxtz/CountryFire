console.log('test')

$(document).ready(function() {
  $('#submit').click(function functionName() {
    console.log('try to submit')
    $.post( "", function( data ) {
      $( ".result" ).html( data );
      alert( "Load was performed." );
    });
  })
});
