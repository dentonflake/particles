class Mouse {
    constructor() {
        this.active = false
        this.pos = new Vector2D(0, 0)
        this.particles = []
    }

    tick() {
        for (let i = 0; i < this.particles.length; i++) {
            if (this.particles[i].life <= 0) {
                this.particles.splice(0, 1)
            }

        }
    }
}