class Chain {

constructor (bodyA,bodyB){
    
    var bird ={
        bodyA:bodyA,
        bodyB:bodyB,
        stiffness: 2,
        length: 1

    }

    this.chain = Constraint.create(bird);
    World.add(world,this.chain);


}

 display(){
 var pointA = this.chain.bodyA.position;
 var pointB = this.chain.bodyB.position;


 strokeWeight(4);
 line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}