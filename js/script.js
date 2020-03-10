let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart"),
    wrapper = document.querySelector(".wrapper");

box.style.backgroundColor = "blue";
btn[1].style.borderRadius = "100%";
circle[0].style.backgroundColor = "red";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "green";

/* for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = "Blue";
} */

heart.forEach(function(item, i, oHearts) {
    item.style.backgroundColor = "blue";
});

let div = document.createElement("button"),
    text = document.createTextNode("Тут был Вася!");
div.classList.add("black");

/* document.body.appendChild(div);
wrapper.appendChild(div); // Добавление в конец элемента */


/* div.innerHTML = "<b>Hello VOVA!</b>"; */
div.textContent = "Hello Vova";

document.body.insertBefore(div, circle[1]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);
document.body.replaceChild(btn[1], circle[1]);

console.log(div);
console.log(text);

/* console.log (box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);
console.log(heart);
console.log(oneHeart);
 */