radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 23) {
        basic.showIcon(IconNames.Heart)
    } else if (receivedNumber == 21) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Sword)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(23)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(21)
})
radio.setGroup(23)
basic.forever(function () {
	
})
