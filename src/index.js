var a = 10;
console.log(a);
Foo();
try {
  foo();
} catch (e) {
  console.log(e, "e");
}
function Foo() {
  console.log(a);

  if (true) {
    console.log(a);
    let a = 4;
    console.log(a);
  }

  console.log(a);
}

const foo = () => {
  console.log(a);

  if (true) {
    console.log(a);
    let a = 4;
    console.log(a);
  }

  console.log(a);
};
foo();
