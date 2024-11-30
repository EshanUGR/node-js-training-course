// const _=require('lodash');

// const items=[1,[2,[3,[4]]]];

// const newItems=_.flattenDeep(items)

// console.log(newItems)
// // 1.30
// console.log('heloo');

console.log("first task");

console.time();

for (let i = 0; i < 1000000; i++) {
  const h3 = document.querySelector("h3");
  h3.textContent = `Hey everyone is waiting on me`;
}
console.timeEnd();
console.log("next task");
