let input = document.getElementById("input");
let characters = document.querySelector(".text");
let btn = document.querySelector(".btn");
let feedback = document.querySelector(".feedback");
let listNumber = document.querySelector(".listNumber");
let numberList = listNumber.querySelectorAll(".number");
console.log(numberList); // chọn tất cả các phần tử có class 'number' và lưu vào mảng
let number = 0;
listNumber.onclick = function (e) {

    
  if (e.target.classList.contains("number")) {
    
  }
};
btn.onclick = function (e) {
  e.preventDefault();
  if (input.value.length < 5) {
    characters.style.display = "block";
  } else {
    characters.style.display = "none";
    let reply = `<div class="box-feedback">
    <div class="reply"><b class="content">${input.value}</b><b class="icon"><i class="fa-regular fa-share-from-square"></i><i class="fa-sharp fa-solid fa-xmark"></i></b></div>
    <div class="box"></div>
</div>`;
    feedback.innerHTML += reply; // sử dụng phương thức innerHTML để thêm HTML vào
  }
};
