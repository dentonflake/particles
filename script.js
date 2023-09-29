let canvas = new Canvas(
    {
        collider: new Rect(
            new Vector2D(
                0,
                0
            ),
            innerWidth,
            innerHeight
        )
    }
)

let mouse = new Mouse();

// loop
function loop() {
    canvas.rect(
        canvas.collider,
        new Color(25, 25, 25)
    )

    if (mouse.active) {
        mouse.particles.push(
            new Particle(
                new Circle(
                    mouse.pos,
                    10
                ),
                new Vector2D(0, 0),
                new Color(100, 100, 255)
            )
        )
    }

    requestAnimationFrame(loop)
}

loop()

// event listeners
addEventListener('mousedown', (event) => {
    mouse.active = true
})

addEventListener('mousemove', (event) => {
    mouse.pos = {
        x: event.clientX,
        y: event.clientY
    }
})

addEventListener('mouseup', (event) => {
    mouse.active = false
})