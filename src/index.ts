//problem 1
function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

//problem 2

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 5.5 },
  { title: "Book B", rating: 7.2 },
  { title: "Book C", rating: 3.0 },
];

console.log(filterByRating(books));

// // problem 3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((arr1, arr2) => [...arr1, ...arr2], []);
}

const number = [1, 2, 3];
const string = ["a", "b", "c"];
const boolean = [true, false];

console.log(concatenateArrays<number>(number));

// //problem 4

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `${this.make} ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return this.model;
  }
}

const myCar = new Car("Toyota", 2023, "Camry");
console.log(myCar.getInfo());
console.log(myCar.getModel());

// //problem 5
function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

console.log(processValue("hello"));
console.log(processValue(10));

// Problem 6:

interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  return products.reduce((max, current) =>
    current.price > max.price ? current : max
  );
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

console.log(getMostExpensiveProduct(products));

// //problem 7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
console.log(getDayType(Day.Sunday));

// //problem 8:
async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Number cannot be negative");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return n * n;
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
