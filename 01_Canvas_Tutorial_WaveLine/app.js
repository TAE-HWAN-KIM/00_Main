 import{
    WaveGroup
} from './waveGroup.js';

export class App {
    constructor(){ /* 생성자 함수를 다시 정의 하는 용도로 쓸 수 있다 */
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.waveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this)); 
        /* 모니터 주사율에 따른 에니메이션구현에 사용하는 비동기 함수 
        * https://blog.eunsatio.io/develop/JavaScript-window.requestAnimationFrame-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC 
        * https://webisfree.com/2020-03-19/[%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8]-requestanimationframe()%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EB%B0%8F-%EC%98%88%EC%A0%9C
        * */
    } 

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeigth = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeigth * 2;
        this.ctx.scale(2 , 2);

        this.waveGroup.resize(this.stageWidth, this.stageHeigth);
    }

    animate(t){
        this.ctx.clearRect(0,0, this.stageWidth, this.stageHeigth);

        this.waveGroup.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload =() => {
    new App();
};