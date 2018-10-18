## Questions

1. What is object-oriented programming?

    There are 4 principles to object-oriented programming.

    **Encapsulation:** Objects can keep their private states (private variables) inside of a class. Other objects don't have direct access to this state but public methods can be called that indirectly invoke changes to the private state.

    **Abstraction:** Each object does not expose all of it's internal implementation details, only the ones that are relevant for other objects to interact with it. The mechanism of objects should be easy to use and should rarely change over time. Even if there are internal implementation changes, it would rarely affect the abstraction used.

    **Inheritance:** Allows you to reuse common logic with parent/child classes. You can store common logic in the parent class and add unique fields into child classes as needed. The child classes will have access to all the fields/methods in the parent class but it will also be able to implement it's own unique logic.

    **Polymorphism:** You can create a parent interface and then have child classes that implement their own versions of the parent methods. For example, let's say you want to write a program that calculates the surface area of different shapes. You can write a parent interface containing `surfaceArea()`. You can then make child classes for different shapes, for example a triangle, square, and rectangle. Each of these child classes will inherit `surfaceArea()` but then you can implement each of the shapes own version of how surface area is calculated. You can also pass a list of mixed figures and the program will find the correct method based on the shape that is passed.

2. What is a constructor?

    It is a special method that is used when creating and initializing a class.

3. What is the purpose of the keyword `super`?

    It is used to access and call functions on an object's parent.

4. What are classes that do not use they keyword `extends` called?

    They are parent classes.
