# problem solve Assignment
#### 1. Differences  interfaces and types in TypeScript...........
### Types .....
  TypeScript's type system describes the various data types supported by the language.
  It is divided into three main categories: arbitrary types, built-in types, and user-defined types.
   TypeScript's type system is used to ensure the correctness of data types in a program.
    Example:
           type User = {
                  name: string;
                  age: number;
                }
   
 ###  What is an Interface?
  An Interface in TypeScript is a Structural contract that entities must adhere to.
  It can only contain the declaration of properties, methods, and events, without any implementation.
  Interfaces define a standard structure that implementing classes follow

   ## Example:
    interface User {
         name: string;
           age: number;
          }


 ##### Key Differences
 Feature 	                interface	                                type
 Extension	                Uses extends to inherit                        	Uses & (intersection)
 Declaration Merging	        Supported	                                Not supported
 Use Cases	                Mainly for object structure	                For objects, unions, tuples, etc.
 Complex Types                	Only for objects	                        More flexible and powerful
  #####  Conclusion
  The interface is easy to use for quick deployment and type is used when more power is needed.

  
### 2. The keyof keyword in TypeScript...............
 ###  What is `keyof`?
   The keyof operator is a TypeScript type operator that takes an object type and returns a string or numeric 
   literal union of its keys.In simple terms, it allows you to get a list of keys of a given object type as a type.
    keyof extracts the keys of a type as a union. It is typically used with generics for flexible and type-safe code.
     Example:
            type asad = {
              name: string;
              age: number;
            };
            
            type asadKeys = keyof asad;
 ### Why Use keyof?
    1.Prevent typos in property names
    2. Create reusable, generic utility types
    3. Enable type-safe dynamic access to object properties
    4. Reduce runtime bugs in form handling, mapping, or filtering operations
 ### Conclusion:
     The keyof keyword is one of TypeScript’s core building blocks for writing safer, smarter, and more reusable code

 Written by: MD.ASADULLA
 Date: 8 May 2025
