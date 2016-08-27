var RobotBattleDome = (function(robotBattleDome) {

  robotBattleDome.robotWarriors = {};

  robotBattleDome.robotWarriors.Player = function(name) {
	  this.roboName = name || "Anonymous Robot Killing Machine";
	  this.roboType = null;

	  this.health = 100;
	  this.damage = 10;
	  this.speed = 10;

	  this.weapon = null;
    this.modification = null;

    this.attack = function(target) {
    	var damage = this.damage;
      target.health -= damage;
      return target
    }

  }
return robotBattleDome

})(RobotBattleDome || { })





