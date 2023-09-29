// CANVAS OBJECT
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

// MOUSE OBJECT
let mouse = new Mouse();

// LOOP FUNCTION
function loop() {
    canvas.rect(
        canvas.collider,
        new Color(0, 0, 0)
    )

    if (mouse.active) {
        mouse.particles.push(
            new Particle(
                new Circle(
                    new Vector2D(
                        mouse.pos.x,
                        mouse.pos.y
                    ),
                    3
                ),
                new Vector2D(
                    Math.random() * 1 - 0.5,
                    Math.random() * 1 - 0.5
                ),
                100
            )
        )
    }

    for (let particle of mouse.particles) {
        particle.tick()
    }

    mouse.tick();

    requestAnimationFrame(loop)
}

// CALLING LOOP FUNCTION
loop()

// EVENT LISTENERS
addEventListener('mousedown', (event) => {
    mouse.active = true
})

addEventListener('mousemove', (event) => {
    mouse.pos = new Vector2D(
        event.clientX,
        event.clientY
    )
})

addEventListener('mouseup', (event) => {
    mouse.active = false
})