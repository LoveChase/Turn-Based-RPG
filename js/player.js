let player;

function Player(classType, health, mana, strength, agility, speed, defense, element, type) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
  this.defense = defense;
  this.element = element;
  this.type = type;
}

let PlayerMoves = {
  calcAttack: function() {
    // Who attacks first?
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    // Player attacks!
    let playerAttack = function() {
      let calcBaseDamage;
      if (player.mana > 0) {
        calcBaseDamage = player.strength * player.mana / 1000;
      } else {
        calcBaseDamage = player.strength * player.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage - (enemy.defense * .1);
      // Number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    // Enemy attacks!
    let enemyAttack = function() {
      let calcBaseDamage;
      if (enemy.mana > 0) {
        calcBaseDamage = enemy.strength * enemy.mana / 1000;
      } else {
        calcBaseDamage = enemy.strength * enemy.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage - (player.defense * .1);
      // Number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }
    // Get player/enemy health to change later!
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    // Initiate attacks!
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = (playerAttackValues[0] * playerAttackValues[1]);
      enemy.health = enemy.health - totalDamage;
      alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
      if (enemy.health <= 0) {
        alert("You win! Refresh browser to play again.");
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        getEnemyHealth.innerHTML = 'Health: 0';
      } else {
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        // Enemy attacks
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
        if (player.health <= 0) {
          alert("You loose! Refresh browser to play again.");
          getPlayerHealth.innerHTML = 'Health: 0';
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        } else {
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
      }
    } else if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
      if (player.health <= 0) {
        alert("You loose! Refresh browser to play again.");
        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        getPlayerHealth.innerHTML = 'Health: 0';
      } else {
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        // Player attacks
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
        if (enemy.health <= 0) {
          alert("You win! Refresh browser to play again.");
          getEnemyHealth.innerHTML = 'Health: 0';
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        } else {
          getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
        }
      }
    }
  }

}



/////////// 11/4/18

let player;
/* const cards = document.querySelectorAll('.enemy');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard; */


function Player(classType, health, mana, strength, agility, speed, defense, element, type) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
  this.defense = defense;
  this.element = element;
  this.type = type;
}


let PlayerMoves = {
  calcAttack: function() {
    // Who attacks first?
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    // Player attacks!
    let playerAttack = function() {
      let calcBaseDamage;
      if (player.mana > 0) {
        calcBaseDamage = player.strength * player.mana / 1000;
      } else {
        calcBaseDamage = player.strength * player.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      // Number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }

    // Enemy attacks!
    let enemyAttack = function() {
      let calcBaseDamage;
      if (enemy.mana > 0) {
        calcBaseDamage = enemy.strength * enemy.mana / 1000;
      } else {
        calcBaseDamage = enemy.strength * enemy.agility / 1000;
      }
      let offsetDamage = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDamage = calcBaseDamage + offsetDamage;
      // Number of hits
      let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDamage, numberOfHits];
      return attackValues;
    }

    // Get player/enemy health to change later!
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = firstCard;
    let firstCardHealth = $(firstCard).find('.health-enemy');

    console.log(firstCard)
    /* console.log($(getEnemyHealth).find('.health-enemy').replaceWith( "<p class='health-enemy'>Health:"+enemy.health+"</p>" )); */

    // Initiate attacks!
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack();
      let totalDamage = (playerAttackValues[0] * playerAttackValues[1]) - (enemy.defense * .1);
      enemy.health = enemy.health - totalDamage;
      alert("You hit for " + totalDamage);
      if (enemy.health <= 0) {
        alert("You win! Refresh browser to play again.");
        getPlayerHealth.innerHTML = 'Health: ' + player.health;
        $(firstCardHealth).replaceWith( "<p class='health-enemy'>Health: 0</p>" );
      } else {
        $(firstCardHealth).replaceWith( "<p class='health-enemy'>Health: "+ enemy.health +"</p>" );

        // Enemy attacks
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1] - (player.defense * .1);
        player.health = player.health - totalDamage;
        alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
        if (player.health <= 0) {
          alert("You loose! Refresh browser to play again.");
          getPlayerHealth.innerHTML = 'Health: 0';
          $(firstCardHealth).replaceWith( "<p class='health-enemy'>Health: 0</p>" );
        } else {
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        }
      }
    } 
    
    else if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
      if (player.health <= 0) {
        alert("You loose! Refresh browser to play again.");
        $(firstCardHealth).replaceWith( "<p class='health-enemy'>Health: "+ enemy.health +"</p>" );
        getPlayerHealth.innerHTML = 'Health: 0';
      } else {
        getPlayerHealth.innerHTML = 'Health: ' + player.health;

        // Player attacks
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("You hit for " + totalDamage);
        if (enemy.health <= 0) {
          alert("You win! Refresh browser to play again.");
          $(firstCardHealth).replaceWith( "<p class='health-enemy'>Health: 0</p>" );
          getPlayerHealth.innerHTML = 'Health: ' + player.health;
        } else {
          $(firstCardHealth).replaceWith( "<p class='health-enemy'>Health: "+ enemy.health +"</p>" );
        }
      }
    }
  }

}