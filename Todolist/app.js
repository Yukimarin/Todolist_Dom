let input = document.getElementById("input")
let btn = document.getElementById("button")
let updateBtn = document.getElementById("update-content")
let updateIndex = "";
btn.onclick = function () {
    // Lấy value từ ô input
    let value = input.value;

    // Tạo ra 1 thẻ li giống bên HTMl
    let li = document.createElement("li")
    li.classList.add("list-item")

    // Cho content của thẻ li = value thẻ input
    // C1
    li.innerHTML = `${value} 
        <div class = "btn-group">
            <button class = "delete-btn">Delete</button>
            <button class = "update-btn">Update</button>
        </div>
    `;

    // let delbtn = li.children[0];

    // delbtn.onclick = function () {
    //     delbtn.parentElement.remove();
    // }
    // Tạo button cho mỗi dòng mới (C2 Phần 2)
    // let delbtn = document.createElement("button")
    // delbtn.innerHTML = "Delete"
    // delbtn.classList.add("delete-btn")

    // li.appendChild(delbtn)
    // delbtn.onclick = function (){
    //     delbtn.parentElement.remove();
    // }


    // Gọi thẻ ul ra và append thẻ li có nội dung đó vào
    let ul = document.getElementById("list");
    let lis = ul.getElementsByTagName("li");

    lis[0]

    ul.appendChild(li);

    // Xóa nội dung ở ô input sau mỗi lần click
    input.value = "";
}

// Event delegation (ủy quyền sự kiện)
let list = document.getElementById("list")

// list.onclick = function (event){
//     if(event.target.classList.contains("delete-btn")){
//         event.target.parentElement.parentElement.remove()
//     }
// }

// Khi click vào thẻ li, gạch ngang chữ và đổi màu backgroudn 
// Khi click lần 2, chữ lại bthg và màu backgournd trở lại bthg

list.onclick = function (event){
    if(event.target.classList.contains("delete-btn")){
        event.target.parentElement.parentElement.remove()
    }
    if (event.target.classList.contains("list-item")){
    //     event.target.parentElement.remove()
    // }
    // if(event.target.classList.contains("list-item")){
    //     if (event.target.classList.contains("done")){
    //         event.target.classList.remove("done")
    //     } else {
    //         event.target.classList.add ("done")
    //     }
        event.target.classList.toggle("done");
    }

if (event.target.classList.contains("update-btn")){
    input.value = (event.target.parentElement.parentElement.innerText.replace("Delete Update", ""));
    // Ẩn nút click me
    button.style.display = "none"
    // Hiện nút update to
    updateBtn.style.display = "inline-block"

    // Lôi thằng li cha của thằng update vừa dc click
    let li = event.target.parentElement.parentElement

    // Lôi mảng li là con của thẻ ul ra
    let liList =
        event.target.parentElement.parentElement.parentElement.children

    // Tiến hành duyệt qua mảng li, so sánh thẻ li cha của thằng update với từng
    // phần tử có trong mảng li
    // Nếu tìm thấy --> gán lại giá trị updateIndex = i tại thời điểm đó trong vòng lặp
    for (let i = 0; i < liList.length; i++) {
        if (li === liList[i]) {
            updateIndex = i
        }
    }
}
}

updateBtn.onclick = function (){
list.children[updateIndex].innerHTML = `${input.value} 
<div class = "btn-group">
    <button class = "delete-btn">Delete</button>
    <button class = "update-btn">Update</button>
</div>
`;
// Ẩn nút update
updateBtn.style.display = "none"
// Hiện lại nút click me
btn.style.display = "inline-block"
// Xpas nội dung trước
input.value = "";
}