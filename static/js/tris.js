let grid = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
]

let cells = document.querySelectorAll(".button")
let isXwritten = false
let xPlayer = document.getElementById("x")
let oPlayer = document.getElementById("o")
let resetBtn = document.getElementById("resetBtn")
let thereIsWinner = false

xPlayer.classList.add("img-oversize")

function checkForVictory() {
	for (let i = 0; i < 3; i++) {
        if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
            return grid[i][0]
        }
    }

    for (let i = 0; i < 3; i++) {
        if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
            return grid[0][i]
        }
    }
    
    if (grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) {
        return grid[0][0]
    }
    if (grid[0][2] === grid[1][1] && grid[1][1] === grid[2][0]) {
        return grid[0][2]
    }
}

resetBtn.addEventListener("click", () => {
	window.location.reload(true)
})


cells.forEach(cell => cell.addEventListener("click", (e) => {
	let target = e.currentTarget
	let row = parseInt(target.getAttribute("data-row")) - 1
	let cell = parseInt(target.getAttribute("data-cell")) - 1
	if (!thereIsWinner) {
		if (isXwritten) {
			xPlayer.classList.add("img-oversize")
			oPlayer.classList.remove("img-oversize")
		} else {
			xPlayer.classList.remove("img-oversize")
			oPlayer.classList.add("img-oversize")
		}

		if (!grid[row][cell]) {
			if (!isXwritten) {
				isXwritten = true
				target.style.backgroundImage = "url(static/img/caramelos-breaking-bad-removebg-preview.png)"
				grid[row][cell] = "X"
			} else {
				isXwritten = false
				target.style.backgroundImage = "url(static/img/antigas-removebg-preview.png)"
				grid[row][cell] = "O"
			}

			if (checkForVictory() == "X") {
				document.getElementById("winner").style.display = "flex"
				document.getElementById("winner-image").style.backgroundImage = "url(static/img/caramelos-breaking-bad-removebg-preview.png)"
				thereIsWinner = true
			} else if (checkForVictory() == "O") {
				document.getElementById("winner").style.display = "flex"
				document.getElementById("winner-image").style.backgroundImage = "url(static/img/antigas-removebg-preview.png)"
				thereIsWinner = true
			}
		} else {
			alert("Cell Occupied")
		}
	}
	

}))