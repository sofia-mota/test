input.onButtonPressed(Button.A, function () {
    basic.showString("Hello! world")
    basic.showIcon(IconNames.Target)
})
basic.showNumber(123)
basic.forever(function () {
    basic.showString("...")
})
