import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
      this.cameras.main.setBackgroundColor(0xF5D77C);

      const logo = this.add.image(180, 100, 'logo');
      logo.setScale(0.3);
      this.logo = logo;

      const text1 = this.add.bitmapText(-300, 200, 'Oswald', 'NeoAlchemy', 32);
      this.companyLine1 = text1;
      const text2 = this.add.bitmapText(-300, 230, 'Oswald', 'Indie Games', 32);
      this.companyLine2 = text2;

      this.add.text(150, 300, ['Loading...'], {
          fontFamily: 'Arial',
          fontSize: '12px',
          color: 'black',
          align: 'center',
      });
    }

    preload ()
    {
      //  Load the assets for the game - Replace with your own assets
      this.load.setPath('assets');
    }

    private logo!: Phaser.GameObjects.Image;
    private companyLine1!: Phaser.GameObjects.BitmapText;
    private companyLine2!: Phaser.GameObjects.BitmapText;

    create ()
    {
      //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
      //  For example, you can define global animations here, so we can use them in other scenes.

      //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
      this.tweens.add({
          targets: this.logo, //your image that must spin
          rotation: 2 * Math.PI, //rotation value must be radian
          ease: 'Bounce',
          delay: 600,
          duration: 600, //duration is in milliseconds
        });
    
        this.tweens.add({
          targets: this.companyLine1, //your image that must spin
          x: '110',
          ease: 'Elastic',
          duration: 500, //duration is in milliseconds
        });
        this.tweens.add({
          targets: this.companyLine2, //your image that must spin
          x: '110',
          ease: 'Elastic',
          duration: 500, //duration is in milliseconds
        });
    
        setTimeout(() => {
          //this.scene.start('Game');
        }, 2000);
    }
}
