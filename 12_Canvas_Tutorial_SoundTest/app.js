  export class App {
      constructor() {
          this.textInput = document.createElement('input');
          this.textInput.setAttribute('type', 'text');
          document.body.appendChild(this.textInput);
          this.selectButton = document.createElement('button');
          //this.selectButton.setAttribute('type', '');
          this.selectButton.innerText = 'Play this url'
          document.body.appendChild(this.selectButton);
          this.selectButton.addEventListener('click', this.selectUrlPlay.bind(this));
          /* 생성자 함수를 다시 정의 하는 용도로 쓸 수 있다 */
          this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

          this.canvas = document.createElement('canvas');
          this.ctx = this.canvas.getContext('2d');
          this.audio = document.createElement('audio');
          this.audio.crossOrigin = "anonymous"
          //this.audio.src = './Kygo_feat_Conrad_Firestone.mp3';
          //this.audio.src = './12_Canvas_Tutorial_SoundTest/Kygo_feat_Conrad_Firestone.mp3';
          this.audio.src = 'https://file.ssenhosting.com/data1/pb_24706/HYPBGMAlibi.mp3';

          this.audioCtx = new(window.AudioContext || window.webkitAudioContext)();
          this.source = this.audioCtx.createMediaElementSource(this.audio);
          this.audioDestination = this.audioCtx.destination;
          this.gainNode = this.audioCtx.createGain();
          this.audioAnalyser = this.audioCtx.createAnalyser();
          this.source.connect(this.gainNode).connect(this.audioDestination);
          this.source.connect(this.audioAnalyser);
          this.dataArray = new Uint8Array(this.audioAnalyser.frequencyBinCount);
          this.audioCtx.resume();

          this.rotateCount = 0;

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

      //중앙에서 퍼저나오는 음향
      //   animate(t) {
      //       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //       this.audioAnalyser.getByteFrequencyData(this.dataArray);
      //       const thisSound = this.dataArray;
      //       const len = thisSound.length;
      //       const stap = 800 / len;
      //       this.ctx.save();
      //       this.ctx.beginPath();
      //       this.ctx.fillStyle = '#000';
      //       this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);

      //       const rad_step = (Math.PI * 2) / len;
      //       const radius = 1;

      //       for (let i = 0; i < len; i++) {
      //           //this.ctx.moveTo(0, 0);
      //           const temp = thisSound[i];


      //           const soundX = thisSound[i] * Math.cos(rad_step * i);
      //           const arcx = radius * Math.cos(rad_step * i);
      //           const soundy = thisSound[i] * Math.sin(rad_step * i);
      //           const arcy = radius * Math.sin(rad_step * i);
      //           //i == 0 ? this.ctx.moveTo(arcx, arcy) : this.ctx.lineTo(soundX, soundy);
      //           //this.ctx.translate(arcx, arcy);
      //           this.ctx.lineTo(soundX, soundy);
      //       }
      //       this.ctx.closePath();
      //       this.ctx.fill();
      //       this.ctx.restore();          
      //       requestAnimationFrame(this.animate.bind(this));
      //   }

      //중앙에서 일정거리 떨어져 원을 만들고 그 외부에 그리는 형식
      animate(t) {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.audioAnalyser.getByteFrequencyData(this.dataArray);

          const thisSound = this.dataArray;
          const len = thisSound.length;
          const stap = 800 / len;
          const radius = 100;

          this.ctx.beginPath();
          this.ctx.save();
          this.ctx.lineWidth = 2;
          this.ctx.strokeStyle = 'green';
          this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);

          const rad_step = (Math.PI * 2) / len;
          this.ctx.rotate(this.rotateCount += 0.008);
          for (let i = 0; i < len; i++) {
              this.ctx.save();

              const temp = thisSound[i] + radius;
              const soundX = temp * Math.cos(rad_step * i);
              const arcx = radius * Math.cos(rad_step * i);
              const soundy = temp * Math.sin(rad_step * i);
              const arcy = radius * Math.sin(rad_step * i);
              //this.ctx.translate(arcx, arcy);
              //this.ctx.arc(soundX,soundy, 2, 0, Math.PI * 2, false);            
              this.ctx.lineTo(soundX, soundy);
              this.ctx.restore();
          }
          this.ctx.closePath();
          this.ctx.stroke();
          this.ctx.restore();
          requestAnimationFrame(this.animate.bind(this));
      }

      selectUrlPlay(){
          const url = this.textInput.value;

          if(url.trim().length == 0 ){
              alert('no Url');
              return;
          }
          this.audio.pause();
          this.audio.src = url;
          setTimeout(() => {
            this.audio.play();
          }, (1000));
        //   while (this.audio.played  != true) {
        //     if(this.audio.readyState == true){
                
        //     }
        //   }
      }
  }

  window.onload = () => {
      new App();
  };