QUnit.test('solution1()', function ( assert ) 
{
  assert.equal(solution1([]), 1, "Test for an empty input array");
  assert.equal(solution1([1,5,4,2]), 3, "Test input from the task page on GitHub");
  assert.equal(solution1([100]), 1, "Test for an input with one positive number in it");
  assert.equal(solution1([0]), 1, "Test for an input that only contains a zero");
  assert.equal(solution1([0,6,4,1,3,2]), 5, "Test for an input that contains 0");
  assert.equal(solution1([-5,-4,-3,-1]), 1, "Test for an input that only contains negative numbers");
  assert.equal(solution1([-5,-3,-2,0,1,2,3,5,6]), 4, "Test for an input with negative integers");
  assert.equal(solution1(['5', 6.7, 0, '-1', 1, 2, '3.0', 5]), 4, "Test for an input with mixed element types");
  assert.equal(solution1([1,2,3,4,5.1,6]), 5, "Test for ignoring real numbers in input");
  assert.equal(solution1([1.00000,3]), 2, "Test for casting real numbers with 0-filled decimal part to integers");
});

QUnit.test('solution2()', function ( assert ) 
{
  assert.throws(function() { solution2(); }, "Input cannot be undefined or null!", "Input is undefined");
  assert.throws(function() { solution2(null); }, "Input cannot be undefined or null!", "Input is null");
  assert.throws(function() { solution2(1) }, "This function is only useful for string inputs!", "Input is of type //number");
  assert.throws(function() { solution2([]) }, "This function is only useful for string inputs!", "Input is array");
  assert.equal(solution2(""), true, "Test for an empty string (balanced)");
  assert.equal(solution2("Some string without braces"), true, "Test for a string without braces (balanced)");
  assert.equal(solution2("[]"), true, "Test input #1 from the task page on GitHub");
  assert.equal(solution2("[()]"), true, "Test input #2 from the task page on GitHub");
  assert.equal(solution2("[](){}"), true, "Test input #3 from the task page on GitHub");
  assert.equal(solution2("]["), false, "Test input #4 from the task page on GitHub");
  assert.equal(solution2("[(])"), false, "Test input #5 from the task page on GitHub");
  assert.equal(solution2("{"), false, "Test for input that consists of a single opening brace");
  assert.equal(solution2(")"), false, "Test for input that consists of a single closing brace");
  assert.equal(solution2("((((((((((((((()))))))))))))))"), true, "Test for a relatively high level of multiplicity (balanced)"); 
  assert.equal(solution2("((((((((((((((())))))))))))))"), false, "Test for a relatively high level of multiplicity (unbalanced)"); 
  assert.equal(solution2("{{({[][][()]{({()})[]}}{})}([])}"), true, "Test: complex random expression (balanced)");
  assert.equal(solution2("{{({[][][()]{({()})[]}}{}}([])}"), false, "Test: complex random expression (unbalanced)");
});

QUnit.test('solution3()', function ( assert ) 
{
  assert.deepEqual(solution3([1,2,3], '(a)=>a*2'), [2,4,6], "Test input #1 from the task page on GitHub");
  assert.deepEqual(solution3([1,2,3], '(a)=>a+2'), [3,4,5], "Test input #2 from the task page on GitHub");
  assert.deepEqual(solution3([1,2,3], '()=>1'), [1,1,1], "Test input #3 from the task page on GitHub");
  assert.deepEqual(solution3(['    Prototype   ', '    JavaScript   ', '  CSS '], '(a)=>a.trim()'), ['Prototype', 'JavaScript', 'CSS'], "Test for a string array using trim() calls (one-argument function)");
  assert.deepEqual(solution3([1,2,3], '   (   a   )   =>   a*2    '), [2,4,6], "Test for whitespace in the function body input");
  assert.deepEqual(solution3([1,2,3], '(a,b,c)=>c[b+1]'), [2,3,undefined], "Test for multi-parameter callback");
  assert.deepEqual(solution3([3,4,2,1,5], '(a,b,c)=>b == c.length - 1 ? a : a < c[b+1] ? a : c[b+1]'), [3,2,1,1,5], "Test for a complex multi-parameter callback");
  assert.deepEqual(solution3([1,2,3], '   (   a  ,  b  , c  )  =>  c[b+1]       '), [2,3,undefined], "Test for whitespace in a multi-parameter callback");
  assert.deepEqual(solution3([5,6,7], '  (   )  => '), [undefined,undefined,undefined], "Test for a function without parameters returning nothing");
  assert.deepEqual(solution3([1,2,3], ''), [undefined,undefined,undefined], "Test for empty string as an input");
});