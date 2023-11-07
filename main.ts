let hi_ha = 10
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < hi_ha) {
        cuteBot.turnleft()
    } else {
        cuteBot.motors(50, 55)
    }
})
