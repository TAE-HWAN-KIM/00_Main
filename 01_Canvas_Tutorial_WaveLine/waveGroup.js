import{
    Wave
} from './wave.js';

export class WaveGroup{
    constructor(){
        this.totalWaves = 7;
        this.totalPoints = 3;

        this.color = [   'rgba(0, 1, 235,0.4)'
                        ,'rgba(0, 199, 1,0.4)'
                        ,'rgba(0, 199, 235,0.4)'
                        ,'rgba(1, 199, 235,0.4)'
                        ,'rgba(233, 199, 235,0.4)'
                        ,'rgba(233, 1, 235,0.4)'
                        ,'rgba(233, 199, 1,0.4)'
                        ,'rgba(10, 0, 0,0.4)'
                        ,'rgba(10, 0, 10,0.4)'
                        ,'rgba(233, 0, 0,0.4)'
                    ];

        this.waves = [] ;

        for(let i = 0; i< this.totalWaves ; i++){
            const  wave = new  Wave(
                i,
                this.totalPoints,
                this.color[i]
            );           
            this.waves[i] = wave;
        }
    }


    resize (stageWidth, stateHeigth){
        for(let i = 0; i< this.totalWaves ; i++){
            const wave = this.waves[i];
            wave.resize(stageWidth, stateHeigth);
        }
    }

    draw(ctx){
        for(let i = 0; i< this.totalWaves ; i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}