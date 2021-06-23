class Paper
{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.9,
            density:3.2

        }
        
        this.paper = Bodies.rectangle(x,y,70,70,options)
        this.w = 70;
        this.h = 70;
        this.image = loadImage("paper.png")
        World.add(world, this.paper);
    }
    display(){
        push()
        translate(this.paper.position.x,this.paper.position.y)
        
        fill("skyblue")
        rotate(this.paper.angle)
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop()
    }
}