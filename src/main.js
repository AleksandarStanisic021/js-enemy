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

canvas.width = 500;
canvas.height = 800;

class Game {
  constructor() {
    this.enemies = [];
    this.#addNewEnemy();
    console.log(this.enemies);
  }
  update() {
    this.enemies.forEach(enemy => enemy.update());
  }
  draw() {
    this.enemies.forEach(enemy => enemy.draw());
  }

  #addNewEnemy() {
    this.enemies.push(new Enemy());
  }
}

class Enemy {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.width = 50;
    this.height = 50;
  }

  update() {
    this.x--;
    if (this.x < 0) {
      this.x = canvas.width;
    }
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const game = new Game();
let lastTime = 0;

function animate(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.update();
  game.draw();


  requestAnimationFrame(animate);
}

animate(0);
