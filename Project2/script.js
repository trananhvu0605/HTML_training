const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'red'

function draw(x, y) {
    const circle = new Path2D();
    circle.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill(circle)
}
let isMouseDown = false;
canvas.addEventListener('mousedown', (e) => {
    isMouseDown = true;
})
canvas.addEventListener('mouseup', (e) => {
    isMouseDown = false;
    console.log('mouseup')
})
canvas.addEventListener('mousemove', (e) => {
    if (!isMouseDown) {
        return
    }
    const {
        clientX,
        clientY
    } = e
    const react = canvas.getBoundingClientRect()
    draw(clientX - react.left, clientY - react.top)
})

const colorPickers = [...document.querySelectorAll('.color-picker')]
colorPickers.forEach(colorPickers => {
    colorPickers.addEventListener('click', (e) => {
        ctx.fillStyle = e.target.style.backgroundColor
    })
})
document.getElementById("btn_clear").addEventListener('click', (e) => {
    ctx.clearRect(0, 0, 700, 700)
})