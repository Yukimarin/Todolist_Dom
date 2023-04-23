// $(".test").click(function () {
//   console.log("haha");
// });

//1. truy vấn các thẻ HTML bằng js
//  Truy vấn thông qua Id
// let divElement = document.getElementById("demo");
// console.log("Truy vấn ID", divElement);

// // Truy vấn thông class
// let divElement2 = document.getElementsByClassName("demo");
// console.log("Truy vấn class", divElement2);

// // Truy vấn thông qua tagname
// let divElement3 = document.getElementsByTagName("div");

// // Truy vấn bằng querySelector
// // Qua class
// // let divElement4 = document.querySelector(".demo");
// // console.log("Truy vấn querySelector", divElement4);
// // Qua ID
// let divElement4 = document.querySelector("#demo");
// console.log("Truy vấn querySelector", divElement4);

// // Truy vấn bằng querySelectorAll()
// let divElement5 = document.querySelectorAll(".demo");
// console.log("Truy vấn querySelectorAll", divElement5);

// 2. Thao tác thay đổi các thuộc tính trong HTML qua JS
// //Lấy content ( innerText; innerHTML, textContent)
// let ulElement = document.getElementById("list-item");
// console.log(ulElement);
// // ulElement.innerText = "Hello anh em lớp part-time";
// // console.log(ulElement.innerText);
// ulElement.innerHTML = "<p>Hello anh em</p>";
// console.log(ulElement.innerHTML);

// console.log(ulElement.textContent);

// // Set và lấy các Attribute (thuộc tính)
// VD: <p attribute1="value1",attribute2="value2",attribute3="value3"></p>
// setAttribute : thêm thuộc tính vào element
// element.setAttribute(name, value);
// getAtrribute : lấy giá trị của thuộc tính
// ulElement.setAttribute("style", "color:red");
// ulElement.setAttribute("class", "demo");
// let getAttribute = ulElement.getAttribute("class");
// console.log(getAttribute);

// 3.Các thuộc tính CSS
// ulElement.style.fontSize = "30px";
// ulElement.style.color = "red";

// 4 Event
// Khi ấn button change thì text đổi sang là "Hello anh em part-time"
// let btnChange = document.getElementById("change");
// console.log(btnChange);
// let pElement = document.getElementById("content");
// console.log(pElement);

// btnChange.onclick = function () {
//   //   console.log("haha");
//   pElement.innerText = "Hello anh em";
//   pElement.style.color = "pink";
//   pElement.style.fontSize = "30px";
// };

// function handleClick() {
//   pElement.innerText = "Hello anh em";
//   pElement.style.color = "pink";
//   pElement.style.fontSize = "30px";
// }

// Gắn sự kiện bằng Addeventlistener
// Cú pháp 1:
// element.addEventListener("click", myFunction);

// function myFunction() {
//   console.log("Hello word")
// }

// Cú pháp 2:
// element.addEventListener("click", function() {
//   console.log("Hello word")
// });

// Cú pháp 1
// btnChange.addEventListener("click", handleClick);
// function handleClick() {
//   console.log("Hello word");
// }

// Cú pháp 2
// btnChange.addEventListener("click", function () {
//   console.log("Hello World 2");
// });

// 5. Thêm và xóa các phần tử trong HTML
// 5.1 Thêm phần tử trong HTML
let parents = document.getElementById("parent");
let content = document.getElementById("content");
let btnChange = document.getElementById("change");
// console.log(parents, content, btnChange);

// Tạo mới 1 thẻ div
let div = document.createElement("div");
// console.log(div);
div.setAttribute("class", "demo-add");
div.innerText = "Hello Đức Anh";
parents.appendChild(div);

// let divElement = document.getElementsByClassName("demo-add");
// console.log(divElement[0]);
// Xóa phần tử trong HTML
// element.remove()
// divElement[0].remove();

// Xóa với removeChild()
// e.removeChild(child)
// parents.removeChild(btnChange);

// ParentElement và Children
// console.log(content.parentElement);
// console.log(content.children);
console.log(parents.children[0].children[2].children);
