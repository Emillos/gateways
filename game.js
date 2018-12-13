Crafty.init(500,500, document.querySelector('#game'));

Crafty.background('#584e4e');

let player = Crafty.e("2D, Color, Canvas, Twoway, Gravity, Collision, player");
    player.attr({
        x: 0,
        y: 100,
        w: 30,
        h: 30
    })
    .color('white')
    .gravity('platfrom')
    .twoway(300,340)


Crafty.e("2D, Color, Canvas, platfrom")
    .attr({
        x: 0,
        y: 480,
        w: 500,
        h: 20
    })
    .color('black')

var portalOne = Crafty.e('2D, Canvas, Color, Collision, portalOne');
portalOne.attr({
    x: 400,
    y: 380,
    w: 10,
    h: 55
})
.checkHits('player')
.color('blue')
.bind('HitOn', () => {
    player.attr({
        x: portalTwo.x + 30,
        y: portalTwo.y,
    })
    portalOne.y = 400 - (Math.random() * 100 );
})

var portalTwo = Crafty.e('2D, Canvas, Color, Collision, player');
portalTwo.attr({
    x: 20,
    y: 425,
    w: 10,
    h: 55
})
.checkHits('player')
.color('orange')
.bind('HitOn', () => {
    player.attr({
        x: portalOne.x - 30,
        y: portalOne.y
    });
    portalTwo.y = 400 - (Math.random() * 100 );
})

