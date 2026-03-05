import "./style.css";
import ghostEnemy from "./enemy_ghost.png";
import spiderEnemy from "./enemy_spider.png";
import wormEnemy from "./enemy_worm.png";

let ghostImage = new Image();
ghostImage.src = ghostEnemy;
let spiderImage = new Image();
spiderImage.src = spiderEnemy;
let wormImage = new Image();
wormImage.src = wormEnemy;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.widthg = 500;
canvas.height = 800;

class Game {
  construcctor() {
    this.enemies = [];
  }
  update() {}
  draw() {}
  #addNewEnemy() {}
}
class Enemy {
  constructor() {}
  update() {}
  draw() {}
}

let last = 0;
function animate(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(animate);
}
animate();
