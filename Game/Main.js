import { LoadImage } from "Engine/ImageLoader";
import { SetupControls } from "Engine/ControlBindings";
import Player from "./Player";
import Vector2 from "Engine/Vector2";
import Canvas from "Engine/Canvas";
import { EntityPipeline } from "Engine/EntityPipeline";

// @ts-ignore
let canvas = new Canvas();
let pipeline = new EntityPipeline(canvas);
SetupControls();

(async () => {
  var player1 = new Player(
    await LoadImage("assets/Player.png"),
    new Vector2(10, 10)
  );

  player1.usesVelocity = true;
  pipeline.AddEntity(player1);
  pipeline.BeginProcessing();
})();
