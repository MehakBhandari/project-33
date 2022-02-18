class createsnowflake{
    constructor(x,y){
        var options = {
            friction:0.001,
            restitution:0.1,
        }
        this.snow = Bodies.circle(x,y,5,options)
        this.image = loadImage("snow4.webp")
        this.radius = 25
        World.add(world,this.snow)

    }
createSnow(){
    imageMode(CENTER)
    image(this.image,this.snow.position.x,this.snow.position.y,this.radius,this.radius)
}
updateY(){
    if(this.snow.position.y>height){
        Matter.Body.setPosition(this.snow,{x:random(0,800),y:random(0,800)})
    }
}
}