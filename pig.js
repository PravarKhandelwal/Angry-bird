class pig{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,20,20);
        this.w = 20;
        this.h = 20;
   World.add(world, this.body);

    }
    display()
    {
        push ()
        var angle = this.body.angle;
        rotate (angle);
        fill ("green");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop ()
    }
}