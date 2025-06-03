const container = document.querySelector(".container") // Выбираем контейнер
let lastScrollPosition = 0
let totalScrollDistance = 0
let scale = 0

window.addEventListener("scroll", () => {
	const cards = document.querySelectorAll(".card")
	let cardsArr = [...cards]

	const currentScrollPosition = window.scrollY || window.pageYOffset

	// Вычисляем, сколько пикселей пролистано с последнего события
	const scrollDelta = Math.floor(
		Math.abs(currentScrollPosition - lastScrollPosition)
	)
	totalScrollDistance += scrollDelta

	// Обновляем отображение
	console.log(scrollDelta)
	// Обновляем последнюю позицию
	lastScrollPosition = currentScrollPosition

	scale = scrollDelta + scale

	cardsArr[cardsArr.length - 1].classList.add("last")

	cardsArr[cardsArr.length - 1].setAttribute(
		"style",
		`transform: scale(${scale + 100}%) translateY(140px)
		`
	)

	if (scale >= 150) {
		scale = 0
		cardsArr[cardsArr.length - 1].classList.remove("last")
		cardsArr[cardsArr.length - 1].setAttribute(
			"style",
			`transform: scale(100%)`
		)
		container.insertBefore(cardsArr[cardsArr.length - 1], cardsArr[0])
	}

	/* 	cardsArr.forEach((el, i) =>
		el.setAttribute("style", `transform: translateY(${i * 20}px)`)
	) */

	for (let index = 0; index < cardsArr.length - 1; index++) {
		cardsArr[index].setAttribute(
			"style",
			`transform: translateY(${index * 20}px)`
		)
	}
})
