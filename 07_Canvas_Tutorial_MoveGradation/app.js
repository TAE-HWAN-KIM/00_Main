import{
    GlowParticle
}from './glowparticle.js';

const COLOR= [
        {r:45,  g:74,   b:227   }, // blue
        {r:250, g:255,  b:89    }, // yellow
        {r:255, g:104,  b:248   }, // pupple
        {r:44,  g:209,  b:252   }, // skyblue
        {r:54,  g:233,  b:84    }, // green
]

export class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');   
        document.body.appendChild(this.canvas);

        this.pixelRatio = window.devicePixelRatio > 1 ? 2: 1 ; // 무슨 용도의 사용법일까?

        this.totalParticles = 20;
        this.particles = [];
        this.maxRadius = 900;
        this.minRadius = 400;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio ;
        this.canvas.height = this.stageHeight * this.pixelRatio ;

        this.ctx.scale(this.pixelRatio,this.pixelRatio);     

        //this.ctx.globalCompositeOperation = 'saturation';
        this.ctx.globalCompositeOperation = 'destination-over';
        /**
         * 새로 그리는 도형은 언제나 이미 그려진 도형의 위에 그려지는데
         * 대부분의 상황에서는 이렇게 하는 것이 적절하지만, 
         * 도형을 합성하기 위한 순서를 제한하게 되는데,  
         * globalCompositeOperation을 이용하여 속성을 설정
         * https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Compositing
         */

        this.creatParticles();
    }

    creatParticles(){
        let  curColor = 0;
        this.particles = [];

        for (let i = 0; i < this.totalParticles; i++) {
            const glowItem = new GlowParticle(
                Math.random()  * this.stageWidth,
                Math.random()  * this.stageHeight,
                Math.random()  * (this.maxRadius- this.minRadius) + this.minRadius,
                COLOR[curColor]
            );

            if(++curColor >= COLOR.length)
                curColor= 0;

            this.particles[i] = glowItem;
        }
    }

    animate(){                
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0, this.stageWidth, this.stageHeight);
        
        const len = this.totalParticles;        
        for (let i = 0; i < len; i++) {
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
    }
}

window.onload =() =>{
    new App();
}

