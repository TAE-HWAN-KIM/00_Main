export class Ball{
    constructor(radius, color){
            this.radius = radius; // 반지름 
            this.color = color;            
    }

    draw(ctx, x, y){
        //this.color = color;        
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI); // 왜 2를 곱하는가?
        ctx.fill();
    }
}
