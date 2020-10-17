var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","5e726d97-7fec-4353-ab8f-6954a9c281fc"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"AvDTkWOoceEI.DyEZi6rzijpbagKUnbS","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"OE6Edtqp7uLHPIi42BYYpdwUPPujl3q3","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"h27Fe.guqadySGoi9x.ld231fQNU23Mj","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"5e726d97-7fec-4353-ab8f-6954a9c281fc":{"sourceSize":{"x":1003,"y":771},"frameSize":{"x":1003,"y":771},"frameCount":1,"frameDelay":4,"name":"jungle-min-min.jpg_1","sourceUrl":"assets/v3/animations/MIQEfC_gCzBPXJi53-8MYdDCqeb3Nego9W-yZjF3tE4/5e726d97-7fec-4353-ab8f-6954a9c281fc.png","size":87268,"version":"VheQ1YQTINZsu1S0E7iAt_8QZrg5ug8S","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/MIQEfC_gCzBPXJi53-8MYdDCqeb3Nego9W-yZjF3tE4/5e726d97-7fec-4353-ab8f-6954a9c281fc.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ground = createSprite(400, 200,20,20);
ground.setAnimation( "jungle-min-min.jpg_1");



var player = createSprite(180, 345,20,20);
player.setAnimation( "monkey");
player.scale = 0.1;

var banana = createSprite(270, 100,20,20);
banana.setAnimation( "Banana");
banana.scale = 0.1;

var stone = createSprite(300, 357,10,70);
stone.setAnimation( "Stone");
stone.scale = 0.1;

var ground = createSprite(500, 380,670,10);
ground.velocityX = -4;
ground.x = ground.width/2;


var survivaltime=0;



function draw() {
   background(255);
   
   ground.velocityX = -4;
   if (ground.x>0){
     ground.x = ground.width /2;
   }
  
drawSprites();
        
  
}




  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
