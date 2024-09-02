
const colors = ["Green", "Yellow", "Red", "Violet", "Blue", "Gray", "Purple", "Aqua", "Magenta"]
const btn = document.getElementById('btn')


let i;
btn.addEventListener('click', function(){
    randomColor = colors[Math.round(Math.random(i)*colors.length)]
    document.body.style.background = randomColor
    document.getElementById('color').innerHTML = randomColor
})