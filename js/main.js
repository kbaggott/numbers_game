$(function() {

  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'sounds/drag.mp3');

  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	$.each(numbers, function(number){
	  window['m' + number] = document.createElement('audio');
	  window['m' + number] .setAttribute('src', 'sounds/'+number+'.mp3');
	});

  var totalDropped = 0;
  
  $( ".draggable" ).draggable({
    revert: 'invalid',
    revertDuration: 50,
    start: function(event, div){
             div.helper.removeClass('non-wiggler').addClass('wiggler');
              var sound = eval("m"+(div.helper.data('sound')));
              sound.play();
           },
    stop: function(event, div){
             div.helper.stop().removeClass('wiggler').addClass('non-wiggler');
              var sound = eval("m"+(div.helper.data('sound')));
              sound.pause();
           }, 
    });
  
  $('.droppable').droppable({
    drop: function(event, ui) {
            ui.draggable.position({
                of: $(this),
                my: 'left top',
                at: 'left top'
            }).stop().removeClass('wiggler').addClass('non-wiggler').draggable("disable");
            $(this).find('p').html('&nbsp;');
            itemDropped();
    }, 
    accept: function(e){
              console.log(e.data('id'),$(this).data('id'));
              if(e.data('id') == $(this).data('id')) {
                return true;
              }
            },
    distance: 0,
    tolerance: 'touch',
   });
   
   function itemDropped(){
      totalDropped = totalDropped + 1;
      if (totalDropped == $('.draggable').length){
        audioElement.pause();
        swal(
          {
            title: "Well done!",
            text: "You solved the sum!",
            type: "success",
            confirmButtonText: "Try another..."
          },
          function(){
            location.reload();
          }
        );
      }
   }
});
