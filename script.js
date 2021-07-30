$('#test').text('test');

$.get( "text.txt", function( data ) {
  alert( "Data Loaded: " + data );
});