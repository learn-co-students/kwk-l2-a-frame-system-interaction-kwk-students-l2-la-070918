const SCENE = document.querySelector('a-scene')
const GAME = SCENE.systems['game']
const THUNDERDOME = new Thunderdome()
const CAMERA = document.getElementById("camera")
SCENE.appendChild(THUNDERDOME.el)


function main() {
  GAME.spawnPlayer()
  GAME.spawnBall()
  GAME.spawnBall()
  GAME.spawnBall()
  GAME.spawnBall()
  GAME.spawnBall()
 
  if (Game.checkPlayerCollision(ball)){
    console.log ("Game restart")
    Game.restart()
  }
  
}



SCENE.addEventListener('loaded', main())
