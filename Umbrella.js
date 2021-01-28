class Umbrella {
      
     constructor(x,y,radius){
          var options = {
               isStatic: true,
               restitution: 0.5
          };
          
          this.body = Matter.Bodies.circle(x,y, radius, options);
          this.radius = radius;
          
          World.add(world, this.body);
     }
     display(){
          var pos = this.body.position;
          image(man_image, pos.x - 90, pos.y - 20, 175, 175);

     }
}