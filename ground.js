class Ground 
{
    constructor(x,y,w,h)
   {
    let Options = {
        isStatic:true
    };

    this.body = Bodies.rectangle(x,y,w,h, Options)
    this.w=w;
    this.h=h;
    World.add(world,this.body);
    
}

    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(0);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }       
    
}    
    