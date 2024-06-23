const add = function () {
  console.log(2 + 3);
};

add();
add();

function runTwice(param) {
  param();
  param();
}

runTwice(function () {
  console.log('12b');
});

runTwice(add);