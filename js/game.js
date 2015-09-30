/**
* @author Santiago Mejia
*
*/

var background;

/**
 * Initiates the phaser game
 * @params {width, height, canvas or webgl}
 * @type {Phaser.Game}
 */

var game = new Phaser.Game(1200, 800, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});


function preload(){
    /**
     * Loads an image before launching the game
     */
    game.load.image('background', 'assets/background.jpg');
    game.load.image('character', 'assets/character.png');

}

function create(){

    /**
     * Adds an image asking for x and y points and src of the image
     * @type {*|Phaser.Sprite}
     */
    backgroundSprite = game.add.sprite(0, 0, 'background');
    characterSprite = game.add.sprite(game.world.centerX, 0, 'character');

    /**
     * Starts game physics
     */
    game.physics.startSystem(Phaser.Physics.ARCADE);

    /**
     * Enables physics to a specific sprite
     */
    game.physics.enable(characterSprite, Phaser.Physics.ARCADE);

    /**
     * This one creates gravity for our character
     * @type {number}
     */
    characterSprite.body.acceleration.y = 200;

    /**
     * Collision with the boundaries of the screen
     * @type {boolean}
     */
    characterSprite.body.collideWorldBounds = true;

    /**
     * Prevents the character from keep running
     * @type {number}
     */
    characterSprite.body.drag.x = 50;

    /**
     * Solves the teleportation problem when the sprite is rotated to left or right
     */
    characterSprite.anchor.setTo(.5,.5);



}

function update(){

    /**
     * Checks the inputs from the keyboard and apply movement to the sprite
     */
    if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
        /**
         * Speed of the character
         * @type {number}
         */
        characterSprite.body.velocity.x = -50;
        /**
         * Rotates the character according to left or right
         * @type {number}
         */
        characterSprite.scale.x = -1;

    }else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        /**
         * Speed of the character
         * @type {number}
         */
        characterSprite.body.velocity.x = 50;
        /**
         * Rotates the character according to left or right
         * @type {number}
         */
        characterSprite.scale.x = 1;

    }

}