input.onButtonPressed(Button.A, function () {
    radio.sendValue("A", 0)
    radio.sendValue("B", 1)
})
input.onButtonPressed(Button.B, function () {
	
})
radio.onReceivedValue(function (name, value) {
    count += 1
    if (name == "A") {
        handA = value
    } else {
        handB = value
    }
    if (count >= 2) {
        basic.showString("A")
        basic.showNumber(handA)
        basic.showString("B")
        basic.showNumber(handB)
        count = 0
    }
})
let count = 0
let handB = 0
let handA = 0
radio.setGroup(1)
handA = 0
handB = 0
count = 0
