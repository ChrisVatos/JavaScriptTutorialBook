const outputClass = document.querySelector(".output");
const mainList = document.querySelector("ul");
mainList.id = "mainList";
const elements = document.querySelectorAll("div");

for(let i = 0; i < elements.length; i++) {
    elements[i].id = "id" + i;

    if(i % 2 === 0) {
        elements[i].style.color = "red";
    } else {
        elements[i].style.color = "blue";
    }
}

console.log(elements);

