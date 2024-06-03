// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius
    this.pi = Math.PI
  }

  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return 2 * this.pi * this.radius
  }

  get area(){
    return this.pi * (this.radius ** 2)
  }

  set diameter(value){
    this.radius = value / 2
  }

  set circumference(value){
    this.radius = value / (2 * this.pi)
  }

  set area(value){
    this.radius = Math.sqrt(value / this.pi)
  }
}
