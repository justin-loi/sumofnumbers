const testNums = [1, 2, 3, 4];

function sumFor(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecursion(list) {
  if (list.length > 1) {
    return list.pop() + sumRecursion(list);
  }
  return list[0];
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNums));
