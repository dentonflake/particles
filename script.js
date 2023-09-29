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

// CALLING LOOP FUNCTION
loop()

// EVENT LISTENERS
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