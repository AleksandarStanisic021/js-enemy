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
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.enemies = [];
    this.enemyInterval = 1400;
    this.enemyTimer = 0;
    this.#addNewEnemy();
  }
  update(deltaTime) {
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion);
    if (this.enemyTimer > this.enemyInterval) {
      this.#addNewEnemy();
      this.enemyTimer = 0;
    }
    else {
      this.enemyTimer += deltaTime;
    }
    this.enemies.forEach(enemy => enemy.update());
  }
  draw() {
    this.enemies.forEach(enemy => enemy.draw());
  }

  #addNewEnemy() {
    this.enemies.push(new Enemy(this));
    console.log(this.enemies);
  }
}

class Enemy {
  constructor(game) {
    this.game = game;
    this.x = this.game.width;
    this.y = Math.random() * this.game.height;
    this.width = 50;
    this.height = 50;
    this.markedForDeletion = false;
  }

  update() {
    this.x--;
    if (this.x < -this.width) {
      this.markedForDeletion = true;
    }
  }


  draw() {
    this.game.ctx.fillStyle = "red";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const game = new Game(ctx, canvas.width, canvas.height);
let lastTime = 0;
let deltaTime = 0;


function animate(timestamp) {
  deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, game.width, game.height);
  game.update(deltaTime);
  game.draw();
  requestAnimationFrame(animate);
}

animate(0);
