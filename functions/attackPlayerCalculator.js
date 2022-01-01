function attackPlayerCalculator(i, player, enemy) {
    let totalAttack = enemy[i].attack - player.defense;
    if(totalAttack < 0){
        totalAttack = 0;
    }

    if(totalAttack > player.health){
        totalAttack = player.health;
    }

    if(enemy[i].health === 0){
        enemy[i].attack = 0;
        console.log("Enemy are dead")
    }
    return player.health - totalAttack;
}

export {attackPlayerCalculator};