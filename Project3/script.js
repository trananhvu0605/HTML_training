const items = [{
        name: 'Pizza 001',
        price: 7.9,
        quantity: 1
    },
    {
        name: 'Pizza 002',
        price: 7.9,
        quantity: 1
    },
    {
        name: 'Pizza 003',
        price: 7.9,
        quantity: 1
    },

]

const SHIPPING = 2

function add() {
    items.push({
        name: `Pizza ${Math.random().toFixed(2)} `,
        quantity: 1,
        price: Math.random() * 10
    })
    render()
}

function remove(index) {
    items.splice(index, 1)
    render()
}

function updateQuantity(index, quantity) {
    if (quantity < 1) {
        return
    }
    items[index].quantity = quantity
    render()
}

function render() {
    let subTotal = 0;
    items.forEach(item => {
        subTotal += item.quantity * item.price
    })
    const total = subTotal + SHIPPING;

    const html = items.map(item => ` <li class="order-item">
    <span class="name">${item.name}</span>
    <span class="quantity">
        <button name="dec">-</button>
        <input type="number" class="quantity" value="${item.quantity}"/>
        <button name="inc">+</button>
    </span>

    <span class="price">
        <span>${(item.quantity * item.price).toFixed(2)}</span>
    <button name="delete" class="btn-delete">x</button>
    </span>
</li>`).join('')
    document.getElementById('order-items').innerHTML = html

    const delButtons = [...document.getElementsByName('delete')]
    const decButtons = [...document.getElementsByName('dec')]
    const incButtons = [...document.getElementsByName('inc')]

    for (let i = 0; i < delButtons.length; i++) {
        delButtons[i].addEventListener('click', () => {
            remove(i);
        })
        incButtons[i].addEventListener('click', () => {
            updateQuantity(i, items[i].quantity + 1)
        })
        decButtons[i].addEventListener('click', () => {
            updateQuantity(i, items[i].quantity - 1)
        })
    }

    document.getElementById('sub-total').innerText = subTotal.toFixed(2)
    document.getElementById('shipping').innerText = SHIPPING
    document.getElementById('total').innerText = total.toFixed(2)

}


document.getElementById('btn-add').addEventListener('click', () => {
    add()
})
render()