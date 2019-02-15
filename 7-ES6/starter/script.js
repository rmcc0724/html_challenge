/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/


//This is our main Element class that constructs the name and the buildYear of both Parks and Streets 
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

//Here we extend the Element class with a Parks subclass adding the area and numTrees props
class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    //This is our simple method that divides the number of trees by the area of the park
    treeDensity() {
        var density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square mile.`);
    }
}

//Here we extend the Element class with a Streets subclass adding the name and buildYear props
class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    //Here we classify the street sizes using the Map() function
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)}`);
    }
}



//Here we construct our arrays using the classes above
var allParks = [new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];

var allStreets = [new Street('Meadow Street', 1999, 1.1, 4),
    new Street('Bath Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Blvd', 1982, 2.5, 5)
];


//This is a universal function that takes an array and returns the average sum of all the values divided by the number of indexes
//This function will return an array back of 2 indexes as dictated in the return section
calcAverage = arr => {
    const sum = arr.reduce((prev, curr, index) => prev + curr, 0);
    return [sum, sum / arr.length];
};


reportParks = p => {

    //Density
    p.forEach((p) => p.treeDensity());

    //Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);

    //Destructuring -> This will call a function that returns an array of 2 indexes and assign it to the variables totalAge and avgAge
    const [totalAge, avgAge] = calcAverage(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    //More than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
};

reportStreets = p => {

    //4. Total and average length of the town's streets
    const lengths = p.map(el => el.length);
    const [totallengths, avgLengths] = calcAverage(lengths);
    console.log(`Our ${p.length} streets have a total length of ${totallengths} and an average length of ${avgLengths} km squares.`);

    //5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
    p.forEach(el => el.classifyStreet());
};
console.log(reportParks(allParks));
console.log(reportStreets(allStreets));