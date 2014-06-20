$( document ).ready(function() {
  $('#one').click(function(){
    $('#one').fadeOut('slow', function(){
      $('#two').fadeIn('slow');
    });
  });
  $('#two').click(function(){
    $('#two').fadeOut('slow', function(){
      $('#three').fadeIn('slow');
      });
  	});
   $('#three').click(function(){
    $('#three').fadeOut('slow', function(){
      $('#four').fadeIn('slow');
      });
  	});
   $('#four').click(function(){
    $('#four').fadeOut('slow', function(){
      $('#one').fadeIn('slow');
      });
  	});
  });