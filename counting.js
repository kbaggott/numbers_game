$(function(){

  range = [0,1,2,3,4,5,6,7,8,9];
  answers = shuffle([0,1,2,3,4,5,6,7,8,9]);
  
  $.each(range, function(x, y){
    $('.questions').append('<div class="ten droppable lg-text" data-id="'+y+'"><p>'+y+'</p></div>');
  });

  $.each(answers, function(x, y){
    $('.answers').append('<div class="ten draggable" data-id="'+y+'"><p>'+y+'</p></div>');
  });
  
  function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };
});
