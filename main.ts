input.onButtonPressed(Button.A, function () {
    robotbit.MotorStopAll()
    robotbit.MotorRun(robotbit.Motors.M1A, 255)
})
input.onButtonPressed(Button.AB, function () {
    robotbit.MotorStopAll()
})
input.onButtonPressed(Button.B, function () {
    robotbit.MotorStopAll()
    robotbit.MotorRun(robotbit.Motors.M1A, -144)
})
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
