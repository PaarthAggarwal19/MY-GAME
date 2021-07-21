var Score = 0
var GameState = "play"
function preload(){
gunIMG = loadImage("gun.png")
bulletIMG = loadImage("bullet-png-1024.png")
enemyIMG = loadImage("R.png")
backgroundIMG = loadImage("background.jpg")
//enemyGIF = createImg("R.gif")
}
function setup(){
createCanvas(displayWidth,displayHeight)
gun = createSprite(displayWidth/2,displayHeight/2)
gun.addImage(gunIMG)
gun.scale = 0.09
enemyGroup = new Group()
bulletGroup = new Group()


}
function draw(){
background(backgroundIMG)

//image(enemyIMG,200,200 )
//enemyGIF.position(200,200)

gun.x = mouseX 
gun.y = mouseY

if(keyDown("space")){
bulletG()
}
if (bulletGroup.isTouching(enemyGroup)){
    for(var i = 0;i < enemyGroup.length;i++ ){
   if(enemyGroup[i] && enemyGroup[i].isTouching(bullet)){
       enemyGroup[i].destroy()
       bullet.destroy()
     Score = Score + 2 
     
    
    if (Score === 6){
        GameState = "end"
       textSize(100)
       text("GAME ENDED",displayWidth/2,displayHeight/2) 
       enemyGroup.setVelocityEach(0,0)
       bulletGroup.setVelocityEach(0,0)
       gun.visible = false
    }
}
}
    console.log("DESTROYED!")
}


spaceShip()


drawSprites()
textSize(20)
fill("Blue")
text("SCORE = "+Score,400,100)
}
function spaceShip(){
   if (frameCount % 120 === 0) {
    enemy = createSprite(displayWidth,random(0,displayHeight))
    enemy.addImage(enemyIMG)
    enemy.scale=0.03
    enemy.velocityX = -4
    enemyGroup.add(enemy)
    enemyGroup.setLifetimeEach(150)
   }
}
function bulletG(){
    bullet = createSprite(gun.x,gun.y)
    bullet.addImage(bulletIMG)
    bullet.scale = 0.02
    bullet.velocityX = 5
    bulletGroup.add(bullet)
    bulletGroup.setLifetimeEach(150)

}