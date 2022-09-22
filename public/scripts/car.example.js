class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card mb-3">
          <img src="${this.image}" class="card-img" height="300" alt="${this.manufacture}">
          <div class="card-body">
              <div class="card-text">${this.model}</div>
              <h5 class="card-title">${this.rentPerDay}</h5>
              <div class="card-text">${this.description}</div>
              <div class="card-text">${this.capacity}</div>
              <div class="card-text">${this.transmission}</div>
              <div class="card-text">${this.year}</div>
          </div>
      </div>
    `;
  }
}
