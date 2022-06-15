basic.forever(function () {
    if (input.lightLevel() > 128) {
        basic.showString("woa")
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.House)
        basic.showIcon(IconNames.Tortoise)
    }
})
