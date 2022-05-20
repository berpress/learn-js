interface Shape {
    drawCircle();
    drawSquare();
    drawRectangle();
    drawTriangle();
}

// solution 
interface Shape {
    draw();
}
interface ICircle {
    drawCircle();
}
interface ISquare {
    drawSquare();
}
interface IRectangle {
    drawRectangle();
}
interface ITriangle {
    drawTriangle();
}
class Circle implements ICircle {
    drawCircle() {
        //...
    }
}
class Square implements ISquare {
    drawSquare() {
        //...
    }
}
class Rectangle implements IRectangle {
    drawRectangle() {
        //...
    }    
}
class Triangle implements ITriangle {
    drawTriangle() {
        //...
    }
}
class CustomShape implements Shape {
   draw(){
      //...
   }
}