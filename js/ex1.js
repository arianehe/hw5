window.onload = function () {
    class Square {
        constructor(side) {
            this.side = side
        }

        perimeter() {
            return this.side * 4
        }

        area() {
            return this.side * this.side
        }

        diagonal() {
            return Math.sqrt(2) * this.side
        }

        describe() {
            var info = "Square with side " + this.side.toString() + " has perimeter of " + this.perimeter().toString() + ", area of " + this.area().toString() + " and diagonal of " + this.diagonal().toString()
            console.log(info)
        }
    }

    var mySquare1 = new Square(2)
    var mySquare2 = new Square(5)
    var mySquare3 = new Square(10)

    mySquare1.describe()
    mySquare2.describe()
    mySquare3.describe()
}
