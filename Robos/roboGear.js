RobotBattleDome = (function(robotBattleDome){

   robotBattleDome.roboMods = {};

    robotBattleDome.roboMods.Mod = function() {
      this.name = "bare Robo Bod";
      this.healthBonus = 0;
      this.damageBonus = 0;
      this.speedBonus  = 0;
    };

    robotBattleDome.roboMods.LightShields = function() {
      this.name = "LightShields";
      this.healthBonus = 10;
      this.damageBonus = 0;
      this.speedBonus  = 2;
    };
    robotBattleDome.roboMods.LightShields.prototype = new robotBattleDome.roboMods.Mod();

    robotBattleDome.roboMods.HeavyShields = function() {
      this.name = "HeavyShields";
      this.healthBonus = 100;
      this.damageBonus = -10;
      this.speedBonus  = -10;
    };
    robotBattleDome.roboMods.HeavyShields.prototype = new robotBattleDome.roboMods.Mod();


    robotBattleDome.roboMods.EnhancedRockets = function() {
      this.name = "EnhancedRockets";
      this.healthBonus = 5;
      this.damageBonus = 10;
      this.speedBonus  = -5;
    };
    robotBattleDome.roboMods.EnhancedRockets.prototype = new robotBattleDome.roboMods.Mod();

    robotBattleDome.roboMods.HeavyRockets = function() {
      this.name = "HeavyRockets";
      this.healthBonus = -100;
      this.damageBonus = 100;
      this.speedBonus  = -50;
    };
    robotBattleDome.roboMods.HeavyRockets.prototype = new robotBattleDome.roboMods.Mod();

    robotBattleDome.roboMods.EngineUpgrade = function() {
      this.name = "EngineUpgrade";
      this.healthBonus = 10;
      this.damageBonus = 10;
      this.speedBonus  = 10;
    };
    robotBattleDome.roboMods.EngineUpgrade.prototype = new robotBattleDome.roboMods.Mod();

    robotBattleDome.roboMods.MegaTurbineJetFuel = function() {
      this.name = "MegaTurbineJetFuel";
      this.healthBonus = -15;
      this.damageBonus = -5;
      this.speedBonus  = +100;
    };
    robotBattleDome.roboMods.MegaTurbineJetFuel.prototype = new robotBattleDome.roboMods.Mod();

  return robotBattleDome

})(RobotBattleDome || {})

