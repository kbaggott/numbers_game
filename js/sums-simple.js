$(function(){

  var options = window.location.hash;
  if (options == "#dif=2"){
    $('#med').addClass('active');
    $('.droppable.total1, .droppable.total2').css({'color':'transparent'});
  }
  else{
    $('#easy').addClass('active');
  }

  //hard mode hide all, but this has the problem of not knowing which way around they should go.
  //if (options == "#dif=3") $('.droppable').css({'color':'transparent', 'background-color': '#fff', 'opacity': '0.75'});

  $('#easy, #med, #hard').click(function(){
    window.location.reload();
  });

  var rand = Math.floor(Math.random() * 9) + 1;
  var overallTotal = 0;
  var numbersArray = [];
  var totalsArray = [];

  while(overallTotal < 1){
    var operand = Math.floor(Math.random() * 2) + 1;
    operand = operand == 1 ? '-' : '+';
    
    var no1 = Math.floor(Math.random() * 9) + 1;
    var no2 = Math.floor(Math.random() * 9) + 1;
    
    overallTotal = operand == '-' ? no1 - no2 : no1 + no2;
    overallTotal = overallTotal.toString();
    
    //FIX ME: 11 breaks.
    numbersArray = [[1, no1], [2, no2]];
    totalsArray = [[1, overallTotal[0]]];
    if (overallTotal[1]) totalsArray.push([2, overallTotal[1]]);
  }

  //numbers
  $.each(numbersArray, function(x, y){
     $('.no'+y[0]).data('id', 'n-'+y[1]).find('p').html(y[1]);
  });
  numbersArray = shuffle(numbersArray);
  $.each(numbersArray, function(x, y){
     $('.answers').append('<div class="twenty draggable" data-sound="'+y[1]+'" data-id="n-'+y[1]+'">'+y[1]+'</div>');
  });

  //operand
  $('.operand').find('p').html(operand);

  //totals
  $.each(totalsArray, function(x, y){
    $('.total'+y[0]).data('id', y[0]+'-'+y[1]).find('p').html(y[1]);
  });
  totalsArray = shuffle(totalsArray);
  $.each(totalsArray, function(x, y){
    $('.answers').append('<div class="twenty draggable" data-sound="'+y[1]+'" data-id="'+y[0]+'-'+y[1]+'">'+y[1]+'</div>');
  });

  $('droppable').click(function(){
    console.log($(this).data('id'));
  });
  
  function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };  
});
