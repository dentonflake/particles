class Particle {
    constructor(collider, velocity, life) {
        this.collider = collider
        this.velocity = velocity
        this.color
        this.life = life
    }

    tick() {
        this.color = new Color(
            this.collider.pos.x / canvas.collider.width * 255,
            this.collider.pos.y / canvas.collider.height * 255,
            100,
            this.life / 100
        )

        this.draw()
        this.connect()
        this.move()

        this.life -= 1;
    }

    connect() {
        for (let particle of mouse.particles) {
            let a = this.collider.pos.x - particle.collider.pos.x;
            let b = this.collider.pos.y - particle.collider.pos.y;
            let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

            let test = this.color;
            test.alpha = 100 / c / 100;

            if (c <= 100) {
                canvas.line(this.collider.pos, particle.collider.pos, test, 5);
            }
        }
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