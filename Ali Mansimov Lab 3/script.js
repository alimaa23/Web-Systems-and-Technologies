let yO = document.querySelector(".y span");
let wO = document.querySelector(".w span");

document.querySelector("#btn").addEventListener('click', function (e) {
    a = parseFloat(document.querySelector("#a").value);
    b = parseFloat(document.querySelector("#b").value);
    x = parseFloat(document.querySelector("#x").value);

    y = Math.log(Math.E,(a+Math.pow(x,2))) + Math.pow(Math.sin(x/b),2);
    w = w = (1/Math.pow(Math.E,x)) * (x+Math.sqrt(x+a)) * Math.sqrt(y) / (x - Math.sqrt(Math.abs(x-b)));
    yO.textContent = y;
    wO.textContent = w;

    e.preventDefault();
})



let h = Math.pow(4, 2);
h = Math.sqrt(16);




 