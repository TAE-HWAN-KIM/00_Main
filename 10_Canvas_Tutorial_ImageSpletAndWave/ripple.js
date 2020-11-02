import {
    distance
} from "./util.js";

/**
 * 원형으로 퍼지는 원을 그리는 객체였으나
 * 원형으로 퍼지는 효과를 주는 객체로 사용
 */
export class Ripple {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.radius = 0;
        this.maxRadius = 0;
        this.speed = 10;
    }

    resize(stateWidth, stageHeight) {
        this.stateWidth = stateWidth;
        this.stageHeight = stageHeight;
    }

    start(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = this.getMax(x, y);
    }

    animate() {
        if (this.radius < this.maxRadius) {
            this.radius += this.speed;
        }

        // ctx.beginPath();

        // ctx.fillStyle = 'transparent';
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.fill();
    }

    getMax(x, y) {
        const c1 = distance(0, 0, x, y);
        const c2 = distance(this.stateWidth, 0, x, y);
        const c3 = distance(0, this.stageHeight, x, y);
        const c4 = distance(this.stateWidth, this.stageHeight, x, y);
        return Math.max(c1, c2, c3, c4);
    }
}
