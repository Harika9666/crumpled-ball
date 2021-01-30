class paper{
    constructor(){
          var options={
              isStatic:false,
              restitution:0.3,
              density:1.2

            }

     this.body = Bodies.circle(200,50,40,options);
     this.radius = 40;

     World.add(world,this.body);
    



    }
    
    display(){

 var pos = this.body.position;
 ellipseMode(CENTER);
 fill("yellow");
 ellipse(pos.x,pos.y,40);


    }









}