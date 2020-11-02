const PI2 = Math.PI * 2;

export class Shape {
    constructor(x, y, radius, sides) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.rotate = 0;
    }

    //animate(ctx, rotateSpeed){
    animate(ctx, moveX) {
        ctx.save();
        ctx.fillStyle = '#000';
        ctx.beginPath();

        const angle = PI2 / this.sides;

        ctx.translate(this.x, this.y);

        this.rotate -= moveX * 0.08;

        //this.rotate += moveX;
        //this.rotate += rotateSpeed;

        //ctx.rotate(this.rotate * Math.PI / 180);
        ctx.rotate(this.rotate);
        for (let i = 0; i < this.sides; i++) {
            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);
            i == 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}