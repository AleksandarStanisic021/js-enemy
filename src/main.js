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
let now = 0;
let run = 1500;

function animate(timestamp) {
  let delta = timestamp - last;
  last = timestamp;
  now += delta;
  if (now > run) {
    //TODO
    now = 0;
  }
  requestAnimationFrame(animate);
}

animate(0);
