export class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);

        ///this.video = document.querySelector('.myVideo');        
        this.video = document.createElement('Video');
        this.video.classList.add('myVideo');
        //this.buttons = document.querySelector('.buttons');       
        this.buttons = document.createElement('div');
        this.buttons.classList.add('buttons');

        this.buttonR = document.createElement('button');
        this.buttonR.textContent = 'R';
        this.buttonR.setAttribute('data-color', 'R');
        this.buttonG = document.createElement('button');
        this.buttonG.textContent = 'G';
        this.buttonG.setAttribute('data-color', 'G');
        this.buttonB = document.createElement('button');
        this.buttonB.textContent = 'B';
        this.buttonB.setAttribute('data-color', 'B');
        this.buttonClear = document.createElement('button');
        this.buttonClear.textContent = 'Clear';
        this.buttonClear.setAttribute('data-color', '');

        this.buttons.appendChild(this.buttonR);
        this.buttons.appendChild(this.buttonG);
        this.buttons.appendChild(this.buttonB);
        this.buttons.appendChild(this.buttonClear);

        document.body.append(this.buttons);

        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(1, 1);
        this.video.src = './06_Canvas_Tutorial_VideoCanvasScroll/test.mp4';
        this.video.play();

        this.canPlay = false;
        this.ctx.textAlign = 'center';
        this.selectColerValue = '';

        //window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        //this.ctx.fillText('비디오 로딩중 .... ', 300, 200);

        this.video.addEventListener('canplaythrough', this.render.bind(this));

        this.buttons.addEventListener('click', this.selectColor.bind(this));

        document.body.addEventListener('DOMMouseScroll', this.scroll.bind(this));
        document.body.addEventListener('mousewheel', this.scroll.bind(this));
        // document.body.onmousewheel=(e)=>{console.log(e)};
    }

    selectColor(e) {
        this.selectColerValue = e.target.getAttribute('data-color')
    }

    scroll(e) {
        if (e.wheelDeltaY && this.video.currentTime + ((e.wheelDeltaY) * -1 / 1000) > 0) {
            if (this.video.paused == true)
                this.video.play();

            this.video.currentTime += (e.wheelDeltaY * -1 / 1000);

            if (this.video.paused != true)
                this.video.pause();
        } else { //파이어폭스 전용
            if (this.video.paused == true)
                this.video.play();

            this.video.currentTime += (e.detail / 10);

            if (this.video.paused != true)
                this.video.pause();

        }
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;

        this.ctx.scale(1, 1);
        /*
        컨텍스트에 x축, y축 방향으로 크기조정(확대·축소)을 적용하는 함수 
        https://zetawiki.com/wiki/HTML5_%EC%BA%94%EB%B2%84%EC%8A%A4_scale()
        */
    }

    render() {
        //console.log(this.video.currentTime);
        this.ctx.drawImage(this.video, 0, 0, 600, 400);

        if (this.selectColerValue) {
            let thisImage = this.ctx.getImageData(0, 0, 600, 400);
            const len = thisImage.data.length;
            for (let i = 0; i < len; i++) {
                switch (this.selectColerValue) {
                    case 'R':
                        thisImage.data[i * 4 + 0] = 255;
                        break;
                    case 'G':
                        thisImage.data[i * 4 + 1] = 255;
                        break;
                    case 'B':
                        thisImage.data[i * 4 + 2] = 255;
                        break;
                }
            }
            this.ctx.putImageData(thisImage, 0, 0);
        }
        requestAnimationFrame(this.render.bind(this));
    }
}

window.onload = () => {
    new App();
}
