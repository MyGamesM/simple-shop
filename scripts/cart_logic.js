const buttons = Array.from(document.getElementsByClassName("display-buy-button"))
const kb_button = document.getElementById("cart-kb-count")
const uwu_button = document.getElementById("cart-uwu-count")
const clear_button = document.getElementById("cart-button-clear")

const cart_items = {
	0: 0,
	1: 0
}

const item_dict = {
	0: {
		"name": "Wooting 60HE",
		"price": 150
	},
	1: {
		"name": "Wooting uwu",
		"price": 50
	}
}

clear_button.onclick = () => { clear_cart() }

buttons.forEach((button, i) => {
	button.onclick = () => { add_item_to_cart(i) }
})

function add_item_to_cart(id) {
	cart_items[id] += 1
	update_cart()
}

function update_cart() {
	cart_items[0] > 0 
	? kb_button.style.opacity = 1 
	: kb_button.style.opacity = 0

	cart_items[1] > 0 
	? uwu_button.style.opacity = 1 
	: uwu_button.style.opacity = 0

	kb_button.innerText = `${item_dict[0]["name"]}: ${cart_items[0]} | ${item_dict[0]["price"] * cart_items[0]}€`
	uwu_button.innerText = `${item_dict[1]["name"]}: ${cart_items[1]} | ${item_dict[1]["price"] * cart_items[1]}€`
}

function clear_cart() {
	cart_items[0] = 0
	cart_items[1] = 0
	update_cart()
}