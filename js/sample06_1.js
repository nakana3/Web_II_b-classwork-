// IDで取得
const containerById = document.getElementById('container');
const containerByQuery = document.querySelector('#container'); // # が必要

// クラスで取得 (getElementByIdでは不可能)
const textItem = document.querySelector('.text-item');

// 属性で取得 (getElementByIdでは不可能)
const submitButton = document.querySelector('[type=submit]');

// 子孫要素として取得 (getElementByIdでは不可能)
const paragraphInContainer = document.querySelector('#container .text-item');

console.log("containerById:", containerById);
console.log("containerByQuery:", containerByQuery);
console.log("textItem:", textItem);
console.log("submitButton:", submitButton);
console.log("paragraphInContainer:", paragraphInContainer);


//大きな範囲の要素を取得
const todoListWrap = document.querySelector(".todo");

// その中の特定の要素を取得
const todoListItemWrap = todoListWrap.querySelector("tbody tr td");

console.log("todoListWrap:", todoListWrap);
console.log("todoListItemWrap:", todoListItemWrap);
