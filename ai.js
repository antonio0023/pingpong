function Ai() {
	this.x = width - 10;
	this.y = height/2 ;
	this.v = 5;
	this.w = 20;
	this.h = 80;
	this.points= 0;

	this.show = function() {
		rectMode(CENTER);
		fill(30,217,102);
		rect(this.x,this.y,this.w,this.h);

	}
	this.move = function(ball) {

	if(ball.x > width/2){
		if(ball.y > this.y){
			this.y += this.v;
		}
		else if(ball.y < this.y){
			this.y -= this.v;

		}
	}	
	}
}