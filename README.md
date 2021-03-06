Machinist is a game engine for JavaScript. It uses features of HTML5 such as the <canvas> and <audio> tags.

The following is a small example featuring movement with the arrow keys and playing a sound when the spacebar is pressed:

```javascript
guy = {
  sprite: new Sprite("res/test.png"),
  sound: new Sound("res/test.ogg"),
  x: 0,
  y: 0,
  update: function() {
    if (key(keys.up)) this.y -= 4;
    if (key(keys.down)) this.y += 4;
    if (key(keys.left)) this.x -= 4;
    if (key(keys.right)) this.x += 4;
  
    if (key(keys.space)) this.sound.play();
  },
  draw: function() {
    this.sprite.draw(this.x, this.y);
  }
};

level1 = new Scene(guy);

game("canvas", level1);
```

Game code must be `load`ed from an html file.