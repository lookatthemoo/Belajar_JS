//tidak direkomendasikan
//karena dapat menyebabkan keambiguan dan kesalahan dalam kode

const person = {
    firstname: "John",
    lastname: "Doe"
}

with (person) {
    console.log(firstname); // John
    console.log(lastname); // Doe
    console.log(firstname + " " + lastname); // John Doe
}