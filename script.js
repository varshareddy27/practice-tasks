class Complex {
    constructor(real, imaginary) {
      this.real = real
      this.imaginary = imaginary
    }
    add(num) {
      this.real = this.real + num.real
      this.imaginary = this.imaginary + num.imaginary
  
    }
  
    get real() {
      return this._real
    }
  
    get imaginary() {
      return this._imaginary
    }
  
    set imaginary(newImaginary) {
      this._imaginary = newImaginary
    }
  
    set real(newReal) {
      this._real = newReal
    }
  }
  
  let a = new Complex(2, 4)
  console.log(a.real, a.imaginary)
  a.real = 10
  a.imaginary = 10
  let b = new Complex(6, 2)
  a.add(b)
  console.log(`${a.real}+${a.imaginary}i`)
  /*
   class Hum {
     constructor(name, f) {
       this.name = name
       this.f = f
     }
     walk() {
       console.log(this.name + "H ka")
     }
   }
  
   class Student extends Hum {
     walk() {
       console.log(this.name + ":s ka")
     }
   }
  
   let o = new Student("H", "Boy")
  o.walk()
  
  console.log(o instanceof Hum)
  */