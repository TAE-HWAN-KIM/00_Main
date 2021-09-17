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

import {
    App as Canvas_Tutorial_SoundTest
} from './12_Canvas_Tutorial_SoundTest/app.js';

var appList = [];

class MainApp {
    constructor() {
        this.buttonsCon = document.createElement('div');
        this.buttonsCon.classList.add('buttonsCon');
        document.body.appendChild(this.buttonsCon);
        //this.buttonsCon = document.querySelector('.buttonsCon');

        this.menuList = [{
                menu: '01_Canvas_Tutorial_WaveLine',
                name: 'WaveLine'
            },
            {
                menu: '02_Canvas_Tutorial_ball',
                name: 'ball'
            },
            {
                menu: '03_Canvas_Tutorial_2balland2bar',
                name: '2balland2bar'
            },
            {
                menu: '04_Canvas_Tutorial_DrawLine',
                name: 'DrawLine'
            },
            {
                menu: '05_Canvas_Tutorial_VideoCanvas',
                name: 'VideoCanvas'
            },
            {
                menu: '06_Canvas_Tutorial_VideoCanvasScroll',
                name: 'VideoCanvasScroll'
            },
            {
                menu: '07_Canvas_Tutorial_MoveGradation',
                name: 'MoveGradation'
            },
            {
                menu: '08_Canvas_Tutorial_RotatingShape',
                name: 'RotatingShape'
            },
            {
                menu: '09_Canvas_Tutorial_ClickWaveLine',
                name: 'ClickWaveLine'
            },
            {
                menu: '10_Canvas_Tutorial_ImageSpletAndWave',
                name: 'ImageSpletAndWave'
            },
            {
                menu: '11_Canvas_Tutorial_VideoSpletAndWave',
                name: 'VideoSpletAndWave'
            },
            {
                menu: '12_Canvas_Tutorial_SoundTest',
                name: 'SoundTest'
            }
        ];

        this.createButtons();

        this.buttonsCon.addEventListener('click', this.buttonClickEvent.bind(this));
        this.activeFdata = '';
        this.activeApp = null;
        
        appList = [
            {key :'Canvas_Tutorial_WaveLine' , value : new Canvas_Tutorial_WaveLine()},
            {key :'Canvas_Tutorial_ball' , value : new Canvas_Tutorial_ball()},
            {key :'Canvas_Tutorial_2balland2bar' , value : new Canvas_Tutorial_2balland2bar()},
            {key :'Canvas_Tutorial_DrawLine' , value : new Canvas_Tutorial_DrawLine()},
            {key :'Canvas_Tutorial_VideoCanvas' , value : new Canvas_Tutorial_VideoCanvas()},
            {key :'Canvas_Tutorial_VideoCanvasScroll' , value : new Canvas_Tutorial_VideoCanvasScroll()},
            {key :'Canvas_Tutorial_MoveGradation' , value : new Canvas_Tutorial_MoveGradation()},
            {key :'Canvas_Tutorial_RotatingShape' , value : new Canvas_Tutorial_RotatingShape()},
            {key :'Canvas_Tutorial_ClickWaveLine' , value : new Canvas_Tutorial_ClickWaveLine()},
            {key :'Canvas_Tutorial_ImageSpletAndWave' , value : new Canvas_Tutorial_ImageSpletAndWave()},
            {key :'Canvas_Tutorial_VideoSpletAndWave' , value : new Canvas_Tutorial_VideoSpletAndWave()},
            {key :'Canvas_Tutorial_SoundTest' , value : new Canvas_Tutorial_SoundTest()}
        ]
    }

    buttonClickEvent(e) {
        if (this.activeApp != null)
            this.activeApp = null;

        this.activeFdata = e.target.getAttribute('data-fdata')

        this.removeCanvas()
        switch (this.activeFdata) {
            case '01_Canvas_Tutorial_WaveLine':
                this.activeApp = appList.find((k,index) => {if(k.key == 'Canvas_Tutorial_WaveLine') return k}).value;
                break;

            case '02_Canvas_Tutorial_ball':
                this.activeApp = appList.find((k,index) => {if(k.key == 'Canvas_Tutorial_ball') return k}).value;
                break;

            case '03_Canvas_Tutorial_2balland2bar':
                this.activeApp = appList.find((k,index) => {if(k.key == 'Canvas_Tutorial_2balland2bar') return k}).value;
                break;

            case '04_Canvas_Tutorial_DrawLine':
                this.activeApp = appList.find((k,index) => {if(k.key == 'Canvas_Tutorial_DrawLine') return k}).value;
                break;

            case '05_Canvas_Tutorial_VideoCanvas':
                this.activeApp = appList.find((k,index) => {if(k.key == 'Canvas_Tutorial_VideoCanvas') return k}).value;
                break;

            case '06_Canvas_Tutorial_VideoCanvasScroll':
                this.activeApp = appList.find((k,index) => {if(k.key == 'Canvas_Tutorial_VideoCanvasScroll') return k}).value;
                break;

            case '07_Canvas_Tutorial_MoveGradation':
                this.activeApp = appList.find((k,index) => {if(k.key == 'Canvas_Tutorial_MoveGradation') return k}).value;
                break;

            case '08_Canvas_Tutorial_RotatingShape':
                this.activeApp = appList.find((k,index) => {if(k.key == 'Canvas_Tutorial_RotatingShape') return k}).value;
                break;

            case '09_Canvas_Tutorial_ClickWaveLine':
                this.activeApp = appList.find((k,index) => {if(k.key == 'Canvas_Tutorial_ClickWaveLine') return k}).value;
                break;

            case '10_Canvas_Tutorial_ImageSpletAndWave':
                this.activeApp = appList.find((k,index) => {if(k.key == 'Canvas_Tutorial_ImageSpletAndWave') return k}).value;
                break;

            case '11_Canvas_Tutorial_VideoSpletAndWave':
                this.activeApp = appList.find((k,index) => {if(k.key == 'Canvas_Tutorial_VideoSpletAndWave') return k}).value;
                break;

            case '12_Canvas_Tutorial_SoundTest':
                //this.activeApp =
                this.activeApp = appList.find((k,index) => {if(k.key == 'Canvas_Tutorial_SoundTest') return k}).value;
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

    createButtons() {
        const len = this.menuList.length;
        const menuDoc = document.createElement('button');
        menuDoc.setAttribute('data-fdata', 'main');
        menuDoc.innerText = 'go to Main';
        this.buttonsCon.appendChild(menuDoc);
        for (let i = 0; i < len; i++) {
            const menu = this.menuList[i];
            const menuDoc = document.createElement('button');
            menuDoc.setAttribute('data-fdata', menu.menu);
            menuDoc.innerText = menu.name;
            this.buttonsCon.appendChild(menuDoc);
        }
    }
}

window.onload = () => {
    new MainApp();
}
