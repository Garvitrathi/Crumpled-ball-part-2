class Paper{
   constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5
        }
         this.body=Bodies.circle(x,y,radius,options);
         this.width = radius;
         this.height = radius;
         this.image = loadImage("sprites/paperball.png");
         World.add(world,this.body);
    }
     display(){
         imageMode(RADIUS);
         var pos = this.body.position;
         fill("pink");
         image(this.image,pos.x,pos.y,this.width,this.height);
     }
}