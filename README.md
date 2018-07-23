# Food-Calculator
Food Calcualtor for Restaurant Menu

jQuery calculates based on number of people and based on a variable for each opton it pulls numbers via classes and then totals all with custom tax at the end.

Working example here:
https://codepen.io/nrwilliams/pen/EVrveQ

<h2>Example</h2>
<pre>
<code>
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
</code>
</pre>

<p>When the item is clicked on, it uses the variable for this option <code>var choppedPorkPound = 10.99;</code> to run the calculation and then place the correct amount in the input field. By changing the variable amount, you will get varying results. The formula takes the number of people you input divided by how many that item serves and then multiply those results by the variable related to this item.</p>
