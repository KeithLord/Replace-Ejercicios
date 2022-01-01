function attackEnemyCalculator(i, player, enemy) {
    // if (enemy[i].health === 0) {
    //     i++;
    // }
    
    let totalAttack = player.attack - enemy[i].defense;

    if(totalAttack < 0){
        totalAttack = 0;
    }

    if(totalAttack > enemy[i].health){
        totalAttack = enemy[i].health;
    }

    return enemy[i].health - totalAttack;
}

export {attackEnemyCalculator};