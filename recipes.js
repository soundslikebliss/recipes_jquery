$( document ).ready(function() {
  $('#one').click(function(){
    $('#one').fadeOut('medium', function(){
      $('#two').fadeIn('medium');
    });
  });
  $('#two').click(function(){
    $('#two').fadeOut('medium', function(){
      $('#three').fadeIn('medium');
      });
  	});
   $('#three').click(function(){
    $('#three').fadeOut('medium', function(){
      $('#four').fadeIn('medium');
      });
  	});
   $('#four').click(function(){
    $('#four').fadeOut('medium', function(){
      $('#one').fadeIn('medium');
      });
  	});
  });