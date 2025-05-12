const data1 = [
    { name: "John", age: 25, city: "New York" },
    { name: "Jane", age: 30, city: "London" },
    { name: "Bob", age: 22, city: "Paris" },
    { name: "Alice", age: 28, city: "Tokyo" }
];
let index = 1;
for (let person of data1) {
    console.log(`Person ${index}:`);
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    index++;
}