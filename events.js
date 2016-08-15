$(document).ready(function() {

  var P1RoboName = null;
  var P1RoboType = null;
  var P1Weapon = null;

  var P2RoboName = null;
  var P2RoboType = null;
  var P2Weapon = null;

  var P1;
  var P2;

  $("#battle").on("click", getP1Name);
  $("#battle").on("click", getP1RoboType);
  $("#battle").on("click", getP1Weapon);
  $("#battle").on("click", getP2Name);
  $("#battle").on("click", getP2RoboType);
  $("#battle").on("click", getP2Weapon);
  $("#battle").on("click", createP1);
  $("#battle").on("click", createP2);
  $("#battle").on("click", newView);

  function getP1Name () {
    P1RoboName = $("#P1Name").val()
    return P1RoboName
  }

  function getP1RoboType () {
    P1RoboType = $("#P1RoboSelector option:selected").val()
    return P1RoboType
  }

  function getP1Weapon () {
    P1Weapon = $("#P1WeaponSelector option:selected").val()
    return P1Weapon
  }

  function createP1 () {
    P1 = new RobotBattleDome.robotWarriors.Player(getP1Name());
    var chosenRoboType = new RobotBattleDome.Garage[P1RoboType]();
    var chosenWeapon = new RobotBattleDome.roboArsenal[P1Weapon]();
    P1.roboType = chosenRoboType;
    P1.weapon = chosenWeapon;
    P1.health += P1.roboType.healthBonus;
    P1.damage += P1.roboType.damageBonus;
    P1.speed += P1.roboType.speedBonus;
    P1.health += P1.weapon.healthBonus;
    P1.damage += P1.weapon.damageBonus;
    P1.speed += P1.weapon.speedBonus;
    console.log(P1)
    return P1
  }

  function getP2Name () {
    P2RoboName = $("#P2Name").val()
    return P2RoboName
  }

  function getP2RoboType () {
    P2RoboType = $("#P2RoboSelector option:selected").val()
    return P2RoboType
  }

  function getP2Weapon () {
    P2Weapon = $("#P2WeaponSelector option:selected").val()
    return P2Weapon
  }

  function createP2 () {
    P2 = new RobotBattleDome.robotWarriors.Player(getP2Name());
    var chosenRoboType = new RobotBattleDome.Garage[P2RoboType]();
    var chosenWeapon = new RobotBattleDome.roboArsenal[P2Weapon]();
    P2.roboType = chosenRoboType;
    P2.weapon = chosenWeapon;
    P2.health += P2.roboType.healthBonus;
    P2.damage += P2.roboType.damageBonus;
    P2.speed += P2.roboType.speedBonus;
    P2.health += P2.weapon.healthBonus;
    P2.damage += P2.weapon.damageBonus;
    P2.speed += P2.weapon.speedBonus;
    console.log(P2)
    return P2
  }

  function newView () {
    $("#RobotCreation").html("");

    $("#RobotCreation").append(`
      <div id = "P1Info">
        <div> Player One Name : ${P1RoboName} </div> <br>
        <div> Player One Health : ${P1.health} </div> <br>
        <div> Player One Attack : ${P1.damage} </div> <br>
        <div> Player One Speed : ${P1.speed} </div> <br>
      </div>
      <button id="attackRobots"> Robots Attack! </button>
      <div id = "P2Info">
        <div> Player Two Name : ${P2RoboName} </div> <br>
        <div> Player Two Health : ${P2.health} </div> <br>
        <div> Player Two Attack : ${P2.damage} </div> <br>
        <div> Player Two Speed : ${P2.speed} </div> <br>
      </div>
    `);

    $("#attackRobots").on("click", roboAttack);
  }

  function roboAttack () {
    P1.attack(P2);
    P2.attack(P1);
    console.log(P1);
    console.log(P2);
    checkHealth();
  }

  function checkHealth (){
    if (P1.health <= 0 && P1.health < P2.health ) {
      console.log("P2 Wins!");
      $("#P2Wins").removeClass('hidden');
      $("#P2message").append(`<div> ${P2RoboName} destroyed ${P1RoboName} with it's ${P2.weapon.name}</div>`);
      $("#RobotCreation").hide();
    }
    if (P2.health <=0 && P2.health < P1.health) {
      console.log("P1 Wins!");
      $("#P1Wins").removeClass('hidden');
      $("#P1message").append(`<div> ${P1RoboName} destroyed ${P2RoboName} with it's ${P1.weapon.name}</div>`)
      $("#RobotCreation").hide();
    }
  }
})
