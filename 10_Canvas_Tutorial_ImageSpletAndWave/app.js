  import {
      Ripple
  } from './ripple.js';
  import {
      Dot
  } from './dot.js';
  import {
      collide
  } from './util.js';


  export class App {
      constructor() {
          /* 생성자 함수를 다시 정의 하는 용도로 쓸 수 있다 */
          this.canvas = document.createElement('canvas');
          this.ctx = this.canvas.getContext('2d');
          document.body.appendChild(this.canvas);

          this.tmpCanvas = document.createElement('canvas');
          this.tmpCtx = this.tmpCanvas.getContext('2d');

          this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

          this.ripple = new Ripple();

          window.addEventListener('resize', this.resize.bind(this), false);
          this.resize();

          this.radius = 12;
          this.pixelSize = 30;
          this.dots = [];

          this.isLoaded = false;
          this.imgPos = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
          };

          this.image = new Image();          
          this.image.src = './10_Canvas_Tutorial_ImageSpletAndWave/test2.jpg';          
          this.image.onload = () => {
              this.isLoaded = true;
              this.drawImage();
          };

          this.canvas.addEventListener('click', this.onClick.bind(this), false);
      }

      resize() {
          this.stageWidth = document.body.clientWidth;
          this.stageHeigth = document.body.clientHeight;

          this.canvas.width = this.stageWidth * this.pixelRatio;
          this.canvas.height = this.stageHeigth * this.pixelRatio;
          //this.ctx.scale(this.pixelRatio, this.pixelRatio);
          this.ctx.scale(this.pixelRatio, this.pixelRatio);

          this.tmpCanvas.width = this.stageWidth * this.pixelRatio;
          this.tmpCanvas.height = this.stageHeigth * this.pixelRatio;

          this.ripple.resize(this.stageWidth, this.stageHeigth);

          if (this.isLoaded) {
              this.drawImage();
          }

          window.requestAnimationFrame(this.animate.bind(this));
      }

      onClick(e) {
          this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeigth);
          const len = this.dots.length;
          for (let i = 0; i < len; i++) {
              this.dots[i].reset();              
          }

          this.ctx.drawImage(
              this.image,
              0, 0,
              this.image.width, this.image.height,
              this.imgPos.x, this.imgPos.y,
              this.imgPos.width, this.imgPos.height
          );

          this.ripple.start(e.offsetX, e.offsetY);
      }

      animate(t) {
          requestAnimationFrame(this.animate.bind(this));
          //this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeigth);
          this.ripple.animate();

          const len = this.dots.length;
          for (let i = 0; i < len; i++) {
              const dot = this.dots[i];
              // 반지름보다 안에 있는 좌표이므로 점으로 변환.
              if (collide(dot.x, dot.y, this.ripple.x, this.ripple.y, this.ripple.radius)) {
                  dot.animate(this.ctx);
              }
          }
      }

      drawImage() {
          const stageRatio = this.stageWidth / this.stageHeigth;
          const imageRatio = this.image.width / this.image.height;

          this.imgPos.width = this.stageWidth;
          this.imgPos.height = this.stageHeigth;

          if (imageRatio > stageRatio) {
              this.imgPos.width = Math.round(
                  this.image.width * (this.stageHeigth / this.image.height)
              );
              this.imgPos.x = Math.round(
                  (this.stageWidth - this.imgPos.width) / 2
              );
          } else {
              this.imgPos.height = Math.round(
                  this.image.height * (this.stageWidth / this.image.width)
              );
              this.imgPos.y = Math.round(
                  (this.stageHeigth - this.imgPos.height) / 2
              );
          }

          this.ctx.drawImage(
              this.image,
              0, 0,
              this.image.width, this.image.height,
              this.imgPos.x, this.imgPos.y,
              this.imgPos.width, this.imgPos.height
          );

          this.tmpCtx.drawImage(
              this.image,
              0, 0,
              this.image.width, this.image.height,
              this.imgPos.x, this.imgPos.y,
              this.imgPos.width, this.imgPos.height
          );

          this.imageData = this.tmpCtx.getImageData(0, 0, this.stageWidth, this.stageHeigth);

          this.drawDots();
      }

      drawDots() {
          this.dots = [];
          // Math.floor() : 소수점 이하를 버림한다.
          // Math.ceil() : 소수점 이하를 올림한다.
          // Math.round() : 소수점 이하를 반올림한다.          
          const columns = Math.ceil(this.stageWidth / this.pixelSize);
          const rows = Math.ceil(this.stageHeigth / this.pixelSize);
          for (let i = 0; i < rows; i++) {
              const y = (i + 0.5) * this.pixelSize;
              const pixelY = Math.max(Math.min(y, this.stageHeigth), 0); //이거 왜 구해?
              for (let j = 0; j < columns; j++) {
                  const x = (j + 0.5) * this.pixelSize;
                  const pixelX = Math.max(Math.min(x, this.stageWidth), 0); //이거 왜 구해?
                  const pixelIndex = (pixelX + pixelY * this.stageWidth) * 4 // this.stageWidth이거 왜 곱해??
                  const red = this.imageData.data[pixelIndex + 0];
                  const green = this.imageData.data[pixelIndex + 1];
                  const blue = this.imageData.data[pixelIndex + 2];
                  const dot = new Dot(
                      x, y,
                      this.radius,
                      this.pixelSize,
                      red, green, blue
                  );
                  this.dots.push(dot);
              }
          }
      }
  }

  window.onload = () => {
      new App();
  };