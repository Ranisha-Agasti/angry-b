class SlingShot{
    constructor(bodyA, pointB){
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,25)
        image(this.sling2,170,25)
        
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
            image(this.sling3,pointA.x-25,pointA.y-10,15,30)
            line(pointA.x-25, pointA.y+5,230,54);
        line(pointA.x-25, pointA.y+5,192,55);
    }
  }
    
}