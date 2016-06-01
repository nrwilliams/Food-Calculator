var halfChicken = 5.50;
var choppedPorkPound = 10.99;
var choppedPorkHalf = 10.99;
var bakedBeans = 5;
var potatoSalad = 7;
var buns = 1;
var collards = 7;
var butterBeans = 5;
var squashCasserole = 7;
var macNCheese = 7;
var brunswickStew = 7;
var greenBeans = 5;
var sweetPotato = 7;
var chickenSalad = 15;
var regularSoda = 1.69;
var largeSoda = 1.99;
  
$('.btn').click(function() {  
  $(this).toggleClass('clicked');
}); 

// CHOPPED PORK POUND
$('.chopped-pork-regular').on('click', function() {  
  if ($(this).hasClass('clicked')) {
  var people = $('#people').val();
  var choppedPorkPoundFinal = ((people / 6) * choppedPorkPound).toFixed(2);
  
  $('.regularporkprice').val(choppedPorkPoundFinal);
  } else {
   $('.regularporkprice').val('0.00');
  }
});

// CHOPPED PORK HALF
$('.chopped-pork-large').on('click', function() { 
 if ($(this).hasClass('clicked')) {
  var people = $('#people').val();
  var choppedPorkHalfFinal = ((people / 4) * choppedPorkHalf).toFixed(2);
  
  $('.largeporkprice').val(choppedPorkHalfFinal);
   } else {
   $('.largeporkprice').val('0.00');
  }
});

// CHICKEN
$('.chicken').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var halfChickenFinal = ((people / 2) * halfChicken).toFixed(2);
    $('.chickprice').val(halfChickenFinal);
  } else {
    $('.chickprice').val('0.00');
  }
});

// BREAD
$('.bread').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var bunsFinal = ((people / 1) * buns).toFixed(2);
    $('.breadprice').val(bunsFinal);
  } else {
    $('.breadprice').val('0.00');
  }
});

// BAKED BEANS
$('.baked-beans').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var bakedBeansFinal = ((people / 4) * bakedBeans).toFixed(2);
    $('.bbprice').val(bakedBeansFinal);
  } else {
    $('.bbprice').val('0.00');
  }
});

// POTATO SALAD
$('.potato-salad').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var potatoSaladFinal = ((people / 4) * potatoSalad).toFixed(2);
    $('.psprice').val(potatoSaladFinal);
  } else {
    $('.psprice').val('0.00');
  }
});

// COLLARDS
$('.collards').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var collardsFinal = ((people / 4) * collards).toFixed(2);
    $('.collardsprice').val(collardsFinal);
  } else {
    $('.collardsprice').val('0.00');
  }
});

// BUTTER BEANS
$('.butter-beans').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var butterBeansFinal = ((people / 4) * butterBeans).toFixed(2);
    $('.butter-beansprice').val(butterBeansFinal);
  } else {
    $('.butter-beansprice').val('0.00');
  }
});

// SQUASH CASSEROLE
$('.squash-casserole').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var squashCasseroleFinal = ((people / 4) * squashCasserole).toFixed(2);
    $('.squash-casseroleprice').val(squashCasseroleFinal);
  } else {
    $('.squash-casseroleprice').val('0.00');
  }
});

// MAC N CHEESE
$('.mac-n-cheese').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var macNCheeseFinal = ((people / 4) * macNCheese).toFixed(2);
    $('.macncheeseprice').val(macNCheeseFinal);
  } else {
    $('.macncheeseprice').val('0.00');
  }
});

// BRUNSWICK STEW
$('.brunswick-stew').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var brunswickStewFinal = ((people / 4) * brunswickStew).toFixed(2);
    $('.brunswick-stewprice').val(brunswickStewFinal);
  } else {
    $('.brunswick-stewprice').val('0.00');
  }
});

// GREEN BEANS
$('.green-beans').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var greenBeansFinal = ((people / 4) * greenBeans).toFixed(2);
    $('.green-beansprice').val(greenBeansFinal);
  } else {
    $('.green-beansprice').val('0.00');
  }
});

// SWEET POTATO
$('.sweet-potato').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var sweetPotatoFinal = ((people / 4) * sweetPotato).toFixed(2);
    $('.sweet-potatoprice').val(sweetPotatoFinal);
  } else {
    $('.sweet-potatoprice').val('0.00');
  }
});

// CHICKEN SALAD
$('.chicken-salad').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var chickenSaladFinal = ((people / 8) * chickenSalad).toFixed(2);
    $('.chicken-saladprice').val(chickenSaladFinal);
  } else {
    $('.chicken-saladprice').val('0.00');
  }
});

// REGULAR SODA
$('.regular-soda').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var regularSodaFinal = ((people / 1) * regularSoda).toFixed(2);
    $('.regular-sodaprice').val(regularSodaFinal);
  } else {
    $('.regular-sodaprice').val('0.00');
  }
});

// LARGE SODA
$('.large-soda').on('click', function() {  
  if ($(this).hasClass('clicked')) {
    var people = $('#people').val();
    var largeSodaFinal = ((people / 1) * largeSoda).toFixed(2);
    $('.large-sodaprice').val(largeSodaFinal);
  } else {
    $('.large-sodaprice').val('0.00');
  }
});


// CALCULATE
$('#calculate').on('click', function() {  
var sum = 0;
    $(".price").each(function(){
        sum += +$(this).val();
    });
 var totaltax = (sum * .07).toFixed(2);
var total = (sum).toFixed(2);
  $(".total").html('$' + total);
  $(".totaltax").html('$' + totaltax);
 var tax = (+sum + +totaltax).toFixed(2);   
  $(".totalwithtax").html('$' + tax);
  
});


$("#reset").click(function() {
$('.price').val('0.00');
 $('.btn').removeClass('clicked');
$('#people').val(''); 
  $('.total').html('$0.00');
  $('.totaltax').html('$0.00');
  $('.totalwithtax').html('$0.00');
});