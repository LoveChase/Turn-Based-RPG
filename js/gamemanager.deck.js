let playerCard;
let playerOriginal;
let enemyCard;
let enemyOriginal;
let turn =true;

let GameManager = {
  setGameStart: function(name) {
    this.resetPlayer(name);
    this.setPreFight();
    this.setTurn();
  },
  resetPlayer: function(name) {
    switch (name) {
      case "Light Dragon":
        player = new Player(1, name, 200, 0, 200, 100, 50, 100, 'Light', 'Dragon', 2);
        break;
      case "Shadow Dragon":
        player = new Player(2, name, 100, 0, 100, 150, 200, 100, 'Shadow', 'Dragon', 1);
        break;
    }

    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<a onclick="GameManager.setPlayer(this);" data-uuid='+player.uuid+'><img src="img/avatar-player/' + player.name.toLowerCase() + '.png" alt="' + player.name + '" class="img-avatar"><div><h3>' + 
    player.name + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + 
    player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p><p>Defense: ' + player.defense + '</p><p class="AttPerTurn-player">Attacks per Turn: ' + player.attPerTurn + '</p></div></a>';
  },
  setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a><a href="#" class="btn-prefight" onclick="GameManager.endTurn()">End Turn</a>';
    getArena.style.visibility = "visible";
  },
  setTurn: function() {
    turn = true;
  },
  endTurn: function() {
    return turn = false, console.log(turn);
  },
  setFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    // Create enemy!
    let enemy00 = new Enemy(3, "Goblin", 100, 0, 50, 100, 100, 50, 'Earth', 'Minion', 1);
    let enemy01 = new Enemy(4, "Troll", 200, 0, 150, 80, 150, 100, 'Earth', 'Minion', 1);
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
    }
    getHeader.innerHTML = '<p>Task: Choose your move!</p>';
/*     getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>'; */
    getEnemy.innerHTML = '<a onclick="GameManager.setEnemy(this);" data-uuid='+enemy.uuid+'><img src="img/avatar-enemies/' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' +
     enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' +
      enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p><p>Defense: ' + enemy.defense + '</p><p>Attacks per Turn: ' + enemy.attPerTurn + '</p></div></a>';

  },


  setPlayer: function(thisCard){
    console.log(thisCard)
    playerCard = thisCard;
    var attperturn = $(playerCard).find('.AttPerTurn-player').html().replace(/\D/g,'');
    GameManager.revealFooter();
    if (attperturn <= 0){ 
    $(".footer-attack a:first").remove();}

/*         var image = (thisCard.childNodes[0].attributes[0].nodeValue); */
        player.name = (thisCard.childNodes[1].children[0].alt);
        console.log(player.name); 
        player.health = (thisCard.childNodes[1].children[2].childNodes[0].data).replace(/\D/g,'');
        player.mana = (thisCard.childNodes[1].children[3].childNodes[0].data).replace(/\D/g,'');
        player.strength = (thisCard.childNodes[1].children[4].childNodes[0].data).replace(/\D/g,'');
        player.agility = (thisCard.childNodes[1].children[5].childNodes[0].data).replace(/\D/g,'');
        player.speed = (thisCard.childNodes[1].children[6].childNodes[0].data).replace(/\D/g,'');
        player.defense = (thisCard.childNodes[1].children[7].childNodes[0].data).replace(/\D/g,'');
        player.attPerTurn = (thisCard.childNodes[1].children[8].childNodes[0].data).replace(/\D/g,'');
        return playerCard, enemyCard = undefined;
      },

  setEnemy: function(thisCard){
    var footerAttack = document.querySelector(".footer-attack");
    if (playerCard === undefined){return ;}
    else if (footerAttack.style.display === "none"){return ;}
    else if (turn === false){return ;}
    else if (battleReady === false){return ;}
    else{
    enemyCard = thisCard;
    var image = (thisCard.childNodes[0].attributes[0].nodeValue);
    enemy.enemyType = (thisCard.childNodes[0].alt);
    enemy.health = (thisCard.childNodes[1].children[1].childNodes[0].data).replace(/\D/g,'');
    enemy.mana = (thisCard.childNodes[1].children[2].childNodes[0].data).replace(/\D/g,'');
    enemy.strength = (thisCard.childNodes[1].children[3].childNodes[0].data).replace(/\D/g,'');
    enemy.agility = (thisCard.childNodes[1].children[4].childNodes[0].data).replace(/\D/g,'');
    enemy.speed = (thisCard.childNodes[1].children[5].childNodes[0].data).replace(/\D/g,'');
    enemy.defense = (thisCard.childNodes[1].children[6].childNodes[0].data).replace(/\D/g,'');
    enemy.attPerTurn = (thisCard.childNodes[1].children[7].childNodes[0].data).replace(/\D/g,'');
    return enemyCard, PlayerMoves.chooseTarget();}
  },

  revealFooter: function(){
    var footerAttack = document.querySelector(".footer-attack");
    var footerDefend = document.querySelector(".footer-defend");

    if (turn === false && footerDefend.style.display === "block"){
      footerDefend.style.display = "none";
      return ;}

    else if (turn === false){
      footerDefend.style.display = "block";
      return ;}

    else if (footerAttack.style.display === "none") {
      footerAttack.style.display = "block";

    } else {
      footerDefend.style.display = "none";
      footerAttack.style.display = "none";
        $(".footer-attack a:first").replaceWith('<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>');
        return battleReady === false, playerCard === undefined;
    }
  },

  hideFooter: function(){
    var footerAttack = document.querySelector(".footer-attack");
    var footerDefend = document.querySelector(".footer-defend");

    if (turn === false && footerDefend.style.display === "block"){
      footerDefend.style.display = "none";
      return ;}

    else if (turn === false){
      footerDefend.style.display = "block";
      return ;}

    else if (footerAttack.style.display === "none") {
      footerAttack.style.display = "block";
    } else {
      footerDefend.style.display = "none";
      footerAttack.style.display = "none";
        $(".footer-attack a:first").replaceWith('<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>');
        return battleReady === false, playerCard === undefined;
    }
  }
}
