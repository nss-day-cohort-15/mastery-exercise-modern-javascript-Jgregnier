RobotBattleDome = (function(robotBattleDome){

   robotBattleDome.roboArsenal = {};

    robotBattleDome.roboArsenal.Weapon = function() {
      this.name = "bare Robot Hands";
      this.healthBonus = 0;
      this.damageBonus = 0;
      this.speedBonus = 0;
    };

    robotBattleDome.roboArsenal.Flamethrower = function() {
      this.name = "Flamethrower";
      this.healthBonus = 5;
      this.damageBonus = 3;
      this.speedBonus = 1;
    };
    robotBattleDome.roboArsenal.Flamethrower.prototype = new robotBattleDome.roboArsenal.Weapon();

    robotBattleDome.roboArsenal.PhotonCannon = function() {
      this.name = "PhotonCannon";
      this.healthBonus = 3;
      this.damageBonus = 3;
      this.speedBonus = 3;
    };
    robotBattleDome.roboArsenal.PhotonCannon.prototype = new robotBattleDome.roboArsenal.Weapon();

    robotBattleDome.roboArsenal.SlicyBlades = function() {
      this.name = "SlicyBlades";
      this.healthBonus = -5;
      this.damageBonus = 5;
      this.speedBonus = 3;
    };
    robotBattleDome.roboArsenal.SlicyBlades.prototype = new robotBattleDome.roboArsenal.Weapon();

    robotBattleDome.roboArsenal.Chainsaw = function() {
      this.name = "Chainsaw";
      this.healthBonus = 5;
      this.damageBonus = 10;
      this.speedBonus = -5;
    };
    robotBattleDome.roboArsenal.Chainsaw.prototype = new robotBattleDome.roboArsenal.Weapon();

    robotBattleDome.roboArsenal.RadGuns = function() {
      this.name = "RadGuns";
      this.healthBonus = 10;
      this.damageBonus = 10;
      this.speedBonus = -1;
    };
    robotBattleDome.roboArsenal.RadGuns.prototype = new robotBattleDome.roboArsenal.Weapon();

    robotBattleDome.roboArsenal.MachineGun = function() {
      this.name = "MachineGun";
      this.healthBonus = 5;
      this.damageBonus = 3;
      this.speedBonus = -1;
    };
    robotBattleDome.roboArsenal.MachineGun.prototype = new robotBattleDome.roboArsenal.Weapon();

  return robotBattleDome

})(RobotBattleDome || {})

