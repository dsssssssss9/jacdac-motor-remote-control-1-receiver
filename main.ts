radio.onReceivedNumber(function (receivedNumber) {
    Number2 = receivedNumber
    basic.showNumber(Number2)
})
input.onButtonPressed(Button.A, function () {
    robotbit.MotorStopAll()
    robotbit.MotorRun(robotbit.Motors.M1A, 255)
})
input.onButtonPressed(Button.AB, function () {
    robotbit.MotorStopAll()
})
radio.onReceivedString(function (receivedString) {
    String2 = receivedString
    basic.showString(String2)
})
input.onButtonPressed(Button.B, function () {
    robotbit.MotorStopAll()
    robotbit.MotorRun(robotbit.Motors.M1A, -144)
})
radio.onReceivedValue(function (name, value) {
    Speed = value
    basic.showNumber(Speed)
})
let Speed = 0
let String2 = ""
let Number2 = 0
Number2 = 0
robotbit.MotorStopAll()
radio.setGroup(42)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.showIcon(IconNames.Yes)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
strip.show()
basic.pause(200)
strip.clear()
strip.show()
basic.forever(function () {
	
})
