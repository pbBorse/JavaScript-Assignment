//Q2. Perform sorting of an array in descending order.

const numbers = [5, 2, 9, 1, 5, 6];

numbers.sort(function(a, b) {
    return b - a; // Compare in reverse order for descending
});

console.log(numbers); 



