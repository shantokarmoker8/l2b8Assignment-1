# TYPE vs INTERFACE

## Introduction

In TypeScript, "type" and "interface" are two very important concept. They allow us to define the structure of data contained with variables or objects. While they serve similar purposes, there are some key differences between them.

## Detailed Explanation

Let's start with "interface". It is primarily used to define the structure of and object.

**Example:**

```
interface Student {
name: string;
age: number;
}
```

Hare `Student` has two properties: `name` a string and `age` a number.

Alternatively, the same can be achieved using `type`.

```
type Student = {
name: string;
age: number;
};
```

So, what is the difference between the two?

`interface` is mainly used for defining object structures. If you define multiple interfaces with the same name, TypeScript will automatically merge them.

```
interface User {
name: string;
}

interface User {
age: number;
}
```

In this case, `User` will contain both `name` and `age`.

However, you cannot define a new `type` with the same name as an existing one. On the other hand, `type` allows for the creation of union and intersection types.

```
type Status = "active" | "inactive";
```

Here, the value of `Status` can only be either `active` or `inactive`.

## Conclusion

In summary, both `type` and `interface` help in defining data structures in TypeScript. `interface` is well-suited for defining the structure of objects, while `type` is more versatile for creating union types, intersection types and other complex type definitions.
