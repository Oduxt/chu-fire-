function jaune () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
input.onButtonPressed(Button.A, function () {
    PIETON = 1
})
function non_pieton () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function pieton () {
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function rouge () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
let PIETON = 0
PIETON = 0
basic.forever(function () {
    while (PIETON != 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        vert()
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        jaune()
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        rouge()
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
basic.forever(function () {
    while (PIETON == 1) {
        pieton()
    }
})
