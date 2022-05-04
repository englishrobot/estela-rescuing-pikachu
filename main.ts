namespace SpriteKind {
    export const coins = SpriteKind.create()
    export const malo = SpriteKind.create()
    export const compañero = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - ultimo_disparo > 500) {
        projectile = sprites.createProjectileFromSprite(img`
            . 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 
            2 2 f f f f 2 2 
            f f f 1 1 f f f 
            f f f 1 1 f f f 
            1 1 f f f f 1 1 
            1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 . 
            `, Ash, 70, -70)
        projectile.ay = 250
        ultimo_disparo = game.runtime()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coins, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(5)
    music.baDing.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ash.isHittingTile(CollisionDirection.Bottom)) {
        Ash.vy = -150
    }
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    changeLevel(true)
})
function changeLevel (pasado: boolean) {
    if (pasado) {
        EsteNivel += 1
    }
    if (EsteNivel == 1) {
        scene.setTileMap(img`
            ........................e..........e........................
            ........................e..........e........................
            ........................e........5.e........................
            ........................e....777...e......5................a
            ........................e......e...e......2..........5..5.77
            ........................e77.5..e...e.....7777..........2....
            ........................e......e.5.e....7.........5.777777..
            ........................e777775e...e...7.1..................
            ........................e...5..e1..e..7.......5..777........
            ........................e577777e...e........................
            ........................e...5..e.5.e7777...5.7777...........
            ...5....5.....5....5....e777775e1...........................
            3.2...1....1....1....1......5..e..2.......777...............
            77777...77...77...77...77777777e777777777...................
            eeeeefffeefffeefffeefffeeeeeeeeeeeeeeeeeefffffffffffffffffff
            `, TileScale.Eight)
    } else if (EsteNivel == 2) {
        scene.setTileMap(img`
            ...................................................5........
            ............................................................
            ..........................................1.......777.......
            3...............5.......5..........5...........777e.e77.2..a
            ................2...1.......5...........77777..........77777
            ...............7777...7777........777..5.5.5................
            ...........................77...............................
            .............................7.5.......77777................
            1.......................1.................5..7..............
            ...........................77777...5..........2.............
            ......1..............5.be..........2...5.7777777............
            ....5.5.5.......5..5..bbe..5.1...77777....5.................
            ......2......1....2..bbbe.......7.....7.....................
            ...77777777....777777777e..77777.......777777...............
            fffeeeeeeeeffffeeeeeeeeeefffffffffffffffffffffffffffffffffff
            `, TileScale.Eight)
    } else if (EsteNivel == 3) {
        scene.setTileMap(img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            .............................222222222......................
            ......................5..77.77777777777111..................
            ......................777..............111..................
            ..................5.77......77777777777111..................
            ................5.77........77777777777111..................
            ...5..........5.77............................555555........
            3.5.5.......5.77..............................555555.8......
            777777.7777.77................................77777777777777
            eeeeeefeeeeffffffffffffff777777fffff77777777ffeeeeeeeeeeeeee
            `, TileScale.Eight)
        crearPikachu()
    } else {
        game.over(true)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scene.setTile(7, img`
        7 3 7 7 7 7 7 6 
        9 5 9 7 7 7 7 7 
        7 3 7 7 7 7 7 7 
        e 7 7 7 e 7 7 e 
        e e 6 e e e 6 e 
        e e e e e e e e 
        b e e e e e e b 
        e e e e b e e e 
        `, true)
    scene.setTile(14, img`
        e e e e b e e e 
        e b e e e e e b 
        e e e e e e e e 
        e e e e b e e e 
        e e e e e e e e 
        e e e e e e e e 
        e e b e e e b e 
        e e e e e e e e 
        `, true)
    scene.setTile(15, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, true)
    scene.setTile(3, img`
        . c c c c c c c 
        . c e e e e f c 
        . c e e e e f c 
        . c e e e e f c 
        . c e e e 5 f c 
        . c e e e e f c 
        . c e e e e f c 
        . c e e e e f c 
        `, false)
    scene.setTile(10, img`
        c c c c c c c . 
        c f e e e e c . 
        c f e e e e c . 
        c f e e e e c . 
        c f 5 e e e c . 
        c f e e e e c . 
        c f e e e e c . 
        c f e e e e c . 
        `, true)
    scene.setTile(5, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(1, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(11, img`
        b b b b b b b b 
        b 5 b b b b b b 
        b b b e b 5 b b 
        b b b b b b b b 
        b b d b b b e b 
        b b b b 5 b b b 
        b 5 b b b b d b 
        b b b b b b b b 
        `, true)
    scene.setTile(2, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, false)
    scene.placeOnRandomTile(Ash, 3)
    sprites.destroyAllSpritesOfKind(SpriteKind.coins)
    for (let value of scene.getTilesByType(5)) {
        Coin = sprites.create(img`
            . . 5 5 5 . . . 
            . 5 4 4 4 5 . . 
            5 5 4 5 4 5 5 . 
            5 5 4 5 4 5 5 . 
            5 5 4 5 4 5 5 . 
            5 5 4 5 4 5 5 . 
            . 5 4 4 4 5 . . 
            . . 5 5 5 . . . 
            `, SpriteKind.coins)
        animation.runImageAnimation(
        Coin,
        [img`
            . . 5 5 5 . . . 
            . 5 4 4 4 5 . . 
            5 5 4 5 4 5 5 . 
            5 5 4 5 4 5 5 . 
            5 5 4 5 4 5 5 . 
            5 5 4 5 4 5 5 . 
            . 5 4 4 4 5 . . 
            . . 5 5 5 . . . 
            `,img`
            . . 5 5 5 . . . 
            . 5 4 4 4 5 . . 
            . 5 4 5 4 5 . . 
            . 5 4 5 4 5 . . 
            . 5 4 5 4 5 . . 
            . 5 4 5 4 5 . . 
            . 5 4 4 4 5 . . 
            . . 5 5 5 . . . 
            `,img`
            . . . 5 . . . . 
            . . . 5 . . . . 
            . . . 5 . . . . 
            . . . 5 . . . . 
            . . . 5 . . . . 
            . . . 5 . . . . 
            . . . 5 . . . . 
            . . . 5 . . . . 
            `,img`
            . . 5 5 5 . . . 
            . 5 4 4 4 5 . . 
            . 5 4 5 4 5 . . 
            . 5 4 5 4 5 . . 
            . 5 4 5 4 5 . . 
            . 5 4 5 4 5 . . 
            . 5 4 4 4 5 . . 
            . . 5 5 5 . . . 
            `,img`
            . . 5 5 5 . . . 
            . 5 4 4 4 5 . . 
            5 5 4 5 4 5 5 . 
            5 5 4 5 4 5 5 . 
            5 5 4 5 4 5 5 . 
            5 5 4 5 4 5 5 . 
            . 5 4 4 4 5 . . 
            . . 5 5 5 . . . 
            `],
        100,
        true
        )
        scene.place(value, Coin)
    }
    createVoltorb()
    crearDito()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.malo, function (sprite, otherSprite) {
    otherSprite.destroy(effects.blizzard, 500)
    sprite.destroy()
})
function crearDito () {
    sprites.destroyAllSpritesOfKind(SpriteKind.malo)
    for (let value2 of scene.getTilesByType(2)) {
        Dito = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . b . . . . b . 
            . b . b b . b . 
            . . f b f b . . 
            . b b b b b b b 
            b b f f f b b b 
            b b b b b b b b 
            `, SpriteKind.malo)
        scene.place(value2, Dito)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.malo, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y) {
        sprite.vy = -150
        otherSprite.destroy(effects.fire, 500)
        music.bigCrash.play()
    } else {
        changeLevel(false)
        info.setScore(0)
    }
})
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    changeLevel(false)
    info.setScore(0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.compañero, function (sprite, otherSprite) {
    controller.moveSprite(Ash, 0, 0)
    Ash.vx = -100
    pause(200)
    Ash.vx = 0
    Ash.sayText("¡¡PIKACHU!!", 1000, false)
    pause(1000)
    Pikachu.sayText("¡¡pikaaaa!!", 1000, false)
    pause(1000)
    changeLevel(true)
})
function createVoltorb () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    for (let value3 of scene.getTilesByType(1)) {
        Voltorb = sprites.create(img`
            2 f 2 2 2 2 f 2 
            2 2 f 2 2 f 2 2 
            2 f 2 2 2 2 f 2 
            2 2 2 2 2 2 2 2 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            `, SpriteKind.Enemy)
        scene.place(value3, Voltorb)
        animation.runImageAnimation(
        Voltorb,
        [img`
            2 f 2 2 2 f 2 2 
            2 2 f 2 f 2 2 2 
            2 f 2 2 2 f 2 2 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            `,img`
            2 f 2 2 2 f 2 2 
            2 2 f 2 f 2 2 2 
            2 f 2 2 2 f 2 2 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            `,img`
            2 f 2 2 2 f 2 2 
            2 2 f 2 f 2 2 2 
            2 f 2 2 2 f 2 2 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            `,img`
            2 f 2 2 2 f 2 2 
            2 2 f 2 f 2 2 2 
            2 f 2 2 2 f 2 2 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            `,img`
            2 f 2 2 2 f 2 2 
            2 2 f 2 f 2 2 2 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 
            `],
        300,
        true
        )
        animation.runMovementAnimation(
        Voltorb,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.blizzard, 500)
    sprite.destroy()
})
function crearPikachu () {
    scene.setTile(8, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, false)
    Pikachu = sprites.create(img`
        . f . 5 5 
        5 5 . e . 
        2 5 5 . . 
        . 5 5 . . 
        5 . . 5 . 
        `, SpriteKind.compañero)
    scene.placeOnRandomTile(Pikachu, 8)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y) {
        sprite.vy = -150
        otherSprite.destroy(effects.fire, 500)
        music.bigCrash.play()
    } else {
        changeLevel(false)
        info.setScore(0)
    }
})
let Voltorb: Sprite = null
let Pikachu: Sprite = null
let Dito: Sprite = null
let Coin: Sprite = null
let projectile: Sprite = null
let ultimo_disparo = 0
let EsteNivel = 0
let Ash: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................555555555.......................................................................................................................................
    ..............5555555555555.....................................................................................................................................
    .............555555555555555....................................................................................................................................
    ............55555555555555555...................................................................................................................................
    ...........5555555555555555555.................................................................................111..............................................
    ...........5555555555555555555................................................................................11111111..........................................
    ..........555555555555555555555...............................................................................111111111.........................................
    ..........555555555555555555555.................................1111..............................11111......11111111111........................................
    ..........555555555555555555555.......................11......1111111..........................1111111111...111111111111........................................
    ..........555555555555555555555.....................1111111...11111111........................1111111111111.111111111111........................................
    ..........555555555555555555555...................11111111111.111111111.......................1111111111111111111111111.........................................
    ..........555555555555555555555...................111111111111111111111111....................11111111111111111111111111111111..................................
    ..........555555555555555555555...................11111111111111111111111111..................11111111111111111111111111111111111...............................
    ..........555555555555555555555...................111111111111111111111111111.................11111111111111111111111111111111111...............................
    ..........555555555555555555555....................11111111111111111111111111..................1111111111111111111111111111111111...............................
    ...........5555555555555555555.....................11111111111111111111111111..................11111111111111111111111111111111111..............................
    ...........5555555555555555555......................1111111111111111111111111..................11111111111111111111111111111111111..............................
    ............55555555555555555........................11111111111111111111111....................111111111111111111111111111111111...............................
    .............555555555555555.........................11111111111111111111111.....................11111111111111111111111111111111...............................
    ..............5555555555555............................11111111111111111111......................1111111111111111111111111111111................................
    ................555555555.........................................................................11111111111111111111111111111.................................
    ...................................................................................................11111111111111111111111111...................................
    ....................................................................................................111111111111111111111111....................................
    .....................................................................................................111111111111111111111......................................
    .....................................................................................................1111111111111111111........................................
    ................................................................................................................111111..........................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................ddddbb..........................................................................................................................................
    .............ddddddddbbb........................................................................................................................................
    ...........dddddddddddbb........................................................................................................................................
    .........dddddddddddddbbb.......................................................................................................................................
    ........ddddddddddddddbbb............................................................................................................................ddddddbbb..
    .......dddddddddddddddbbb.........................................................................................................................ddddddddddbbb.
    ......ddddddddddddddddbbbb.......................................................................................................................dddddddddddbbbb
    ......ddddddddddddddddbbbb......................................................................................................................ddddddddddddbbbb
    .....dddddddddddddddddbbbb................................................dddddddddddddbbbbbbbbbb..............................................ddddddddddddddbbb
    .....dddddddddddddddddbbbb..............................................ddddddddddddddddbbbbbbbbbbbbbb........................................dddddddddddddddbbb
    ....ddddddddddddddddddbbbb............................................ddddddddddddddddddbbbbbbbbbbbbbbbbb....................................ddddddddddddddddbbb
    ....ddddddddddddddddddbbbbb..........................................dddddddddddddddddddbbbbbbbbbbbbbbbbbbb..................................ddddddddddddddddbbb
    ...dddddddddddddddddddbbbbb.........................................ddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb...............................ddddddddddddddddddbb
    ..ddddddddddddddddddddbbbbb.......................................dddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb.............................dddddddddddddddddddbb
    .dddddddddddddddddddddbbbbb......................................ddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbb............................ddddddddddddddddddddb
    .ddddddddddddddddddddbbbbbb.....................................ddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb...........................dddddddddddddddddddddb
    .ddddddddddddddddddddbbbbbb....................................dddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb..........................dddddddddddddddddddddd
    dddddddddddddddddddddbbbbbb....................................dddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb.........................ddddddddddddddddddddddd
    dddddddddddddddddddddbbbbbbb..................................dddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbb.........................ddddddddddddddddddddddd
    dddddddddddddddddddddbbbbbbb.................................ddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbb.........................ddddddddddddddddddddddd
    dddddddddddddddddddddbbbbbbb................................dddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbb........................ddddddddddddddddddddddd
    ddddddddddddddddddddddbbbbbb................................dddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbb.......................dddddddddddddddddddddddd
    ddddddddddddddddddddddbbbbbbb..............................dddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbb......................ddddddddddddddddddddddddd
    ddddddddddddddddddddddbbbbbbb.............................ddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbb.....................ddddddddddddddddddddddddd
    ddddddddddddddddddddddbbbbbbbb............................dddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbb....................dddddddddddddddddddddddddd
    dddddddddddddddddddddddbbbbbbb..........................ddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbb....................dddddddddddddddddddddddddd
    dddddddddddddddddddddddbbbbbbbb.......................ddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbb..................ddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbbbbbb...................ddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbb................dddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbbbbbbbb.............bbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbb................dddddddddddddddddddddddddddd
    dddddddddddddddddddddddddbbbbbbbbbbb.......bbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbb..............bdddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbb............bbbddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbb..........bbbbbddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb...bbbbbbbbdddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddd
    ddddddddddddddddccccdddddddddddddbbbbbbbbbbbbbbbbbbbbdddddddddddd66666666666686666666666666ddddddddddddcccccccbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddd
    ddddddddddddccccccccccccdddddddddddbbbbbbbbbbbbbbbbbbbddddddddddd66666666666686666666666666ddddddddddccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddd
    ddddddddddcccccccccccccccddddddddddddbbbbbbbbbbbbbccccccccccccddd66666666666686666666666666dddddddddcccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddd
    ddddddddccccccccccccccccccddddddddddddbbbbbbbbbccccccccccccccccdd66666666666686666666666666dddddddccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddd
    dddddddccccccccccccccccccccccdddddddddddbbbbbcccccccccccccccccccd66666666666686666666666666ddddddcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddd
    ddddddccccccccccccccccccccccccdddddddddddbbbccccccccccccccccccccd66666666666686666666666666dddddccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddd
    ddddccccccccccccccccccccccccccddddddddddddbcccccccccccccccccccccc66666666666686666666666666ddddccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddd
    ddddccccccccccccccccccccccccccccdddddddddcccccccccccccccccccccccc66666666666686666666666666dddccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddd
    dddccccccccccccccccccccccccccccccddddddcccccccccccccccccccccccccc66666666666686666666666666ddcccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddd
    ddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666666666686666666666666cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddd
    ddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc88888888888888888888888888ccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddd
    dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddd
    cccccccccccccccccccccccccc22ccccccccccccccccccccccccccccccccccccc66666666666686666666666666cccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbddddddcccdddddddddddd
    ccccccccccccccccccccccccc2222cccccccccccccccccccccccccccccccccccc66666666666686666666666666cccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbdddcccccdddddddddddd
    cccccccccccccccccccccccc222222ccccccccccccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbddccccccdddddddddddd
    ccccccccccccccccccccccc22222222cccccccccccccccccccccccccccccccccc66666666666686666666666666cccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccddddddddddd
    cccccccccccccccccccccc2222222222ccccccccccccccccccccccccccccccccc66666666666686666666666666cccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbccccccccccddddddddddd
    ccccccccccccccccccccc222222222222cccccccccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbccccccccccccccddddddddd
    cccccccccccccccccccc22222222222222ccccccccccccccccccccccccccccccc66666666666686666666666666cccccccccccccccccccccccccccccbbbbbbbbbbbbbbbccccccccccccccccddddddddd
    ccccccccccccccccccc2222222222222222cccccccccccccccccccccccccccccc66666666666686666666666666cccccccccccccccccccccccccccccbbbbbbbbbbbbbccccccccccccccccccddddddddc
    cccccccccccccccccc222222222222222222ccccccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccbbbbbbbbbbcccccccccccccccccccccddddddcc
    ccccccccccccccccc22222222222222222222cccccccccccccccccccccccccccc66666666666686666666666666cccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccccccddddccc
    cccccccccccccccc2222222222222222222222ccccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc222222222222222222222222cccccccccccccccccccccccccc88888888888888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc111111111111111111111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc111111111111111111111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc111111111111111111111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc111111111111111111111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc111111111111111111111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc111111111111111111111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc111666111111111111111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc111666111111111111111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc111666111111111111111111cccccccccccccccccccccccccc88888888888888888888888888ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc111111111111111111111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc1111111111eeeeee11111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc1111111111eeeeee11111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc1111111111eeeeee11111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc1111111111eeeefe11111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc1111111111eeeeee11111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc1111111111eeeeee11111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc1111111111eeeeee11111111cccccccccccccccccccccccccc66666666666686666666666666ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
Ash = sprites.create(img`
    . 2 2 1 
    . d d . 
    d 8 8 d 
    . 8 8 . 
    e . . e 
    `, SpriteKind.Player)
Ash.ay = 500
controller.moveSprite(Ash, 50, 0)
Ash.setStayInScreen(true)
scene.cameraFollowSprite(Ash)
EsteNivel = 0
changeLevel(true)
forever(function () {
    for (let value4 of sprites.allOfKind(SpriteKind.malo)) {
        value4.vx = -10
    }
    pause(1000)
    for (let value5 of sprites.allOfKind(SpriteKind.malo)) {
        value5.vx = 10
    }
    pause(1000)
})
