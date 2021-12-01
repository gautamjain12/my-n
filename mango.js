class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            'restitution':0.5,
            'friction':1.0,
        }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    this.image=loadImage("mango.png");
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        this.image(this.image,0,0,this.radius);
        pop();
    }
}