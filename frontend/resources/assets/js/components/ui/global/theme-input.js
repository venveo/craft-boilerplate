function init(){
  // Will return input type value
  function checkInputType(input) {
    return input.getAttribute('type');
  }
  // Custom Input: Checkbox
  var inputs = document.querySelectorAll('input[type=checkbox]:not([data-ui-disable])');
  for (var i = 0; i < inputs.length; i++) {
    var inpCusWrap = document.createElement('div');
    var inpCusDiv = document.createElement('div');
    var inputType = checkInputType(inputs[i]);
    inpCusWrap.className = 'input-'+inputType;
    var input = inputs[i];
    var appdCheck = input.parentNode.insertBefore(inpCusWrap, input);
    appdCheck.appendChild(input);
    appdCheck.appendChild(inpCusDiv);
  }
};

export default init;
