RobotBattleDome = (function(robotBattleDome){

	robotBattleDome.Garage = {};

  robotBattleDome.Garage.roboType = function () {
  	this.name = "Bucket of Bolts"
  	this.healthBonus = 0;
  	this.damageBonus = 0;
  	this.speedBonus = 0;
  };


	// BIPEDAL TYPE
  robotBattleDome.Garage.BiPedal = function() {
  	this.healthBonus = 10;
  	this.damageBonus = 1;
    this.speedBonus = 1;
    this.canRun = true
  };
  robotBattleDome.Garage.BiPedal.prototype = new robotBattleDome.Garage.roboType();

	robotBattleDome.Garage.Walker = function() {
	this.name = "Walker";
	this.healthBonus = (Math.floor(Math.random() * 10) + 20);
	this.damageBonus = 3;
	this.speedBonus = -2;
  };
  robotBattleDome.Garage.Walker.prototype = new robotBattleDome.Garage.BiPedal();


	robotBattleDome.Garage.MetalGear = function() {
  this.name = "METAL GEAR";
  this.healthBonus = (Math.floor(Math.random() * 100))
  this.damageBonus = (Math.floor(Math.random() * 10))
  this.speed = -(Math.floor(Math.random() * 10))
  };
  robotBattleDome.Garage.MetalGear.prototype = new robotBattleDome.Garage.BiPedal()


	// ATV TYPE
  robotBattleDome.Garage.ATV = function() {
  	this.healthBonus = 40;
  	this.damageBonus = 2;
    this.speedBonus = -1;
    this.canDrive = true
  };
  robotBattleDome.Garage.ATV.prototype = new robotBattleDome.Garage.roboType();


	robotBattleDome.Garage.FastATV = function() {
		this.name = "Fast ATV"
    this.healthBonus = 0;
  	this.damageBonus = 1;
    this.speedBonus = 5;
    this.canDrive = true
  };
  robotBattleDome.Garage.FastATV.prototype = new robotBattleDome.Garage.ATV()

	robotBattleDome.Garage.Tank= function() {
		this.name = "TANK"
	  this.healthBonus = 100;
	  this.damageBonus = 10;
	  this.speedBonus = -10;
	  this.canDrive = true
  };
  robotBattleDome.Garage.Tank.prototype = new robotBattleDome.Garage.ATV()

// DRONE TYPE

  robotBattleDome.Garage.Drone = function() {
  this.healthBonus = 0;
  this.damageBonus = 0;
  this.speedBonus = 10;
  this.canFly = true
  };
  robotBattleDome.Garage.Drone.prototype = new robotBattleDome.Garage.roboType();

	robotBattleDome.Garage.ScoutDrone = function () {
		this.name = "Scout Drone"
    this.healthBonus = -20;
  	this.damageBonus = 0;
    this.speedBonus = 20;
    this.canFly = true
  };
  robotBattleDome.Garage.ScoutDrone.prototype = new robotBattleDome.Garage.Drone()

  robotBattleDome.Garage.BomberDrone = function () {
		this.name = "Bomber Drone"
    this.healthBonus = -20;
  	this.damageBonus = (Math.floor(Math.random() * 50) + 20);
    this.speedBonus = 5;
    this.canFly = true
  };
  robotBattleDome.Garage.BomberDrone.prototype = new robotBattleDome.Garage.Drone()

return robotBattleDome
})(RobotBattleDome || { })
