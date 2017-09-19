function Player() {
	this.x = 9;
	this.y = height / 2 ;
	this.v = 5;
	this.w = 20;
	this.h = 80;
	this.points= 0;

	this.show = function() {
		rectMode(CENTER);
		fill(21,153,250);
		rect(this.x,this.y,this.w,this.h);


	}
	this.move =function() {
		if(mouseY < this.y){
			this.y -= this.v;
		} else if(mouseY > this.y){
			this.y += this.v;
		}
	}

}