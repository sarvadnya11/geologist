class Plane{
    constructor(x, y, width, height){
      var options = {
        istatic : true
    
}

this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width
this.height = height
World.add(world, this.body);
  
}


display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.y, pos.x, this.width, this.height);
}
};