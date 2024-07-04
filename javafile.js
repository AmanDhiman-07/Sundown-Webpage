const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
        console.log(image);
    })
})

var elemc = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image")
elemc.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
})