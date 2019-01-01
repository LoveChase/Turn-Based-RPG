let player;
let playerAttackValues;
let enemyAttackValues;
let battleReady;
let canAttack;
/* const cards = document.querySelectorAll('.enemy');

let hasFlippedCard = false;
let lockBoard = false;
let enemyCard, enemyCard; */


function Player(uuid, name, health, mana, strength, agility, speed, defense, element, type, attPerTurn) {
  this.uuid = uuid;
  this.name = name;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
  this.defense = defense;
  this.element = element;
  this.type = type;
  this.attPerTurn = attPerTurn;
}


let PlayerMoves = {
  calcAttack: function() {
    battleReady = true
    //Calc Player Attack
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
      playerAttackValues = [calcOutputDamage, numberOfHits];
      return playerAttackValues;
    }

    //Calc Enemy Attack
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
      enemyAttackValues = [calcOutputDamage, numberOfHits];
      return enemyAttackValues;
    }

    playerAttack();
    enemyAttack();

    // Choose Target
    $(".footer-attack a:first").replaceWith('<a href="#" class="btn-prefight">Choose Target</a>')
    return playerAttackValues, enemyAttackValues, battleReady = true;
  },

  chooseTarget: function() {
    if (battleReady === false){return ;}
    else{ 
      
    // Get player/enemy health to change later!
    let playerCardHealth = $(playerCard).find('.health-player');
    let playerCardAttackPerTurn = $(playerCard).find('.AttPerTurn-player');
    let currentAttPerTurn = $(playerCard).find('.AttPerTurn-player').html().replace(/\D/g,'');
    currentAttPerTurn --;
    console.log(playerCardAttackPerTurn);
/*     let playerCardHealth = $(playerCard).find('data-attPerTurn'); */
/*     let getEnemyHealth = enemyCard; */
    let enemyCardHealth = $(enemyCard).find('.health-enemy');


    /* console.log($(getEnemyHealth).find('.health-enemy').replaceWith( "<p class='health-enemy'>Health:"+enemy.health+"</p>" )); */

    // Initiate attacks!

/*     if (getPlayerSpeed >= getEnemySpeed) { */
      let totalDamage = (playerAttackValues[0] * playerAttackValues[1]) - (enemy.defense * .5);
      enemy.health = enemy.health - totalDamage;
      $(playerCardAttackPerTurn).replaceWith( "<p class='AttPerTurn-player'>Attacks per Turn: "+ currentAttPerTurn +"</p>" );
      alert("You hit for " + totalDamage);
      if (enemy.health <= 0) {
        alert("Enemy Destroyed!");
        $(enemyCard).remove();
        $( ".enemyGravePop" ).append( enemyCard );
        $(playerCardHealth).replaceWith( "<p class='health-player'>Health: "+ player.health +"</p>" );
        $(enemyCardHealth).replaceWith( "<p class='health-enemy'>Health: 0</p>" );
      } else {
        $(enemyCardHealth).replaceWith( "<p class='health-enemy'>Health: "+ enemy.health +"</p>" );

/*         // Enemy attacks
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1] - (player.defense * .1);
        player.health = player.health - totalDamage;
        alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
        if (player.health <= 0) {
          alert("You loose! Refresh browser to play again.");
          $(playerCardHealth).replaceWith( "<p class='health-player'>Health: 0</p>" );
          $(enemyCardHealth).replaceWith( "<p class='health-enemy'>Health: 0</p>" );
        } else {
          $(playerCardHealth).replaceWith( "<p class='health-player'>Health: "+ player.health +"</p>" );
        } */
      }
      GameManager.hideFooter()
      $(".footer a:first").replaceWith('<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>')
      console.log(enemyCard);
      return playerCard = null, enemyCard = null, battleReady = false;
    }
  }


    
/*     else if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
      player.health = player.health - totalDamage;
      alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
      if (player.health <= 0) {
        alert("You loose! Refresh browser to play again.");
        $(firstCardHealth).replaceWith( "<p class='health-enemy'>Health: "+ enemy.health +"</p>" );
        $(playerCardHealth).replaceWith( "<p class='health-player'>Health: 0</p>" );
      } else {
        $(playerCardHealth).replaceWith( "<p class='health-player'>Health: "+ player.health +"</p>" );

        // Player attacks
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("You hit for " + totalDamage);
        if (enemy.health <= 0) {
          alert("You win! Refresh browser to play again.");
          $(firstCardHealth).replaceWith( "<p class='health-enemy'>Health: 0</p>" );
          $(playerCardHealth).replaceWith( "<p class='health-player'>Health: "+ player.health +"</p>" );
        } else {
          $(firstCardHealth).replaceWith( "<p class='health-enemy'>Health: "+ enemy.health +"</p>" );
        }
      }
    }
  }

} */

}