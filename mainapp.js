import {
    App as Canvas_Tutorial_WaveLine
} from './01_Canvas_Tutorial_WaveLine/app.js';

import {
    App as Canvas_Tutorial_ball
} from './02_Canvas_Tutorial_ball/app.js';

import {
    App as Canvas_Tutorial_2balland2bar
} from './03_Canvas_Tutorial_2balland2bar/app.js';

import {
    App as Canvas_Tutorial_DrawLine
} from './04_Canvas_Tutorial_DrawLine/app.js';

import {
    App as Canvas_Tutorial_VideoCanvas
} from './05_Canvas_Tutorial_VideoCanvas/app.js';

import {
    App as Canvas_Tutorial_VideoCanvasScroll
} from './06_Canvas_Tutorial_VideoCanvasScroll/app.js';

import {
    App as Canvas_Tutorial_MoveGradation
} from './07_Canvas_Tutorial_MoveGradation/app.js';

import {
    App as Canvas_Tutorial_RotatingShape
} from './08_Canvas_Tutorial_RotatingShape/app.js';

import {
    App as Canvas_Tutorial_ClickWaveLine
} from './09_Canvas_Tutorial_ClickWaveLine/app.js';

import {
    App as Canvas_Tutorial_ImageSpletAndWave
} from './10_Canvas_Tutorial_ImageSpletAndWave/app.js';

import {
    App as Canvas_Tutorial_VideoSpletAndWave
} from './11_Canvas_Tutorial_VideoSpletAndWave/app.js';


class MainApp {
    constructor() {
        this.buttonsCon = document.querySelector('.buttonsCon');
        this.buttonsCon.addEventListener('click', this.buttonClickEvent.bind(this));

        this.activeFdata = '';
        this.activeApp = null;
    }

    buttonClickEvent(e) {
        if (this.activeApp != null)
            this.activeApp = null;

        this.activeFdata = e.target.getAttribute('data-fdata')

        this.removeCanvas()
        switch (this.activeFdata) {
            case '01_Canvas_Tutorial_WaveLine':
                this.activeApp = new Canvas_Tutorial_WaveLine();
                break;

            case '02_Canvas_Tutorial_ball':
                this.activeApp = new Canvas_Tutorial_ball();
                break;

            case '03_Canvas_Tutorial_2balland2bar':
                this.activeApp = new Canvas_Tutorial_2balland2bar();
                break;

            case '04_Canvas_Tutorial_DrawLine':
                this.activeApp = new Canvas_Tutorial_DrawLine();
                break;

            case '05_Canvas_Tutorial_VideoCanvas':
                this.activeApp = new Canvas_Tutorial_VideoCanvas();
                break;

            case '06_Canvas_Tutorial_VideoCanvasScroll':
                this.activeApp = new Canvas_Tutorial_VideoCanvasScroll();
                break;

            case '07_Canvas_Tutorial_MoveGradation':
                this.activeApp = new Canvas_Tutorial_MoveGradation();
                break;

            case '08_Canvas_Tutorial_RotatingShape':
                this.activeApp = new Canvas_Tutorial_RotatingShape();
                break;

            case '09_Canvas_Tutorial_ClickWaveLine':
                this.activeApp = new Canvas_Tutorial_ClickWaveLine();
                break;

            case '10_Canvas_Tutorial_ImageSpletAndWave':
                this.activeApp = new Canvas_Tutorial_ImageSpletAndWave();
                break;

            case '11_Canvas_Tutorial_VideoSpletAndWave':
                this.activeApp = new Canvas_Tutorial_VideoSpletAndWave();
                break;

        }

        window.onload = '';
    }

    removeCanvas() {
        const removeCanvas = document.getElementsByTagName('canvas');

        for (let i = 0; i < removeCanvas.length; i++) {
            const element = removeCanvas[i];
            element.remove();
        }

        const removeButtons = document.querySelectorAll('.buttons');

        for (let i = 0; i < removeButtons.length; i++) {
            const element = removeButtons[i];
            element.remove();
        }
    }
}

window.onload = () => {
    new MainApp();
}
