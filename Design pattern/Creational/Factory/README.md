#factory pattern

The **Factory Method** pattern suggests that you replace direct object construction calls with calls to a special factory method. 

The objects are still created via the *new* operator, but it’s being called from within the factory method. Objects returned by a factory method are often referred to as *products*.


**Use the Factory Method when you don’t know beforehand the exact types and dependencies of the objects your code should work with.**
> The Factory Method separates product construction code from the code that actually uses the product. Therefore it’s easier to extend the product construction code independently from the rest of the code.