import{
    Ball
} from './ball.js' ;

import{
    Block
} from './block.js' ;

export class App{

    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
        this.block = new Block(700, 30, 300 ,450);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;

        this.ctx.scale(2,2); 
        /*
        컨텍스트에 x축, y축 방향으로 크기조정(확대·축소)을 적용하는 함수 
        https://zetawiki.com/wiki/HTML5_%EC%BA%94%EB%B2%84%EC%8A%A4_scale()
        */
    }

    animate(t){
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0 ,this.stageWidth, this.stageHeight);

        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
        this.block.draw(this.ctx);
    }
}

window.onload =() =>{
    new App();
}