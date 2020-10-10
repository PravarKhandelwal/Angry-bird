class log{
    constructor(x,y,h,angle){
        var options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,20,h,options);
        this.w = 20;
        this.h = h;
        Matter.Body.setAngle(this.body, angle);
   World.add(world, this.body);
  

    }
    display()
    {
        push ()
        var a= this.body.angle;
        var pause = this.body.position;
        translate(pause.x,pause.y);
fill ("red");       
 rotate (a);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop ()
    }
}