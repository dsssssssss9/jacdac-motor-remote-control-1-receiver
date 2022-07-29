/**
 * Jacdac Motor Remote Control Receiver
 * 
 * This code uses a KittenBot RobotBit to control the speed & direction of a 3v DC motor connected to it 
 * 
 * Speed & direction are derived from values sent from a transmitter Micro:Bit
 * 
 * In this example the DC motor is connected to M!A on the RobotBit
 * 
 * The On-Board Neopixels are connected to PIN16
 */
// If received data = "Name" then set variable "Speed" to value of data 
// In this case the slider has value range  from 0 to 100 so this is mapped to 0 - 255 as that is whet the RobotBit Motor value range is  
radio.onReceivedValue(function (name, value) {
    if (name == "Speed") {
        Speed = Math.map(value, 0, 100, 0, 255)
    }
})
// Set Variable "Number" to number received from Transmitter
radio.onReceivedNumber(function (receivedNumber) {
    Number2 = receivedNumber
})
// on start do following...
// 
// set motor speed to 0
// stop motor
// 
// Set Radio Group
// 
// Initialise RobotBit On-Board Neopixels ( Pin16)
// 
// Display Tick on Micro:Bit & Flash Neopixels green to signify receiver is ready 
let Speed = 0
let Number2 = 0
Number2 = 0
robotbit.MotorStopAll()
radio.setGroup(42)
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
led.setBrightness(115)
basic.showString("R")
strip.showColor(neopixel.colors(NeoPixelColors.Green))
strip.show()
basic.pause(200)
strip.clear()
strip.show()
// set motor to rotate in direction based on number ( 1 is clockwise , -1 is anti-clockwise ) at speed determined by value received from transmitter. In this case a Slide Potentiometer
basic.forever(function () {
    robotbit.MotorRun(robotbit.Motors.M1A, Speed * Number2)
})
