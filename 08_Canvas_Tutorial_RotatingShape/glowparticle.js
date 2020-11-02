const PI2 = Math.PI * 2;

export class GlowParticle {
    constructor(x, y, radius, rgb) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rgb = rgb;

        this.vx = Math.random() * 4;
        this.vy = Math.random() * 4

        this.sinValue = Math.random();
    }

    animate(ctx, stageWidth, stageHeight) {
        this.sinValue += 0.1;

        this.radius += Math.sin(this.sinValue);

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) {
            this.vx *= -1;
            this.x += 10;
        } else if (this.x > stageWidth) {
            this.vx *= -1;
            this.x -= 10;
        }

        if (this.y < 0) {
            this.vy *= -1;
            this.x += 10;
        } else if (this.y > stageHeight) {
            this.vy *= -1;
            this.x -= 10;
        }

        ctx.beginPath();
        const g = ctx.createRadialGradient(this.x, this.y, this.radius * .01, this.x, this.y, this.radius);
        g.addColorStop(0, 'rgba(' + this.rgb.r + ', ' + this.rgb.g + ', ' + this.rgb.b + ', 1)');
        g.addColorStop(1, 'rgba(' + this.rgb.r + ', ' + this.rgb.g + ', ' + this.rgb.b + ', 0)');
        /**
         * 도형의 배경에 그라데이선 지정
         * https://m.blog.naver.com/PostView.nhn?blogId=javaking75&logNo=140170247715&proxyReferer=https%3A%2F%2Fwww.google.com%2F
         * createRadialGradient( x1, y1, 첫번째 원의 반지름 r1, x2, y2, 두번째 원의 반지름 r2 ) 
         * 
         * 색상의 분기점을 설정
         * addColorStop
         *  */


        //ctx.fillStyle = 'rgba(' + this.rgb.r + ', ' + this.rgb.g + ', ' + this.rgb.b + ', 1)';
        ctx.fillStyle = g;
        ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
        ctx.fill();
    }
}
