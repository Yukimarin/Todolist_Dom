// // Bài 1
// let btnMinus = document.getElementById("minus");
// let count = document.getElementById("count");
// let btnAdd = document.getElementById("add");

// btnAdd.onclick = function () {
//   console.log("haha");
//   count.innerText++;
// };

// btnMinus.onclick = function () {
//   if (count.innerText > 0) {
//     count.innerText--;
//   }
// };

// // Bài 2:
// let btnUp = document.getElementById("up");
// let content = document.getElementById("content");
// let size = 16;

// btnUp.onclick = function () {
//   if (size < 40) {
//     size++;
//     content.style.fontSize = `${size}px `;
//   } else if (size == 40) {
//     content.style.color = `red`;
//   }
// };

// // Bài 3:
// let box = document.getElementById("box");
// let btnChange = document.getElementById("change");
// console.log(btnChange);

// // console.log(r, g, b);
// btnChange.onclick = function () {
//   console.log("haha");
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   box.style.backgroundColor = `rgb(${r},${g},${b})`;
// };

// Bài 3:
// background-color: rgb(223, 210, 15);
// let box = document.getElementById("box");
// let btnChange = document.getElementById("change");
// console.log(box, btnChange);

// btnChange.onclick = function () {
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);
//   console.log(r, g, b);
//   box.style.backgroundColor = `rgb(${r},${g},${b})`;
// };

// Bài 4:
// let searchE = document.getElementById("search");
// let item = document.getElementById("item");
// let check = true;
// searchE.addEventListener("click", function () {
//   if (check == true) {
//     searchE.innerText = "Ẩn tìm kiếm nâng cao";
//     item.style.display = "block";
//     check = false;
//   } else if (check == false) {
//     searchE.innerText = "Tìm kiếm nâng cao";
//     item.style.display = "none";
//     check = true;
//   }
// });

// Bài 5


