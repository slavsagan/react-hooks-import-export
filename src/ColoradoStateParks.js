import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain"
import { elevation as year } from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  RMFunctions.wildlife()
  year()
  
  return (
  <div>
    <h1>Colorado State Parks! and {RMFunctions.trees}</h1>
    <MesaVerde />
  </div>
  )
}

export default ColoradoStateParks
