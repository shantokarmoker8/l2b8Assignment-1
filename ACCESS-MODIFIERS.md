# ACCESS MODIFIERS

## Introduction

In TypeScript, access modifiers are used to control where the properties and methods of a class can be accessed. This is a key concept in Object-Oriented Programming (OOP). TypeScript primarily uses `public`, `private`, `protected` and `readonly`.

## Explanation

**1. Public**

A `public` property can be accessed from outside the class. This is the default access modifier.

```typescript
class Student {
  public name: string = "Shanto";
}

const student = new Student();
student.name;
```

**2. Private**

A `private` property can only be used within its own class. It cannot be accessed from outside the class.

```typescript
class Student {
  private age: number = 22;
}
```
