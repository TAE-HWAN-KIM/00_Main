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

        this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15, "#fdd700");
        this.ball2 = new Ball(this.stageWidth, this.stageHeight, 60, 15, "#0dd700");
        this.block1 = new Block(300, 30, 300 ,450);
        this.block2 = new Block(200, 30, 800 ,450);

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

        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, [this.block1, this.block2]);
        this.ball2.draw(this.ctx, this.stageWidth, this.stageHeight, [this.block1, this.block2]);

        this.block1.draw(this.ctx);
        this.block2.draw(this.ctx);

        this.blockedBalls([this.ball, this.ball2]);
    }

    blockedBalls(balls){
        const checker = [];        

        for(let i = 0 ; i < balls.length; i++){
            const thisBall = {};
            thisBall.minX = Math.round(balls[i].x - balls[i].radius)
            thisBall.maxX = Math.round(balls[i].x + balls[i].radius)
            thisBall.minY = Math.round(balls[i].y - balls[i].radius)
            thisBall.maxY = Math.round(balls[i].y + balls[i].radius)
            checker[i] = thisBall;            
        }

        /*if((checker[0].maxX >= checker[1].minX)  || (checker[1].maxX >= checker[0].minX)){
            if(checker[0].maxY <= checker[1].minY || checker[0].maxY <= checker[1].minY){
                for(let i = 0 ; i < balls.length; i++){
                    balls[i].vx *= -1;
                    balls[i].x += balls[i].vx;    
                    balls[i].vy *= -1;
                    balls[i].y += balls[i].vy;          
                }   
            }
        }*/
            
        /*
        else if((checker[0].maxX <= checker[1].minX) && checker[0].maxY <= checker[1].minY){
            console.log(2)
            for(let i = 0 ; i < balls.length; i++){
                balls[i].vx *= -1;
                balls[i].x += balls[i].vx;
                balls[i].vy *= -1;
                balls[i].y += balls[i].vy;
            }
        }
        else if((checker[0].maxX <= checker[1].minX) && checker[0].maxY >= checker[1].minY){
            console.log(3)
            for(let i = 0 ; i < balls.length; i++){
                balls[i].vx *= -1;
                balls[i].x += balls[i].vx;
                balls[i].vy *= -1;
                balls[i].y += balls[i].vy;
            }
        }
        else if((checker[0].maxX >= checker[1].minX) && checker[0].maxY <= checker[1].minY){
            console.log(4)
            for(let i = 0 ; i < balls.length; i++){
                balls[i].vx *= -1;
                balls[i].x += balls[i].vx;
                balls[i].vy *= -1;
                balls[i].y += balls[i].vy;
            }
        }
        */
    }
}

window.onload =() =>{
    new App();
}