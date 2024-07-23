var House = /** @class */ (function () {
    function House(builder) {
        this.doors = builder.doors;
        this.windows = builder.windows;
        this.hasGarage = builder.hasGarage;
        this.hasSwimmingPool = builder.hasSwimmingPool;
        this.hasGarden = builder.hasGarden;
    }
    House.prototype.displayFeatures = function () {
        console.log("House with ".concat(this.doors, " doors, ").concat(this.windows, " windows, ") +
            "".concat(this.hasGarage ? 'a garage, ' : '') +
            "".concat(this.hasSwimmingPool ? 'a swimming pool, ' : '') +
            "".concat(this.hasGarden ? 'a garden' : '', "."));
    };
    return House;
}());
var HouseBuilder = /** @class */ (function () {
    function HouseBuilder() {
        this.doors = 0;
        this.windows = 0;
        this.hasGarage = false;
        this.hasSwimmingPool = false;
        this.hasGarden = false;
    }
    HouseBuilder.prototype.setDoors = function (doors) {
        this.doors = doors;
        return this;
    };
    HouseBuilder.prototype.setWindows = function (windows) {
        this.windows = windows;
        return this;
    };
    HouseBuilder.prototype.setGarage = function (hasGarage) {
        this.hasGarage = hasGarage;
        return this;
    };
    HouseBuilder.prototype.setSwimmingPool = function (hasSwimmingPool) {
        this.hasSwimmingPool = hasSwimmingPool;
        return this;
    };
    HouseBuilder.prototype.setGarden = function (hasGarden) {
        this.hasGarden = hasGarden;
        return this;
    };
    HouseBuilder.prototype.build = function () {
        return new House(this);
    };
    return HouseBuilder;
}());
var Director = /** @class */ (function () {
    function Director(builder) {
        this.builder = builder;
    }
    Director.prototype.constructLuxuryHouse = function () {
        this.builder.setDoors(10)
            .setWindows(15)
            .setGarage(true)
            .setSwimmingPool(true)
            .setGarden(true);
    };
    Director.prototype.constructSimpleHouse = function () {
        this.builder.setDoors(2)
            .setWindows(4)
            .setGarage(false)
            .setSwimmingPool(false)
            .setGarden(false);
    };
    return Director;
}());
var builder = new HouseBuilder();
var director = new Director(builder);
director.constructLuxuryHouse();
var luxuryHouse = builder.build();
luxuryHouse.displayFeatures(); // House with 10 doors, 15 windows, a garage, a swimming pool, a garden.
director.constructSimpleHouse();
var simpleHouse = builder.build();
simpleHouse.displayFeatures(); // House with 2 doors, 4 windows.
// luxuryHouse.displayFeatures(); // House with 10 doors, 15 windows, a garage, a swimming pool, a garden.
// simpleHouse.displayFeatures(); // House with 2 doors, 4 windows.
