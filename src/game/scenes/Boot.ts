import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
        this.add.text(20, 20, 'Boot Sequence Initiated.');
        this.load.image('background', 'assets/bg.png');
        this.load.bitmapFont({
            key: 'Oswald',
            textureURL: 'public/assets/font/OswaldLightRed.png',
            fontDataURL: 'public/assets/font/OswaldLightRed.xml',
        });
        this.load.image('logo', 'public/assets/logo.png');
        this.load.image('splashscreen', 'public/assets/splashscreen.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
