  export class App {
      constructor() {
          /* 생성자 함수를 다시 정의 하는 용도로 쓸 수 있다 */
          this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

          this.canvas = document.createElement('canvas');
          this.ctx = this.canvas.getContext('2d');
          //this.audio = new Audio('./Kygo_feat_Conrad_Firestone.mp3');
          this.audio = new Audio('./12_Canvas_Tutorial_SoundTest/Kygo_feat_Conrad_Firestone.mp3');

          this.audioCtx = new(window.AudioContext || window.webkitAudioContext)();
          this.source = this.audioCtx.createMediaElementSource(this.audio);
          this.audioDestination = this.audioCtx.destination;
          this.gainNode = this.audioCtx.createGain();
          this.audioAnalyser = this.audioCtx.createAnalyser();
          this.source.connect(this.gainNode).connect(this.audioDestination);
          this.source.connect(this.audioAnalyser);
          this.dataArray = new Uint8Array(this.audioAnalyser.frequencyBinCount);
          this.audioCtx.resume();

          // document.createElement('audio');
          //this.audio.classList.add('myAudio');
          //this.audio.setAttribute('controls', '');

          this.nowAudio = '';

          //this.audio.src = './Kygo_feat_Conrad_Firestone.mp3';
          //this.audio.src = './12_Canvas_Tutorial_SoundTest/Kygo_feat_Conrad_Firestone.mp3';
          this.audio.play();
          document.body.appendChild(this.canvas);

          window.addEventListener('resize', this.resize.bind(this), false);
          this.resize();

          requestAnimationFrame(this.animate.bind(this));

          //   this.audio.ontimeupdate = (e) => {
          //     console.log(e)
          //   }
      }

      resize() {
          this.stageWidth = document.body.clientWidth;
          this.stageHeigth = document.body.clientHeight;

          this.canvas.width = this.stageWidth * this.pixelRatio;
          this.canvas.height = this.stageHeigth * this.pixelRatio;

          this.ctx.scale(this.pixelRatio, this.pixelRatio);
      }

      animate(t) {
            this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
          this.audioAnalyser.getByteFrequencyData(this.dataArray);
          const thisSound = this.dataArray;
          const len = thisSound.length;
          const stap = 800 / len;
          this.ctx.beginPath();
          this.ctx.fillStyle = '#000';          
          this.ctx.moveTo(0, this.canvas.height)
          //this.ctx.moveTo(this.canvas.width/2, this.canvas.height/2)
          for (let i = 0; i < len; i++) {
              const temp = thisSound[i];
              const x = i * stap;
              const y = this.dataArray[i];
              
              //this.ctx.arc(x,y, y,  0, Math.PI * 2 , false);
              this.ctx.lineTo(x,y);              
          }
          this.ctx.lineTo(0, 0);
          //this.ctx.lineTo(this.canvas.width, this.canvas.height);
          this.ctx.closePath();
          this.ctx.fill();

          // this.ctx.drawImage(this.audio, 0, 0, this.canvas.width, this.canvas.height);          
          requestAnimationFrame(this.animate.bind(this));
      }
  }

  window.onload = () => {
      new App();
  };