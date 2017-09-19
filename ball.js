var bSize=16;
function Ball() {
	this.x = width/2;
	this.y = height/2;
	this.vx = -4;
	this.vy = 4;

	this.show = function(){
		fill(255,255,0)
		ellipse(this.x,this.y,bSize,bSize);

	}
	this.move = function(){

		if(this.y<1){
			this.vy= 4;
		}else if(this.y>height){
			this.vy=-4;

		}

		this.x += this.vx;
		this.y += this.vy;
	}
	this.collision = function(plyr) {
		var distancia = dist(this.x,this.y,plyr.x,plyr.y);
		if(distancia < bSize + 20) //20 corresponde a la plataforma del jugador
			return true;
		else 
		return false;
	}

}	