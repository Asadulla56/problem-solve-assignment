# problem solve Assignment
1. differences  interfaces and types in TypeScript...........
    #Types .....
      TypeScript's type system describes the various data types supported by the language.
      It is divided into three main categories: arbitrary types, built-in types, and user-defined types.
      TypeScript's type system is used to ensure the correctness of data types in a program.
   
   #Interface
    An Interface in TypeScript is a Structural contract that entities must adhere to.
    It can only contain the declaration of properties, methods, and events, without any implementation.
    Interfaces define a standard structure that implementing classes follow.
   
2.The keyof keyword in TypeScript...............
  The keyof operator is a TypeScript type operator that takes an object type and returns a string or numeric literal union of its keys.
  In simple terms, it allows you to get a list of keys of a given object type as a type.
  keyof extracts the keys of a type as a union. It is typically used with generics for flexible and type-safe code.

Example:
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
