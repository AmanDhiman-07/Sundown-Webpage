// var bulb = document.querySelector("#bulb")
// var btn = document.querySelector("button")
// var man = 0
// btn.addEventListener("click", function () {
//     if (man == 0){
//         bulb.style.backgroundColor = "red"
//         console.log("clioced");
//         man = 1 // this is true 
//     }else {
//         bulb.style.backgroundColor = "transparent"
//         console.log(" again clioced");
//         man = 0 // this is false 
//     }
// })

// let heading = document.querySelector("h1");
// console.dir(heading.innerText);
// heading.innerHTML = heading.innerText + "from apan collage";

let divs = document.querySelectorAll(".box")
// div[0].innerText = "aman"
// div[1].innerText = "dhiman"
// div[2].innerText = "mannu"
let idx = 1;
for(div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}