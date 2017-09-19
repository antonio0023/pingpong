var player;
var bola;
var rob;
var balls = [];
var numBalls= 0;
function setup() {
	createCanvas(400,500);
	player = new Player();
	bola = new Ball();
	rob = new Ai();
	numBalls = prompt("Cuantas bolas desea?");
	for(var i=0;i<numBalls-1;i++){
		balls.push(new Ball());
	}
	
}
function draw() {
	background(0);
	player.move();
	player.show();
	bola.move();
	bola.show();
	rob.move(bola);
	rob.show();
	if(bola.collision(player))
		bola.vx=4;
	if (bola.collision(rob)) 
		bola.vx=-4;

		if(bola.x < 0){
			rob.points ++;
			throwNewBall();
		}
		if(bola.x > width){
			player.points ++;
			throwNewBall();
		}
}

function throwNewBall(){
	if (balls.length > 0) {
		bola = balls.pop();
		
	}
	
	else {
		if(player.points==rob.points)
		alert("Es un empate! \n Tu: "  + player.points + "\nMaquina: " + rob.points);
	else if(player.points> rob.points){
		alert("Has Ganado! \n Tu: "  + player.points + "\nMaquina: " + rob.points);
}	else {alert("Has perdido!\n Tu: "  + player.points + "\nMaquina: " + rob.points);}
		window.location.reload();
	}
}
