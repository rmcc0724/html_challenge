var A = {
    x: function() {
        console.log('x');
        return A;
    },
    y: function() {
        console.log('y');
        return A;
    },
    z: function() {
        console.log('z');
        return A;
    }
};
A.x().y().z();


console.log(0.1 + 0.2);

const x = 'constructor';

console.log(x[x](01));