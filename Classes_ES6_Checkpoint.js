class Computer {
  constructor(computerBrand, computerModel) {
    this.computerBrand = computerBrand;
    this.computerModel = computerModel;
  }
  getComputerInfo() {
    return `${this.computerBrand} ${this.computerModel}`;
  }
}

class myComputer extends Computer {
  constructor() {
    super("Mac", "MacBook Pro");
  }
}

var m = new myComputer();
console.log(m.Computer());
