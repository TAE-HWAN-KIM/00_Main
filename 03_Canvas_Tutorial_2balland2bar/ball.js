export class Ball{
    constructor(stageWidth, stageHeight, radius, speed, color){
            this.radius = radius; // 반지름 
            this.vx = speed; // 속도
            this.vy = speed; // 속도
            this.color = color;

            const diameter = this.radius * 2; 

            this.x = diameter + (Math.random() * stageWidth - diameter);
            this.y = diameter + (Math.random() * stageHeight - diameter);
    }

    draw(ctx, stageWidth, stageHeight, blocks){
        this.x += this.vx;
        this.y += this.vy

        this.bounceWindow(stageWidth, stageHeight);

        this.bouncBlock(blocks);

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI); // 왜 2를 곱하는가?
        ctx.fill();
    }

    bounceWindow(stageWidth, stageHeight){
        const minX = this.radius;
        const MaxX = stageWidth - this.radius;

        const minY = this.radius;
        const MaxY = stageHeight - this.radius;

        if(this.x <= minX || this.x >= MaxX){
            this.vx *= -1;
            this.x += this.vx;
        }

        if(this.y <= minY || this.y >= MaxY){
            this.vy *= -1;
            this.y += this.vy;
        }
    }

    bouncBlock(blocks){
        for(let i  = 0; i < blocks.length; i++){
            const block = blocks[i];

            const minX = block.x - this.radius;
            const maxX = block.maxX + this.radius;
            const minY = block.y - this.radius;
            const maxY = block.maxY + this.radius;
    
            if(this.x > minX && this.x < maxX && this.y > minY && this.y < maxY){
                const x1 = Math.abs(minX - this.x);
                const x2 = Math.abs(this.x  - maxX);
                const y1 = Math.abs(minY - this.y);
                const y2 = Math.abs(this.y  - maxY);
    
                const min1 = Math.min(x1, x2);
                const min2 = Math.min(y1, y2);
    
                const min = Math.min(min1, min2);
    
                if(min == min1){
                    this.vx *= -1;
                    this.x += this.vx;
                }
                else if (min == min2){
                    this.vy *= -1;
                    this.y += this.vy;
                }            
            }
        }
    }
}
