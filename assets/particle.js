class Particle {
    constructor(collider, velocity, color) {
        this.collider = collider
        this.velocity = velocity
        this.color = color
    }

    draw() {
        canvas.circle(
            this.collider,
            this.color
        )
    }

    move() {
        this.collider.pos.x += this.velocity.x
        this.collider.pos.y += this.velocity.y
    }
}