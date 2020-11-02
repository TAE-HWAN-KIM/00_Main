import{
    Ball
} from './ball.js' ;

export class App{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canDraw = false;
        this.canvas.addEventListener('mousedown', this.downHandler.bind(this));
        this.canvas.addEventListener('mousemove', this.moveHandler.bind(this));
        this.canvas.addEventListener('mouseup', this.upHandler.bind(this));

        this.selectColor = "black";
        //this.buttons = document.querySelector('.buttons');
        this.buttons = document.createElement('div');
        this.buttons.classList.add('buttons')        
        
        
        document.body.appendChild(this.buttons)        
        
        this.button1 = document.createElement('button');
        this.button1.textContent = 'black';
        this.button1.setAttribute('data-color', 'black');

        this.button2 = document.createElement('button');
        this.button2.textContent = 'yellow';
        this.button2.setAttribute('data-color', 'yellow');

        this.button3 = document.createElement('button');
        this.button3.textContent = 'red';
        this.button3.setAttribute('data-color', 'red');

        this.button4 = document.createElement('button');
        this.button4.textContent = 'sandybrown';
        this.button4.setAttribute('data-color', 'sandybrown');

        this.buttonClear = document.createElement('button');
        this.buttonClear.textContent = 'Clear';
        this.buttonClear.setAttribute('data-color', 'clear');

        this.buttons.appendChild(this.button1);
        this.buttons.appendChild(this.button2);
        this.buttons.appendChild(this.button3);
        this.buttons.appendChild(this.button4);
        this.buttons.appendChild(this.buttonClear);

        this.buttons.addEventListener('click', this.setColor.bind(this)); 

        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.ball = new Ball(5, "#fdd700");              
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

    downHandler(){
        this.canDraw =true;
    }

    moveHandler(e){
        if(this.canDraw)
            this.ball.draw(this.ctx, e.offsetX, e.offsetY);  
    }
    
     upHandler(){
        this.canDraw = false;      
    }

    setColor(e){
        if(e.target){
            if(e.target.getAttribute('data-color') == 'clear'){
                this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
                return;   
            }
            
            this.selectColor = e.target.getAttribute('data-color')
            this.ctx.fillStyle = this.selectColor;
        }
    }
}

window.onload =() =>{
    new App();
}
