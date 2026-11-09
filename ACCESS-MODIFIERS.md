# ACCESS MODIFIERS

## Introduction

In TypeScript, access modifiers are used to control where the properties and methods of a class can be accessed. This is a key concept in Object-Oriented Programming (OOP). TypeScript primarily uses `public`, `private`, `protected` and `readonly`.

## Detailed Explanation

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

**3. Protected**

A `protected` property can be used within its own class and its child classes.

```typescript
class Person {
  protected name: string = "Shanto";
}

class Student extends Person {
  getName(): string {
    return this.name;
  }
}
```

**4. Readonly**

A `readonly` property cannot be changed once its value has been assigned. Typically, its value is set via the constructor.

```typescript
class Student {
  readonly id: number = 101;
}
```

## Conclusion

In summary, access modifiers help keep class data secure and control access to it. `public` is accessible to everyone, `private` is restricted to the class itself, `protected` is available to the class and its child classes, and `readonly` prevents the value from being modified. Using these modifiers makes code cleaner and more secure.
