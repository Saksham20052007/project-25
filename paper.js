class paper {
    constructor(x, y ,r){
        var options={
            restitution:0.5,
            friction:0.5,
            density:1.2,

        } 

        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, 15, options )
        this.image = loadImage("paper.png");

        World.add(world,this.body); 
        this.image = loadImage("paper.png");

        
    }
    display(){
        var papos = this.body.position;

        push()
        translate(papos.x ,papos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();


    }
}