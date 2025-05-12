const data = {
    name: "John",
    age: 25,
    city: "New York",
    job: "Developer",
    hobby: "Gaming"
};
for (let object in data) {
    console.log(`${object}: ${data[object]}`);
}


const data1 = [
    { name: "John", age: 25, city: "New York" },
    { name: "Jane", age: 30, city: "London" },
    { name: "Bob", age: 22, city: "Paris" },
    { name: "Alice", age: 28, city: "Tokyo" }
];
for (let index in data1) {
    console.log(`Person ${parseInt(index) + 1}:`);
    for (let key in data1[index]) {
        console.log(`${key}: ${data1[index][key]}`);
    }
}