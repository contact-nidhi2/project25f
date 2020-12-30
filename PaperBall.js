class PaperBall{
    constructor(x,y,r){
       var options ={
            sStatic: false,
            restitution :0.3,
            friction :0,
            density :1.2
        }
    this.radius = r;
    this.body=Bodies.circle(x,y,(this.radius-20)/2,options);
    this.image =loadImage("paper.png");
    console.log(this.body);
    World.add(world,this.body)
   
    }
    display(){
     
     var pos =this.body.position; 
	 var angle =this.body.angle;
    
    push();
	translate(pos.x,pos.y);
    rotate(angle);
    fill(255,0,255)
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
	pop();
    }
}
