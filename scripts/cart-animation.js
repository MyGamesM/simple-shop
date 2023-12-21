const cart_button = document.getElementById("cart")
const cart_ui = document.getElementById("cart-ui")

cart_button.addEventListener("click", () => {
	if (cart_ui.classList.contains("play-cart-animation")) {
		cart_ui.classList.remove("play-cart-animation")
		cart_ui.classList.add("play-cart-animation-reverse")
	} else if (cart_ui.classList.contains("play-cart-animation-reverse")) {
		cart_ui.classList.remove("play-cart-animation-reverse")
		cart_ui.classList.add("play-cart-animation")
	} else {
		cart_ui.classList.add("play-cart-animation")
	}
})