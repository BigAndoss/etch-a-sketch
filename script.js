const btn = document.getElementById("start")

let pixels;
btn.addEventListener("click", () =>{
    pixels = prompt("Enter Pixel Number (Max 100)")
    canvas(pixels);
} )

const container = document.querySelector('.container');

const box = document.querySelector(".box")
let color = box.id
console.log(color)

const canvas = (pixels) =>{
    for(let i =0; i<pixels*pixels; i++){
        const a = document.createElement('div')
        a.className = "boxy"
        a.style.width= 1000/pixels+"px"
        a.style.height= 1000/pixels+"px"
        a.addEventListener('mouseover', ()=>{
            a.style.backgroundColor=color
        })
        container.appendChild(a)
    }
}

function colorPicker (c){
    color = c
}
let w = document.querySelectorAll('.boxy')
w.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = color;
    });
}
