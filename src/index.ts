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
// problem 3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((arr1, arr2) => [...arr1, ...arr2], []);
}

//problem 4

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
 //problem 5
function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

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

//problem 7
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

 //problem 8:
async function squareAsync(n: number): Promise<number> {
  if (n < 0) {
    throw new Error("Number cannot be negative");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return n * n;
}
