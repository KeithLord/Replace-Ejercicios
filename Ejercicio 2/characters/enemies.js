import { Player } from "./player.js";
import { valuesRandom } from "../functions/valuesRandom.js"
class Enemy extends Player {
  constructor( health, attack, defense) {
    super(health, attack, defense);
  }
}
let enemys = [];

for (let i = 0; i < 5; i++) {
  
  let health = valuesRandom(500, 1001);
  let attack = valuesRandom(0, 101);
  let defense = valuesRandom(0, 51);
  
  
  let enemy = new Enemy( health, attack, defense);
  enemys.push(enemy);
}
enemys.sort((a,b)=>{
  return b.health - a.health;
})
export { enemys };