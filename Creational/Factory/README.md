#factory pattern

The **Factory Method** pattern suggests that you replace direct object construction calls with calls to a special factory method. 

The objects are still created via the *new* operator, but it’s being called from within the factory method. Objects returned by a factory method are often referred to as *products*.