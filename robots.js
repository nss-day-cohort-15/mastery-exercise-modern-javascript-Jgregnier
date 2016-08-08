function Robot (health, attack) {

	this.health = health;
	this.attack = attack;

	function attackEnemy () {
		console.log(attack)
	};

	function loseHealth (health) {
		console.log(health)
	};
};

// DRONE TYPE

function scoutDrone () {
};

scoutDrone.prototype = new Robot(Math.floor(Math.random() * 70) + 50, 25)

function bommerDrone () {
};

bommerDrone.prototype = new Robot(Math.floor(Math.random() * 140) + 100, 15)

// ATV TYPE

function fastATV () {
};

fastATV.prototype = new Robot(Math.floor(Math.random() * 50) + 30, 35)

function tank () {
};

tank.prototype = new Robot(Math.floor(Math.random() * 180) + 110, 10)


// BIPEDAL TYPE

function walker() {
};

walker.prototype = new Robot(Math.floor(Math.random() * 100) + 75, 25)

function metalGear() {
};

metalGear.prototype = new Robot(200, 50)





