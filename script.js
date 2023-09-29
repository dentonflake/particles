// Canvas object
let canvas = new Canvas(
    {
        // Rectangle collider
        collider: new Rect(
            new Vector2D(
                0, // X position
                0 // Y position
            ),
            innerWidth, // Width
            innerHeight // Height
        )
    }
)

let mouse = new Vector2D(0, 0)

function loop() {
    // Drawing the canvas
    canvas.rect(
        canvas.collider, // Rectangle collider
        new Color(25, 25, 25) // Color rgb(RED [0-255], GREEN [0-255], BLUE [0-255])
    )

    requestAnimationFrame(loop)
}

loop()

addEventListener('mousemove', (event) => {
    mouse.pos = {
        x: event.clientX,
        y: event.clientY
    }
})