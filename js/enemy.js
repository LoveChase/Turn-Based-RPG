let enemy;

function Enemy(uuid, enemyType, health, mana, strength, agility, speed, defense, element, type, attPerTurn) {
  this.uuid = uuid;
  this.enemyType = enemyType;
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
