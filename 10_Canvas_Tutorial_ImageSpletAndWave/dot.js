const PI2 = Math.PI * 2;
const BOUNCE = 0.82;

export class Dot {
    constructor(x, y, radius, pixelSize, red, green, blue) {
        this.x = x;
        this.y = y;
        this.targetRadius = radius
        this.radius = 0;
        this.radiusV = 0;
        this.pixelSize = pixelSize;
        this.pixelSizeHalf = pixelSize / 2;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    animate(ctx) {
        {
            //배경을 검은색으로 변환하는로직
            ctx.beginPath();
            ctx.fillStyle = '#000';
            ctx.fillRect(
                this.x - this.pixelSizeHalf,
                this.y - this.pixelSizeHalf,
                this.pixelSize, this.pixelSize
            );
        }

        // 위아래로 출렁이는 효과를 주기위하여 만들어진 변수.
        // 계산값에 의하여 되어있음으로 임의로 변경시 이상하게동작할수 있음
        const accel = (this.targetRadius - this.radius) / 2
        this.radiusV += accel;
        this.radiusV *= BOUNCE;
        this.radius += this.radiusV

        ctx.beginPath();
        ctx.fillStyle = 'rgb(' + this.red + ',' + this.green + ', ' + this.blue + ')';
        ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
        ctx.fill();
    }

    reset() {
        this.radius = 0;
        this.radiusV = 0;
    }
}
