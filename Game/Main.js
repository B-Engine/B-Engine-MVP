import { LoadImage } from "Engine/ImageLoader";
import { SetupControls } from "Engine/ControlBindings";
import Player from "./Player";
import Vector2 from "Engine/Vector2";
import Canvas from "Engine/Canvas";
import { EntityPipeline } from "Engine/EntityPipeline";
import Background from "./Background";
import Projectile from "./Projectile";

// @ts-ignore
let canvas = new Canvas();
let pipeline = new EntityPipeline(canvas);
SetupControls();

(async () => {
  var bgImage = await LoadImage("assets/Bg.png");
  var playerImage = await LoadImage("assets/Player.png");
  var enemy01Image = await LoadImage("assets/Enemy_01.png");
  var enemy02Image = await LoadImage("assets/Enemy_02.png");
  var bulletImage = await LoadImage("assets/bullet.png");

  var bg = new Background(
    bgImage,
    Vector2.zero(),
    new Vector2(bgImage.width, bgImage.height)
  );

  bg.usesVelocity = false;
  pipeline.AddEntity(bg);

  
  var player1 = new Player(
    playerImage,
    new Vector2(238, 832),
    new Vector2(playerImage.width, playerImage.height)
  );

  player1.setAmmo(bulletImage);
  player1.setPipeline(pipeline);
  player1.usesVelocity = true;
  pipeline.AddEntity(player1);

  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      let enemy = new Projectile(
        enemy01Image,
        new Vector2(174+x*64, 96+y*64),
        new Vector2(enemy01Image.width, enemy01Image.height)
      );
      enemy.usesVelocity = true;
      pipeline.AddEntity(enemy);
    }
  }

  for (let y = 0; y < 2; y++) {
    let enemy = new Projectile(
      enemy02Image,
      new Vector2(71, 128+y*64),
      new Vector2(enemy01Image.width, enemy01Image.height)
    );
    enemy.usesVelocity = true;
    pipeline.AddEntity(enemy);
  }

  for (let y = 0; y < 2; y++) {
    let enemy = new Projectile(
      enemy02Image,
      new Vector2(405, 128+y*64),
      new Vector2(enemy01Image.width, enemy01Image.height)
    );
    enemy.usesVelocity = true;
    pipeline.AddEntity(enemy);
  }


  pipeline.BeginProcessing();
})();
