class App {
  constructor() {
    // this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("filter");
    this.carContainerElement = document.getElementById("cars-container");
    this.driverOption = document.querySelector('#driver-option')

  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    // const ada = this.ada.value;

    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }

    
    let indx = []
    if(this.driverOption.value == 'Pilih'){
      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.className = 'col-md-3';
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      });
    }else{
      const driver = this.driverOption.value == 'Dengan Sopir' ? true : false
      Car.list.forEach((car) => {
        if(car['available'] == driver){
          indx.push(car['available'])
          const node = document.createElement("div");
          node.className = 'col-md-3';
          node.innerHTML = car.render();
          this.carContainerElement.appendChild(node);
        }
      });
    }
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  // clear = () => {
  //   let child = this.carContainerElement.firstElementChild;

  //   while (child) {
  //     child.remove();
  //     child = this.carContainerElement.firstElementChild;
  //   }
  // };
}
