import { player } from "./characters/player.js";
import { enemys } from "./characters/enemies.js";
import { attackEnemyCalculator } from "./functions/attackEnemyCalculator.js";
import { attackPlayerCalculator } from "./functions/attackPlayerCalculator.js";
console.log(player);
console.log(enemys);

let i = 0;
let round = 0;

while (round < 100) {
    if (i > 4) {
        i = 0
    }
    console.log("===========================");
    console.log(`Round ${round} !!!`);
    console.log(`Enemy ${i} attacks!!!`);
    let enemyHealth = attackEnemyCalculator(i, player, enemys )
    enemys[i].health = enemyHealth;
    let playerHealth = attackPlayerCalculator(i, player, enemys )
    player.health = playerHealth;
    console.log(`Player Health: ${playerHealth}`);
    console.log(`Player attacks to  Enemy ${i} !!!`);
    console.log(`Enemy ${i} Health: ${enemys[i].health}`);
    console.log("===========================");
    console.log("");
    round++;
    i++;
    
    let allDead = enemys.every(enemy => enemy.health == 0)

    if(allDead){
        console.log("End Game")
        break;
    }

    if(player.health <= 0){
        console.log("Game Over. Player Died"); 
        break;
    }


    if(round === 100){
        console.log("Game Over. Anyone's won");
        break;
    }
}