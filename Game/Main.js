import { LoadImage } from "Engine/ImageLoader";
import { SetupControls } from "Engine/ControlBindings";
import Player from "./Player";
import Vector2 from "Engine/Vector2";
import Canvas from "Engine/Canvas";
import EntityPipeline from "Engine/EntityPipeline";
import Entity from "Engine/Entity.js"
import Sprite from "Engine/Entities/Sprite";

// @ts-ignore
let pipeline = EntityPipeline();

SetupControls();

(async () => {
  var bgImage = await LoadImage("assets/Bg.png");
  var playerImage = await LoadImage("assets/Player.png");
  var enemy01Image = await LoadImage("assets/Enemy_01.png");
  var enemy02Image = await LoadImage("assets/Enemy_02.png");
  var bulletImage = await LoadImage("assets/bullet.png");

  new Sprite(playerImage, new Vector2(100,100));

  //pipeline.BeginProcessing();
})();
