function solution1(inputNumbers)
{
  var output = [];
  for (var i = 0; i < inputNumbers.length; i++)
  {
    if (isPositiveInteger(inputNumbers[i]))
    {
      output[inputNumbers[i] - 1] = inputNumbers[i];
    }
  }
  for (var j = 0; j < output.length; j++)
  {
    if (j != output[j] - 1)
    {
      return j + 1;
    }
  }
  return 1;
  
  function isPositiveInteger(number)
  {
    return number > 0 && number % 1 === 0;
  }
}

function solution2(expression)
{
  var supportedOpeningBraces = {'{': 0, '[': 1, '(': 2};
  var supportedClosingBraces = {'}': 0, ']': 1, ')': 2};
  
  validateInput(expression);
  
  var braceStack = [];
  for (var i = 0; i < expression.length; i++)
  {
    var character = expression.charAt(i);
    if (character in supportedOpeningBraces)
    {
      braceStack.push(character);
    }
    else if (character in supportedClosingBraces)
    {
      var previousBrace = braceStack.pop();
      if (supportedOpeningBraces[previousBrace] !== supportedClosingBraces[character])
      {
        return false;
      }
    }
  }
  return braceStack.length == 0;
  
  function validateInput(input)
  {
    if (typeof input === 'undefined' || input === null)
    {
      throw "Input cannot be undefined or null!";
    }
    if (typeof input !== 'string')
    {
      throw "This function is only useful for string inputs!";
    }
  }
  
}

function solution3(array, strCallback)
{
  var functionBodyPattern = /[\s]*(?:\()?(.*?)(?:\))?[\s]*=>(.+)/;
  
  var functionBodyParts = functionBodyPattern.exec(strCallback);
  var foundParts = functionBodyParts !== null;
  var strArguments = foundParts && functionBodyParts.length > 1 ? functionBodyParts[1].trim() : [];
  var expression = "return " + (foundParts && functionBodyParts.length > 2 ? functionBodyParts[2].trim() : "");
  var arguments = strArguments.length > 0 ?
    strArguments.split(',').map(function(argument) {
      return argument.trim();
    }) : strArguments;
  return array.map(new Function(arguments, expression));
}