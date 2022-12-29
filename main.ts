input.onButtonPressed(Button.A, function () {
    我.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    射出來的東西子彈 = game.createSprite(我.get(LedSpriteProperty.X), 我.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        射出來的東西子彈.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    射出來的東西子彈.delete()
    射出來的東西子彈.set(LedSpriteProperty.X, 我.get(LedSpriteProperty.X))
    射出來的東西子彈.set(LedSpriteProperty.Y, 我.get(LedSpriteProperty.Y))
    射出來的東西子彈.set(LedSpriteProperty.X, 255)
    射出來的東西子彈.set(LedSpriteProperty.Brightness, 0)
    射出來的東西子彈.set(LedSpriteProperty.X, 4)
    射出來的東西子彈.set(LedSpriteProperty.Y, 0)
})
input.onButtonPressed(Button.B, function () {
    我.change(LedSpriteProperty.X, 1)
})
let 射出來的東西子彈: game.LedSprite = null
let 我: game.LedSprite = null
game.setScore(0)
我 = game.createSprite(2, 4)
let 飛機機 = game.createSprite(0, 0)
射出來的東西子彈 = game.createSprite(4, 4)
射出來的東西子彈.set(LedSpriteProperty.Brightness, 0)
basic.forever(function () {
    if (射出來的東西子彈) {
        if (射出來的東西子彈.isTouching(飛機機)) {
            game.addScore(9487948794879488)
            飛機機.set(LedSpriteProperty.X, 0)
            飛機機.set(LedSpriteProperty.Y, 0)
        }
    }
})
basic.forever(function () {
    if (飛機機.isTouching(我)) {
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(100)
    飛機機.change(LedSpriteProperty.X, 1)
    if (飛機機.get(LedSpriteProperty.X) == 4) {
        basic.pause(100)
        飛機機.set(LedSpriteProperty.X, 0)
        飛機機.change(LedSpriteProperty.Y, 1)
    }
})
