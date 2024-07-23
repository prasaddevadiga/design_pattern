# Builder Pattern

**Builder** is a creational design pattern in software design that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code. The pattern separates the construction of a complex object from its representation.

## Components of builder design pattern
**Product**
> Product is the complex object that the builder pattern is responsible in constructing

**Builder**
> The Builder is an interface or an abstract class that declares the construction steps for building a complex object

**Concrete Builder**
> ConcreteBuilder classes implement the Builder interface, providing specific implementations for building each part of the product.

**Director**
> The Director is responsible for managing the construction process of the complex object.

**Client**
> The Client is the code that initiates the construction of the complex object.


```

class House {
    private doors: number;
    private windows: number;
    private hasGarage: boolean;
    private hasSwimmingPool: boolean;
    private hasGarden: boolean;

    constructor(builder: HouseBuilder) {
        this.doors = builder.doors;
        this.windows = builder.windows;
        this.hasGarage = builder.hasGarage;
        this.hasSwimmingPool = builder.hasSwimmingPool;
        this.hasGarden = builder.hasGarden;
    }

    displayFeatures() {
        console.log(`House with ${this.doors} doors, ${this.windows} windows, ` +
                    `${this.hasGarage ? 'a garage, ' : ''}` +
                    `${this.hasSwimmingPool ? 'a swimming pool, ' : ''}` +
                    `${this.hasGarden ? 'a garden' : ''}.`);
    }
}

interface HouseBuilderInterface {
    setDoors(doors: number): HouseBuilderInterface;
    setWindows(windows: number): HouseBuilderInterface;
    setGarage(hasGarage: boolean): HouseBuilderInterface;
    setSwimmingPool(hasSwimmingPool: boolean): HouseBuilderInterface;
    setGarden(hasGarden: boolean): HouseBuilderInterface;
    build(): House;
}

class HouseBuilder implements HouseBuilderInterface {
    public doors: number;
    public windows: number;
    public hasGarage: boolean;
    public hasSwimmingPool: boolean;
    public hasGarden: boolean;

    constructor() {
        this.doors = 0;
        this.windows = 0;
        this.hasGarage = false;
        this.hasSwimmingPool = false;
        this.hasGarden = false;
    }

    setDoors(doors: number): HouseBuilderInterface {
        this.doors = doors;
        return this;
    }

    setWindows(windows: number): HouseBuilderInterface {
        this.windows = windows;
        return this;
    }

    setGarage(hasGarage: boolean): HouseBuilderInterface {
        this.hasGarage = hasGarage;
        return this;
    }

    setSwimmingPool(hasSwimmingPool: boolean): HouseBuilderInterface {
        this.hasSwimmingPool = hasSwimmingPool;
        return this;
    }

    setGarden(hasGarden: boolean): HouseBuilderInterface {
        this.hasGarden = hasGarden;
        return this;
    }

    build(): House {
        return new House(this);
    }
}

class Director {
    private builder: HouseBuilderInterface;

    constructor(builder: HouseBuilderInterface) {
        this.builder = builder;
    }

    constructLuxuryHouse() {
        this.builder.setDoors(10)
            .setWindows(15)
            .setGarage(true)
            .setSwimmingPool(true)
            .setGarden(true);
    }

    constructSimpleHouse() {
        this.builder.setDoors(2)
            .setWindows(4)
            .setGarage(false)
            .setSwimmingPool(false)
            .setGarden(false);
    }
}


const builder = new HouseBuilder();
const director = new Director(builder);

director.constructLuxuryHouse();
const luxuryHouse = builder.build();
luxuryHouse.displayFeatures(); // House with 10 doors, 15 windows, a garage, a swimming pool, a garden.

director.constructSimpleHouse();
const simpleHouse = builder.build();
simpleHouse.displayFeatures(); // House with 2 doors, 4 windows.

```