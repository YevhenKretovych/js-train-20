/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  //  Записуєм в this.brand значення аргументу brand, в this.model значення аргументу model і так далі зі всіми аргументами
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;

  // Рядковому представленю Vehicle призначаємо функцію яка повертає рядок: <brand> <model> <year>
  this.toString = function () {
    return `${this.brend} ${this.model} ${this.year}`;
  };
  // valueOf - це метод, який використовується JavaScript для конвертації об'єкта в примітивне значення.
  // Ми перевизначаємо його тут, щоб в ін повертав this.mileage.
  this.valueOf = function () {
    return this.mileage;
  };
}

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType, speed) {
  // Викликаємо конструктор Vehicle за допомогою apply, передаємо в нього this, [brand, model, year, mileage].
  //  Записуєм в this.fuelType значення аргументу fuelType, в this.speed значення аргументу speed
  Vehicle.apply(this, [brand, model, year, mileage]);
  this.fuelType = fuelType;
  this.speed = speed;

  // Ми можемо перевизначити методи з Vehicle в Car.
  // Рядковому представленю прототипу Car призначаємо функцію яка повертає рядок: <brand> <model> <year> - <fuelType>.
  this.toString = function () {
    return `${this.brend} ${this.model} ${this.year} - ${this.fuelType}`;
  };
  // Cтворюємо метод accelerate для прискорення швидкості прототипу Car, збільшує this.speed на передане число та виводить рядок в консоль: Автомобіль <brand> <model> прискорився до швидкості <speed> км/год
  this.accelerate = 0;
  this.speed += this.accelerate;

  console.log(
    `Автомобіль ${this.brend} ${this.model} прискорився до швидкості ${this.speed} км/год`
  );

  // Метод brake для гальмування прототипу Car,зменшує this.speed на передане число та виводить рядок в консоль в консоль: Автомобіль <brand> <model> зменшив до швидкості <speed> км/год
  this.brake = 0;
  this.speed -= this.brake;

  console.log(
    `Автомобіль ${this.brend} ${this.model} зменшив до швидкості ${this.speed} км/год`
  );
}

// Створюємо новий екземпляр об'єкта Car
/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */
let car = {
  brand: "Audi",
  model: "A6",
  year: 2018,
  mileage: 30000,
  fuelType: "Petrol",
  speed: 0,
};

const newCar = new Car(car);

// Викличемо функції toString та valueOf об'єкта car
console.log(newCar.toString());
console.log(newCar.valueOf());

// Використовуємо методи для прискорення та передаємо 50
Car.accelerate = 50;
// Використовуємо методи для гальмування та передаємо 20
Car.brake = 20;

/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  // Викликаємо Vehicle.call та передаємо в нього: this, brand, model, year, mileage
  //  Записуєм в this.color значення аргументу color, в this.engineType значення аргументу engineType і так далі зі всіми аргументами
  Vehicle.call(this, brand, model, year, mileage);

  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;

  // Додатковий метод specific для прототипу Trucks, примає число якщо воно більше towingCapacity виводить рядок в консоль: Навантаження занадто важке для буксирування, якщо ні то рядок Тягнення навантаження...
  this.specific = 0;
  if (this.specific > this.towingCapacity) {
    console.log("Навантаження занадто важке для буксирування");
  } else {
    console.log("Тягнення навантаження...");
  }
}
// Створюємо новий екземпляр об'єкта Truck
/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */
const myTruck = {
  brand: "Toyota",
  model: "Tundra",
  year: 2019,
  mileage: 20000,
  color: "Red",
  engineType: "V8",
  towingCapacity: 10000,
  fuelType: "Gasoline",
  transmissionType: "Automatic",
  doors: 4,
  weight: 5600,
};

// Викликаємо метод tow з вагою меншою за towingCapacity
Truck.specific = 9999;

// Викликаємо метод tow з вагою більшою за towingCapacity
Truck.specific = 10001;

// Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.
Car.drive = function (drive) {
  this.kilometers += this.drive;
  return `Подорожуємо ${kilometers} кілометрів у ${brand} ${model}`;
};
// Використовуємо bind для зв'язування методу drive з конкретним об'єктом car.
// Це створює нову функцію, в якій this постійно встановлено на car, незалежно від того, як функцію викликають.
// Викликаємо функцію зі значенням 100,

/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  // Перевіряємо, чи функцію було викликано з new, якщо ні виволимо помилку "Конструктор має бути викликаний з 'new'"
  // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage
  //  Записуєм в this.batteryCapacity значення аргументу batteryCapacity
  if (new.target === undefined) {
    return "Конструктор має бути викликаний з 'new'";
  }

  Car.call(this, brand, model, year, mileage);
  this.batteryCapacity = batteryCapacity;

  // Перевизначаємо toString для прототипу ElectricCar він має повертати <brand> <model> <year> - Батарея: <batteryCapacity> kWh
  this.toString = function () {
    return `${this.brand} ${this.model} ${this.year} - Батарея: ${this.batteryCapacity} kWh`;
  };
}
// Створюємо новий екземпляр ElectricCar
/*
 * Екземпляр об'єкту: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */
let electriCar = {
  brand: "Tesla",
  model: "Model S",
  year: 2020,
  mileage: 10000,
  batteryCapacity: 100,
};

// Викликаємо метод toString об'єкту tesla та виводимо в консоль
let tesla = new ElectricCar(electriCar);
console.log(tesla.toString());
